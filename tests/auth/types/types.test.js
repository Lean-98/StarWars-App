import { types } from '../../../src/auth';


describe('Testing in "Types.js"', () => { 

test('should return these types', () => { 

    expect(types).toEqual({
        login:  '[Auth] Login',
        logout: '[Auth] Logout',
    });

 });

 });