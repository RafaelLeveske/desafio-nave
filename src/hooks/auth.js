import React, { useState, createContext, useContext, useCallback } from 'react';
import api from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
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

  const signOut = useCallback(() => {
    localStorage.removeItem('@Navedex:token');
    localStorage.removeItem('@Navedex:id');

    setData({});
  }, []);
  return (
    <AuthContext.Provider value={{ id: data.id, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
