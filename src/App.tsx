import "react-native-gesture-handler";

import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {PaperProvider} from "react-native-paper";

import {MenuLateral} from "./navigation";
import {AuthProvider} from "./context/AuthContext";

function App() {
  const myNavigationTheme = {
    colors: {
      secondaryContainer: "transparent",
    },
  };

  return (
    <PaperProvider theme={myNavigationTheme}>
      <NavigationContainer>
        <AppState>
          {/* <StackNavigator /> */}
          {/* <MenuLateralBasico /> */}
          <MenuLateral />
        </AppState>
      </NavigationContainer>
    </PaperProvider>
  );
}

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
