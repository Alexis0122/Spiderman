import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface Character {
  id: string;
  name: string;
  details: string;
  image: string;
}

const characters: Character[] = [
  { id: '1', name: 'Peter Parker', details: 'Peter Parker es un estudiante de secundaria que se convierte en Spider-Man.', image: '../../assets/PeterP.png' },
  { id: '2', name: 'Mary Jane Watson', details: 'Mary Jane Watson es el interés amoroso de Peter Parker.', image: '../../assets/MaryJaneW.jpg' },
  { id: '3', name: 'Norman Osborn', details: 'Norman Osborn es el Duende Verde, el villano de la película.', image: '../../assets/NormanO.jpg' },
];

interface CharacterListProps {
  navigation: NavigationProp<any>;
}

const CharacterList: React.FC<CharacterListProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.name}</Text>
            <Button title="Ver detalles" onPress={() => navigation.navigate('CharacterDetails', { character: item })} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    marginBottom: 16,
  },
});

export default CharacterList;
