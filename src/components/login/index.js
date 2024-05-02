import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/authContext';
import { Button } from '@mui/material';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase'; // 导入 firebase 模块并从中获取 auth 对象
const Login = () => {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 如果用户已登录，则重定向到主页或其他受保护的页面
    if (currentUser) {
      // TODO: 处理重定向逻辑
    }
  }, [currentUser]);

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setLoading(true);
      await signInWithPopup(auth, provider);
      // Google 登录成功后会触发 onAuthStateChanged 事件，自动更新 currentUser
    } catch (error) {
      console.error('Google 登录失败：', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>登录页面</h2>
      <Button onClick={handleGoogleLogin} disabled={loading}>使用 Google 登录</Button>
    </div>
  );
};

export default Login;