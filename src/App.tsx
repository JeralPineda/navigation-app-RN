import "react-native-gesture-handler";

import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {MenuLateral} from "./navigation";
import {PaperProvider} from "react-native-paper";

function App() {
  const myNavigationTheme = {
    colors: {
      secondaryContainer: "transparent",
    },
  };

  return (
    <PaperProvider theme={myNavigationTheme}>
      <NavigationContainer>
        {/* <StackNavigator /> */}
        {/* <MenuLateralBasico /> */}
        <MenuLateral />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
