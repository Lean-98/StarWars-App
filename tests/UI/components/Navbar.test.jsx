import { fireEvent, render, screen } from '@testing-library/react';
import { AuthContext } from '../../../src/auth/context/AuthContext';
import { MemoryRouter } from 'react-router-dom';
import { Navbar } from '../../../src/ui/components/Navbar';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockUseNavigate,
}));

describe('Tests on <Navbar />', () => { 

    const contextValue = {
        logged: true,
        user: {
            name: 'Juan de la Torre'
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks() );

    test('should show the username', () => { 

        render(
        <MemoryRouter initialEntries={['/login']}>
            <AuthContext.Provider value={contextValue}>
                <Navbar/>
            </AuthContext.Provider>
        </MemoryRouter>
        );
        
        // screen.debug();
        const paragraph = screen.getByText('Juan de la Torre');
        expect(paragraph).toBeTruthy();

    });

    // test('should call logout and navigate when the button is clicked', () => { 

    //     render(
    //         <AuthContext.Provider value={contextValue}>
    //             <MemoryRouter>
    //                 <Navbar />
    //             </MemoryRouter> 
    //         </AuthContext.Provider>
    //     );

    //     const logoutBtn = screen.getByLabelText("button");
    //     fireEvent.click(logoutBtn);

    //     expect( contextValue.logout ).toHaveBeenCalled()
    //     expect( mockUseNavigate ).toHaveBeenCalledWith("/login", { replace: true });


    // });

 }); 