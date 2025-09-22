import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import BlogCard from '../components/BlogCard';

const blogPosts = [
  {
    id: 1,
    title: 'El arte del café de especialidad',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Descubre los secretos detrás de la preparación del café de especialidad...',
  },
  {
    id: 2,
    title: 'Café de Colombia',
    image: 'https://images.unsplash.com/photo-1511537190424-bbbab1bb7c9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Explorando las regiones cafeteras más famosas de Colombia...',
  },
  {
    id: 3,
    title: 'Métodos de preparación',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Comparativa entre diferentes métodos de preparación...',
  },
  {
    id: 4,
    title: 'Tostado perfecto',
    image: 'https://images.unsplash.com/photo-1501492673258-2d24dfa8b28c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Guía para entender los diferentes niveles de tostado...',
  },
];

export default function HomeScreen() {
  const handleCardPress = (id) => {
    console.log('Blog post pressed:', id);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.grid}>
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            title={post.title}
            image={post.image}
            description={post.description}
            onPress={() => handleCardPress(post.id)}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal: 16,
  },
});
