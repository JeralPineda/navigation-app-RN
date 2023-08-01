import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {
  Pagina1Screen,
  Pagina2Screen,
  Pagina3Screen,
  PersonScreen,
} from "../screens";

//*Recomendado usar para los params con interfaces
export type RootStackParams = {
  Pagina1Screen: undefined;
  Pagina2Screen: undefined; //* para indicar que no recibe nada
  Pagina3Screen: undefined;
  PersonaScreen: {
    id: number;
    name: string;
  };
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: "transparent", //IOS
        },
        cardStyle: {
          backgroundColor: "white",
        },
      }}>
      <Stack.Screen
        name="Pagina1Screen"
        options={{title: "Pagina 1"}}
        component={Pagina1Screen}
      />
      <Stack.Screen
        name="Pagina2Screen"
        options={{title: "Pagina 2"}}
        component={Pagina2Screen}
      />
      <Stack.Screen
        name="Pagina3Screen"
        options={{title: "Pagina 3"}}
        component={Pagina3Screen}
      />
      <Stack.Screen name="PersonaScreen" component={PersonScreen} />
    </Stack.Navigator>
  );
};
