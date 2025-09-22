import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';

export default function CoffeeLoader({ visible, size = 30, onAnimationComplete }) {
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      // Crear una animación infinita
      Animated.loop(
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 800, // Más rápido
          useNativeDriver: true,
        }),
        { iterations: -1 } // Infinito
      ).start();

      // Llamar a onAnimationComplete después de un tiempo
      setTimeout(() => {
        onAnimationComplete?.();
      }, 1500);
    }
    return () => rotateAnim.setValue(0);
  }, [visible]);

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  if (!visible) return null;

  return (
    <Animated.Image 
      source={require('../../assets/coffee-bean.png')}
      style={[styles.coffeeBean, { width: size, height: size, transform: [{ rotate: spin }] }]}
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  coffeeBean: {
    marginLeft: 10,
    tintColor: '#6F4E37',
  }
});
