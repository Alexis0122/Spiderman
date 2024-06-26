import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ContactMe = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contrátame</Text>
      <Image source={require('../../assets/photo.png')} style={styles.image} />
      <Text style={styles.details}>Nombre: Alexis Ramirez</Text>
      <Text style={styles.details}>Email: 20221995@itla.edu.do</Text>
      <Text style={styles.details}>Teléfono: 829-278-8555</Text>
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
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  details: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default ContactMe;
