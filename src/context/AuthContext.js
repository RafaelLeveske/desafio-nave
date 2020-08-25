import React, { useState, createContext, useCallback } from 'react';
import api from '../services/api';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@Navedex:token');
    const id = localStorage.getItem('@Navedex:id');

    if (token && id) {
      return { token, id };
    }

    return {};
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('users/login', {
      email,
      password,
    });

    const { token, id } = response.data;

    localStorage.setItem('@Navedex:token', token);
    localStorage.setItem('@Navedex:id', id);

    setData({ token, id });
  }, []);
  return (
    <AuthContext.Provider value={{ id: data.id, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
