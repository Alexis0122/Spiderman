// HomePage.tsx
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/photo.png')} style={styles.image} />
      <Text style={styles.text}>Nombre: Alexis Jose</Text>
      <Text style={styles.text}>Apellido: Ramirez taveras</Text>
      <Text style={styles.text}>Correo electrónico: 20221995@itla.edu.do</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default HomePage;
