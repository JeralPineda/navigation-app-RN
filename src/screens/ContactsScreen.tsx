import React, {useContext} from "react";
import {Button, Text, View} from "react-native";

import {styles} from "../theme/theme";
import {AuthContext} from "../context/AuthContext";

export const ContactsScreen = () => {
  const {
    signIn,
    authState: {isLoggedIn},
  } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Contacts</Text>

      {!isLoggedIn && <Button title="SignIn" onPress={signIn} />}
    </View>
  );
};
