import { render, screen } from '@testing-library/react';
import { PublicRoute } from '../../src/router/PublicRoute';
import { AuthContext } from '../../src/auth';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Testing in <PublicRoute />', () => { 

    test('should show the children if it is not authenticated', () => { 

        const contextValue = {
            logged: false,
        }

        render( 
            <AuthContext.Provider value={ contextValue }>
                <PublicRoute><h1>Ruta pública</h1></PublicRoute>
            </AuthContext.Provider>
        );
        
        expect( screen.getByText('Ruta pública')).toBeTruthy();
        // screen.debug();
    });

    test('shoul to redirect whit <Navigate /> to jedi page', () => { 

        const contextValue = {
            logged: true,
                user:{
                    name: 'Leandro',
                    id: '213'
                }
            }

        render( 
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={ contextValue }>
                    <Routes>
                        <Route element={<PublicRoute />}>
                            <Route path='login' element={<h1>Public route</h1>} />
                        </Route>
                        <Route path='/jedi' element={<h1>Jedi Page</h1>} />
                    </Routes>
                </AuthContext.Provider>
            </MemoryRouter>
        );
        expect( screen.getByText(/jedi page/i)).toBeTruthy();
    });
 });