import "react-native-gesture-handler";

import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {MenuLateral} from "./navigation";
import {PaperProvider} from "react-native-paper";
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
        {/* <StackNavigator /> */}
        {/* <MenuLateralBasico /> */}
        <AppState>
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
