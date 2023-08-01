import React from "react";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import {SettingsScreen} from "../screens";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import {styles} from "../theme/theme";
import {Tabs} from "./Tabs";

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      // eslint-disable-next-line react/no-unstable-nested-components
      drawerContent={props => <MenuInterno {...props} />}
      screenOptions={{
        drawerType: width >= 768 ? "permanent" : "front", // Menú modo horizontal
        // headerShown: false, // Oculta la hamburguesa
      }}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: "https://payload.cargocollective.com/1/5/178997/14228511/prt_500x500_1613656847_2x.jpg",
          }}
          style={styles.avatar}
        />
      </View>

      {/* Options Menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuLink}
          onPress={() => navigation.navigate("Tabs")}>
          <Text style={styles.menuLinkText}>Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuLink}
          onPress={() => navigation.navigate("SettingScreen")}>
          <Text style={styles.menuLinkText}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
