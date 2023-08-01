import React from "react";
import {Text, View, Button} from "react-native";
import type {StackScreenProps} from "@react-navigation/stack";
import {styles} from "../theme/theme";
import {TouchableOpacity} from "react-native-gesture-handler";

interface Pagina1ScreenProps extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Pagina1ScreenProps) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen</Text>

      <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate("Pagina2Screen")}
      />

      <Text>Navegar con argumentos</Text>

      <View style={[styles.globalMargin, styles.flexRow]}>
        <TouchableOpacity
          style={[styles.bigButton, styles.primaryColor]}
          onPress={() =>
            navigation.navigate("PersonaScreen", {id: 1, name: "Pedro"})
          }>
          <Text style={styles.bigButtonText}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.bigButton, styles.secondaryColor]}
          onPress={() =>
            navigation.navigate("PersonaScreen", {id: 2, name: "Maria"})
          }>
          <Text style={styles.bigButtonText}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
