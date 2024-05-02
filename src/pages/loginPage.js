import React from "react";
import Login from '../components/login';
import GoogleLoginButton from '../../src/components/GoogleLoginButton'; 

const LoginPage = () => {
  return (
    <div>
      <Login />
      <GoogleLoginButton /> {/* 添加 Google 登录按钮 */}
    </div>
  );
}

export default LoginPage;