import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acerca de Spider-Man (2002)</Text>
      <Text style={styles.content}>Cantidad de Temporadas: 1 (película)</Text>
      <Text style={styles.content}>Director: Sam Raimi</Text>
      <Text style={styles.content}>Creador: Stan Lee y Steve Ditko (personajes)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  details: {
    fontSize: 18,
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  content: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default About;
