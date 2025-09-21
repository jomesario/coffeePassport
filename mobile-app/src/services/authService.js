import * as Google from 'expo-auth-session/providers/google';
import * as AppleAuthentication from 'expo-apple-authentication';
import * as AuthSession from 'expo-auth-session';
import { Platform } from 'react-native';

// Configura tus IDs de cliente aquí
const GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com';
const GOOGLE_EXPO_CLIENT_ID = 'YOUR_EXPO_CLIENT_ID.apps.googleusercontent.com'; // Para desarrollo en Expo Go

// Google Sign-In usando AuthSession
export async function loginWithGoogle() {
  const redirectUri = AuthSession.makeRedirectUri({ useProxy: true });
  const result = await AuthSession.startAsync({
    authUrl:
      `https://accounts.google.com/o/oauth2/v2/auth` +
      `?client_id=${GOOGLE_EXPO_CLIENT_ID}` +
      `&redirect_uri=${encodeURIComponent(redirectUri)}` +
      `&response_type=token` +
      `&scope=profile%20email`,
  });

  if (result.type === 'success') {
    return result.params.access_token;
  } else {
    throw new Error('Google login failed');
  }
}

// Apple Sign-In (solo en dispositivos Apple)
export async function loginWithApple() {
  if (Platform.OS !== 'ios') {
    throw new Error('Apple login solo está disponible en iOS');
  }
  try {
    const credential = await AppleAuthentication.signInAsync({
      requestedScopes: [
        AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
        AppleAuthentication.AppleAuthenticationScope.EMAIL,
      ],
    });
    return credential;
  } catch (error) {
    throw new Error('Apple login failed: ' + error.message);
  }
}