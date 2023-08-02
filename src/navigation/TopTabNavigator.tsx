/* eslint-disable react/react-in-jsx-scope */
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";

import {AlbumsScreen, ChatScreen, ContactsScreen} from "../screens";
import {colors} from "../theme/theme";

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const {top} = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={{paddingTop: top}}
      sceneContainerStyle={{
        backgroundColor: "white",
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: "black",
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          paddingVertical: 12,
          backgroundColor: "white",
          elevation: 0,
          shadowColor: "transparent",
        },
        tabBarIconStyle: {
          flexDirection: "row",
          justifyContent: "center",
        },
        tabBarIcon: ({color}) => {
          let iconName: string = "";
          switch (route.name) {
            case "Chat":
              iconName = "chatbubble-outline";
              break;

            case "Contacts":
              iconName = "call-outline";
              break;

            case "Albums":
              iconName = "images-outline";
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
