import React from 'react';
import LoginComponent from '../Login';

const Login = () => {
  const [value, onChangeText] = React.useState('');
  return <LoginComponent />;
};

export default Login;
