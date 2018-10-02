export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';

export const loginAction = (user) => {
  console.log(user)
  return {
    type: LOGIN_USER, 
    data: user
  }
}

export const registerAction = (newUser) => {
  return {
    type: LOGIN_USER,
    data: newUser
  }
}