import { render, screen } from '@testing-library/react';
import { AuthContext, LoginPage } from '../../src/auth';
import { MemoryRouter } from 'react-router-dom';
import { AppRouter } from '../../src/router/AppRouter';


describe('Testing in the < AppRouter/>', () => {  

    test(' should show the login if it is not authenticated', () => { 

        const contextValue = {
            logged: false,
        }

        render(
            <MemoryRouter initialEntries={['/jedi']}>
                <AuthContext.Provider value={contextValue}>
                    <LoginPage />
                </AuthContext.Provider>
            </MemoryRouter>
        );
        // screen.debug();
        expect(screen.getAllByText('Login').length).toBe(1);

    });

    test(' should show the jedi component if it is authenticated', () => { 

        const contextValue = {
            logged: true,
            user:{
                user: 'Leeo',
                id: '213'
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );
        // screen.debug();
        expect(screen.getAllByText('Jedi').length).toBeGreaterThanOrEqual(1);
        
    });


});