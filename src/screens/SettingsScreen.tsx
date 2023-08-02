import React, {useContext} from "react";
import {View, Text} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {styles} from "../theme/theme";
import {AuthContext} from "../context/AuthContext";

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  const {authState} = useContext(AuthContext);

  return (
    <View style={{...styles.globalMargin, marginTop: insets.top + 20}}>
      <Text style={styles.title}>SettingsScreen</Text>
      <Text>{JSON.stringify(authState, null, 3)}</Text>
    </View>
  );
};
