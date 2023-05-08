import { authReducer, types } from '../../../src/auth';


describe("Testing in authReducer", () => {
 
    test('should return the default state', () => {
        
        const state = authReducer({ logged:false }, {});
        expect( state ).toEqual( { logged: false });

    });

    test('should (login) call the login authenticate and set the useReducer', () => {
        
        const action = {
            type: types.login,
            payload: {
                name: 'Leandro Bazan',
                id: '1'
            }
        }

        const state = authReducer({ logged: false}, action );
        expect( state ).toEqual({
            logged: true,
            user: action.payload
        })

    });

    test('should (logout) delete the username and logged to false', () => {

        const state = {
            logged: true,
            user: { id: '123', name: 'Leandro' }
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer( state, action );
        expect( newState ).toEqual({ logged: false });
    });

});

