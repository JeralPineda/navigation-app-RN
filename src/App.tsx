import "react-native-gesture-handler";

import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {MenuLateral} from "./navigation";

function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <MenuLateralBasico /> */}
      <MenuLateral />
    </NavigationContainer>
  );
}

export default App;
