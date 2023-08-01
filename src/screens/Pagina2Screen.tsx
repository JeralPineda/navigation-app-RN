import React, {useEffect} from "react";
import {Text, View, Button} from "react-native";
import {useNavigation} from "@react-navigation/native";

import {styles} from "../theme/theme";

export const Pagina2Screen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: "Hola mundo",
      headerBackTitle: "", //IOS
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina2Screen</Text>

      <Button
        title="Ir a pagina 3"
        onPress={() => navigator.navigate("Pagina3Screen" as never)}
      />
    </View>
  );
};
