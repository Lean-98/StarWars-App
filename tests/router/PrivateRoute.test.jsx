import { render, screen } from '@testing-library/react';
import { PrivateRoute } from '../../src/router/PrivateRoute';
import { AuthContext } from '../../src/auth';
import { MemoryRouter } from 'react-router-dom';
// import { MemoryRouter, Route, Routes } from 'react-router-dom';




describe('Testing in the <PrivateRoute />', () => {  

    test('should show the children if it is  authenticated', () => { 

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                user: 'Juan',
                id: '213'
            }
        }

        render( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/search?q=revan']}>
                    <PrivateRoute><h1>Ruta privada</h1></PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        
        expect( screen.getByText('Ruta privada')).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith("lastPath", "/search?q=revan");
    });

});