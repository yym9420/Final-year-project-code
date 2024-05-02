import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Card, Typography } from '@mui/material';
import { useAuth } from '../../contexts/authContext';
import Alert from '@mui/material/Alert';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; // 添加 Google 登录相关的引入
import { auth } from '../../firebase'; // 导入 firebase 模块并从中获取 auth 对象
const Signup = () => {

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Password do not match')
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value)
      navigate('/');
    } catch {
      setError('Failed to create an account')
    }
    setLoading(false);
  }

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, provider);
      navigate('/');
    } catch (error) {
      console.error('Google Sign up failed:', error);
      setError('Failed to sign up with Google');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          textAlign: 'left'
        }}
      >
        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
          onSubmit={handleSubmit}
        >
          <h2 style={{ textAlign:"center" }}>Sign up</h2>
          {/* {currentUser.email} */}
          {error && <Alert severity="error">{error}</Alert>}
          <Typography style={{ textAlign: 'left' }}>Email</Typography>
          <TextField id="Email1" variant="outlined" inputRef={emailRef} 
sx={{paddingBottom: 1.5}} />
          <Typography>Password</Typography>
          <TextField id="Password" variant="outlined" type="password" 
inputRef={passwordRef} sx={{paddingBottom: 1.5}} />
          <Typography>PasswordConfirm</Typography>
          <TextField id="PasswordConfirm" variant="outlined" 
type="password" inputRef={passwordConfirmRef} sx={{paddingBottom: 2}} />
          <Button variant="contained" type="submit" disabled={loading}>Sign 
up</Button>
        </form>
        <Button variant="contained" onClick={handleGoogleSignup} disabled={loading}>Sign up with Google</Button> {/* 添加 Google 登录按钮 */}
        <div sx={{ marginTop: 2 }}>
          Already have an account?{' '}
          <Link to="/" style={{ textDecoration: 'none', color: 'primary.main' }}>
            Log in
          </Link>
        </div>
      </Box>
    </Card>
  );
}

export default Signup;