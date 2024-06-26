// src/screens/MainMenu.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface MainMenuProps {
    navigation: NavigationProp<any>;
}

const MainMenu: React.FC<MainMenuProps> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Button title="Portada" onPress={() => navigation.navigate('Cover')} />
            <Button title="Personajes" onPress={() => navigation.navigate('CharacterList')} />
            <Button title="Momentos" onPress={() => navigation.navigate('MomentsList')} />
            <Button title="Acerca de" onPress={() => navigation.navigate('About')} />
            <Button title="En mi Vida" onPress={() => navigation.navigate('InMyLife')} />
            <Button title="Contrátame" onPress={() => navigation.navigate('HireMe')} />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainMenu;
