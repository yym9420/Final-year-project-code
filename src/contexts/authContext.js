import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const AuthContext = React.createContext(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const googleProvider = new GoogleAuthProvider();

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function googleLogin() {
    return signInWithPopup(auth, googleProvider);
  }

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user)
    })

    return unsubscribe;
  }, [])

  const value = {
    currentUser,
    loading,
    error,
    signup,
    login,
    logout,
    googleLogin,
    setLoading, // 添加 setLoading 到返回的 value 中
    setError // 添加 setError 到返回的 value 中
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}