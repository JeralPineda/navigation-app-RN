import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {StackNavigator} from "./StackNavigator";
import {SettingsScreen} from "../screens";

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="SatckNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettingScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
