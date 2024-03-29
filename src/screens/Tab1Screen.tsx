import React, {useEffect} from "react";
import {Text, View} from "react-native";

import {styles} from "../theme/theme";
import {TouchableIcon} from "../components/TouchableIcon";

export const Tab1Screen = () => {
  useEffect(() => {
    console.log("tab1");
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>

      <Text>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="attach-outline" />
        <TouchableIcon iconName="bonfire-outline" />
        <TouchableIcon iconName="calculator-outline" />
        <TouchableIcon iconName="chatbubble-ellipses-outline" />
        <TouchableIcon iconName="images-outline" />
        <TouchableIcon iconName="leaf-outline" />
      </Text>
    </View>
  );
};
