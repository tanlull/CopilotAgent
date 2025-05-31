// login.test.js - Unit tests for login.js
import assert from 'assert';
import { validateLogin } from './login.js';

// Test required fields
assert.deepStrictEqual(validateLogin('', ''), { success: false, error: 'Required field: Username' }, 'Username required');
assert.deepStrictEqual(validateLogin('demo', ''), { success: false, error: 'Required field: Password' }, 'Password required');

// Test incorrect credentials
assert.deepStrictEqual(validateLogin('demo', 'wrong'), { success: false, error: 'Username or password is incorrect' }, 'Wrong password');
assert.deepStrictEqual(validateLogin('wrong', 'dome'), { success: false, error: 'Username or password is incorrect' }, 'Wrong username');

// Test correct credentials
assert.deepStrictEqual(validateLogin('demo', 'dome'), { success: true }, 'Correct credentials');

console.log('All login validation tests passed!');
