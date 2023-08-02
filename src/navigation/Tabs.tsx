/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import {Platform, Text} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import {Tab1Screen} from "../screens";
import {StackNavigator} from "./StackNavigator";
import {colors} from "../theme/theme";
import {TopTabNavigator} from "./TopTabNavigator";

export const Tabs = () => {
  return Platform.OS === "ios" ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      activeColor="#fff"
      inactiveColor="#cab1f0"
      barStyle={{backgroundColor: colors.primary}}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color}) => {
          let iconName: string = "";
          switch (route.name) {
            case "Tab1Screen":
              iconName = "chatbubble-outline";
              break;

            case "Tab2Screen":
              iconName = "call-outline";
              break;

            case "StackNavigator":
              iconName = "images-outline";
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <BottomTabAndroid.Screen
        name="Tab1Screen"
        // options={{
        //   title: "Tab1",
        //   tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
        // }}
        options={{title: "Tab1"}}
        component={Tab1Screen}
      />
      <BottomTabAndroid.Screen
        name="Tab2Screen"
        options={{title: "Tab2"}}
        component={TopTabNavigator}
      />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        options={{title: "Tab3"}}
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
};

const ButtonTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <ButtonTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: "#fff",
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color}) => {
          let iconName: string = "";
          switch (route.name) {
            case "Tab1Screen":
              iconName = "chatbubble-outline";
              break;

            case "Tab2Screen":
              iconName = "call-outline";
              break;

            case "StackNavigator":
              iconName = "images-outline";
              break;
          }
          return (
            <Text>
              <Icon name={iconName} size={20} color={color} />
            </Text>
          );
        },
      })}>
      <ButtonTabIOS.Screen
        name="Tab1Screen"
        // options={{
        //   title: "Tab1",
        //   tabBarIcon: props => <Text style={{color: props.color}}>T1</Text>,
        // }}
        options={{title: "Tab1"}}
        component={Tab1Screen}
      />
      <ButtonTabIOS.Screen
        name="Tab2Screen"
        options={{title: "Tab2"}}
        component={TopTabNavigator}
      />
      <ButtonTabIOS.Screen
        name="StackNavigator"
        options={{title: "Tab3"}}
        component={StackNavigator}
      />
    </ButtonTabIOS.Navigator>
  );
};
