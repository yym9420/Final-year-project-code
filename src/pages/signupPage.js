import React from "react";
import Signup from '../components/signup';
import { AuthProvider } from "../contexts/authContext";
import GoogleLoginButton from '../../src/components/GoogleLoginButton'; // 使用绝对路径导入

const SignupPage = () => {
  return (
    <>
      <AuthProvider>
        <Signup/>
        <GoogleLoginButton /> {/* 添加 Google 登录按钮 */}
      </AuthProvider>   
    </>
  );
}

export default SignupPage;