import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../src/characters/pages/SearchPage';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

describe('Test on <SearchPage />', () => { 

    beforeEach( () => jest.clearAllMocks() );

    test('should be displayed correctly with default values', () => { 

        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );
        expect( container ).toMatchSnapshot();

     });

     test('should show yoda and the input with the value of the queryString', () => { 

        render(
            <MemoryRouter initialEntries={['/search?q=yoda']}>
                <SearchPage />
            </MemoryRouter>
        );

        const inputValue = screen.getByRole('textbox');
        expect( inputValue.value ).toBe('yoda');

        const img = screen.getByRole('img');
        expect( img.src ).toContain('/assets/characterStarWars/jedi-yoda.webp');
        
        const alert = screen.getByLabelText('alert-danger');
        expect( alert.style.display ).toBe('none');
        // screen.debug();
     });

     test('should display an error if the character is not found(yoda123)', () => { 

        render(
            <MemoryRouter initialEntries={['/search?q=yoda123']}>
                <SearchPage />
            </MemoryRouter>
        );
        const alert = screen.getByLabelText('alert-danger');
        expect( alert.style.display ).toBe('');

      });


     test('should call the navigate to the new screen', () => { 

        const inputValue = 'yoda';

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change( input, { target: { name: 'searchText', value: inputValue }});
        console.log(input.value);

        const form = screen.getByRole('form');
        fireEvent.submit( form );
        
        expect( mockUseNavigate ).toHaveBeenCalledWith(`?q=${inputValue}`);

      });

 });