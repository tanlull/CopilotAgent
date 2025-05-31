// login.js - Logic for login validation

export function validateLogin(username, password) {
  if (!username) return { success: false, error: 'Required field: Username' };
  if (!password) return { success: false, error: 'Required field: Password' };
  if (username !== 'demo' || password !== 'dome') {
    return { success: false, error: 'Username or password is incorrect' };
  }
  return { success: true };
}
