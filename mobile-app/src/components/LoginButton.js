import React from 'react';
import { Button, View } from 'react-native';
import { loginWithGmail, loginWithApple } from '../services/authService';

const LoginButton = () => {
  const handleGmailLogin = async () => {
    try {
      const userData = await loginWithGmail();
      console.log('Gmail Login Success:', userData);
    } catch (error) {
      console.error('Gmail Login Error:', error);
    }
  };

  const handleAppleLogin = async () => {
    try {
      const userData = await loginWithApple();
      console.log('Apple Login Success:', userData);
    } catch (error) {
      console.error('Apple Login Error:', error);
    }
  };

  return (
    <View>
      <Button title="Login with Gmail" onPress={handleGmailLogin} />
      <Button title="Login with Apple ID" onPress={handleAppleLogin} />
    </View>
  );
};

export default LoginButton;