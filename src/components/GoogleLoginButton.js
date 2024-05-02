import React, { useState } from 'react';
import { Button } from '@mui/material';
import { useAuth } from '../contexts/authContext';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // 导入 useNavigate

const GoogleLoginButton = () => {
  const { setLoading, setError } = useAuth();
  const navigate = useNavigate(); // 使用 useNavigate 获取导航函数

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, provider);
      // 登录成功后导航到特定页面（例如首页）
      navigate('/home');
    } catch (error) {
      console.error('Google Sign in failed:', error);
      setError('Failed to sign in with Google');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button variant="contained" onClick={handleGoogleLogin}>Sign in with Google</Button>
  );
};

export default GoogleLoginButton;