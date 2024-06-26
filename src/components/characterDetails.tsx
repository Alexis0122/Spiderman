import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';

interface Character {
  id: string;
  name: string;
  details: string;
  image: any;
}

type RootStackParamList = {
  CharacterDetails: { character: Character };
};

type CharacterDetailsRouteProp = RouteProp<RootStackParamList, 'CharacterDetails'>;

interface Props {
  route: CharacterDetailsRouteProp;
}

const CharacterDetails: React.FC<Props> = ({ route }) => {
  const { character } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{character.name}</Text>
      <Image source={character.image} style={styles.image} />
      <Text style={styles.details}>{character.details}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  details: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default CharacterDetails;
