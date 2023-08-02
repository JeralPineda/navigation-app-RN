import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {AlbumsScreen, ChatScreen, ContactsScreen} from "../screens";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {colors} from "../theme/theme";
import {Text} from "react-native";

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
              iconName = "C";
              break;

            case "Contacts":
              iconName = "C";
              break;

            case "Albums":
              iconName = "A";
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
      })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
