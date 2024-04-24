import React, { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/home');
    } catch {
      setError('Failed to log in');
    }
    setLoading(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
       <Typography variant="h4" gutterBottom>
       Welcome to medical answer robot
      </Typography>
      <Typography variant="h4" gutterBottom>
        Log in
      </Typography>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '300px',
          width: '100%',
        }}
        onSubmit={handleSubmit}
      >
        {error && <Alert severity="error" sx={{ marginBottom: 2 
}}>{error}</Alert>}
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          inputRef={emailRef}
          sx={{ marginBottom: 2 }}
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          inputRef={passwordRef}
          sx={{ marginBottom: 2 }}
        />
        <Button variant="contained" type="submit" disabled={loading} sx={{ 
marginBottom: 2 }}>
          Log in
        </Button>
      </form>
      <Typography>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </Typography>
    </Box>
  );
};

export default Login;
