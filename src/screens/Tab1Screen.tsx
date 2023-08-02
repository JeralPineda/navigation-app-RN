import React, {useEffect} from "react";
import {Text, View} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import {colors, styles} from "../theme/theme";

export const Tab1Screen = () => {
  useEffect(() => {
    console.log("tab1");
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <Icon name="airplane-outline" size={30} color={colors.primary} />
      </Text>
    </View>
  );
};
