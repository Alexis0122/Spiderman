import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainMenu from "./screens/mainMenu";
import Cover from "./components/Cover";
import CharacterList from "./components/CharacterList";
import CharacterDetails from "./components/characterDetails";
import MomentList from "./components/MomentList";
import MomentDetails from "./components/MomentDetails";
import About from "./components/About";
import InMyLife from "./components/InMyLife";
import ContactMe from "./components/ContactMe";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Main"
          component={MainMenu}
          options={{ title: "Menú Principal" }}
        />
        <Stack.Screen
          name="Cover"
          component={Cover}
          options={{ title: "Portada" }}
        />
        <Stack.Screen
          name="CharacterList"
          component={CharacterList}
          options={{ title: "Personajes" }}
        />
        <Stack.Screen
          name="CharacterDetails"
          component={CharacterDetails}
          options={{ title: "Detalles del Personaje" }}
        />
        <Stack.Screen
          name="MomentList"
          component={MomentList}
          options={{ title: "Momentos Favoritos" }}
        />
        <Stack.Screen
          name="MomentDetails"
          getComponent={MomentDetails}
          options={{ title: "Detalles del Momento" }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{ title: "Acerca de" }}
        />
        <Stack.Screen
          name="InMyLife"
          component={InMyLife}
          options={{ title: "En mi vida" }}
        />
        <Stack.Screen
          name="ContactMe"
          component={ContactMe}
          options={{ title: "Contrátame" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
