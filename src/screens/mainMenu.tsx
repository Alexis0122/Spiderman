import React from 'react';
import { View, Button } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface MainMenuProps {
    navigation: NavigationProp<any>;
}

const MainMenu: React.FC<MainMenuProps> = ({ navigation }) => {
    return (
        <View>
            <Button title="Portada" onPress={() => navigation.navigate('Cover')} />
            <Button title="Personajes" onPress={() => navigation.navigate('CharacterList')} />
            <Button title="Momentos Favoritos" onPress={() => navigation.navigate('MomentList')} />
            <Button title="Acerca de" onPress={() => navigation.navigate('About')} />
            <Button title="En mi vida" onPress={() => navigation.navigate('InMyLife')} />
            <Button title="Contrátame" onPress={() => navigation.navigate('ContactMe')} />
        </View>
    );
};

export default MainMenu;
