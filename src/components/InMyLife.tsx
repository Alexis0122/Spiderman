import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const InMyLife = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Por qué Spider-Man es importante para mí</Text>
      <WebView
        source={{ uri: 'https://www.youtube.com/embed/GLSOS39JKMA' }}
        style={{ width: '100%', height: 300 }}
      />
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
});

export default InMyLife;
