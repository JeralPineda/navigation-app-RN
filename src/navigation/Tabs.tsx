import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Tab1Screen, Tab2Screen} from "../screens";
import {StackNavigator} from "./StackNavigator";
import {colors} from "../theme/theme";
const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: "#fff",
      }}
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Tab1Screen"
        options={{title: "Tab1"}}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2Screen"
        options={{title: "Tab2"}}
        component={Tab2Screen}
      />
      <Tab.Screen
        name="Tab3Screen"
        options={{title: "Tab3"}}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
