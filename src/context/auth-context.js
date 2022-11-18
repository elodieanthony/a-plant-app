import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  email: null,
  password: null,
  login: () => {},
  logout: () => {},
});
