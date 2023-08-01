import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {StackNavigator} from "./StackNavigator";
import {SettingsScreen} from "../screens";
import {useWindowDimensions} from "react-native";

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? "permanent" : "front", // Menú modo horizontal
        // headerShown: false, // Oculta la hamburguesa
      }}>
      <Drawer.Screen name="SatckNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
