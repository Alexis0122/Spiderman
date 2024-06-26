// MomentList.tsx
import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, Image } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface Moment {
  id: string;
  title: string;
  image: any;
  details: string;
  video: any;
}

const moments = [
  { id: '1', title: 'Mordida de la araña', image: '../../assets/Mordidita.png', description: 'Peter Parker es mordido por una araña genéticamente alterada.', video: 'https://www.youtube.com/embed/iXHxol6txqM' },
  { id: '2', title: 'Primer vuelo', image: '../../assets/PrimerV.jpg', description: 'Peter Parker prueba sus poderes y vuela por primera vez.', video: 'https://www.youtube.com/embed/jZB7-WPWehc' },
  { id: '3', title: 'Batalla final', image: '../../assets/Batalla.jpg', description: 'Spider-Man enfrenta al Duende Verde en la batalla final.', video: 'https://www.youtube.com/embed/-Ms_40Oc4_I' },
];

interface MomentListProps {
  navigation: NavigationProp<any>;
}

const MomentList: React.FC<MomentListProps> = ({ navigation }) => {
  return (
    <FlatList
      data={moments}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item.title}</Text>
          <Button title="Ver detalles" onPress={() => navigation.navigate('MomentDetails', { moment: item })} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
  },
});

export default MomentList;
