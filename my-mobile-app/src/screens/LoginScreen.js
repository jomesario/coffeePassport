import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CoffeeLoader from '../components/CoffeeLoader';
import styles from './styles/LoginScreen.styles';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showCoffeeBean, setShowCoffeeBean] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    setShowCoffeeBean(true);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleAnimationComplete = () => {
    setShowCoffeeBean(false);
    navigation.navigate('Home');
  };

  return (
    <ImageBackground
      source={require('../../assets/coffebeans.jpg')}
      style={styles.backgroundImage}
      imageStyle={{ opacity: 0.2 }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Coffee Passport</Text>
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>
          <CoffeeLoader 
            visible={showCoffeeBean} 
            onAnimationComplete={handleAnimationComplete}
          />
        </View>
        <Text style={styles.or}>O ingresa con</Text>
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png' }}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image
              source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' }}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>
    </ImageBackground>
  );
}