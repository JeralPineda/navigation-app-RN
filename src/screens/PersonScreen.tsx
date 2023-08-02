/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useContext} from "react";
import {Text, View} from "react-native";
import {StackScreenProps} from "@react-navigation/stack";

import {styles} from "../theme/theme";
import {RootStackParams} from "../navigation/StackNavigator";
import {AuthContext} from "../context/AuthContext";

//! No recomendado usar interface asi
// interface RouteParams {
//   id: number;
//   name: string;
// }

//*Recomendado usar para los params con interfaces
interface Props extends StackScreenProps<RootStackParams, "PersonaScreen"> {}

export const PersonScreen = ({route, navigation}: Props) => {
  // console.log(JSON.stringify(props, null, 3));

  //! No recomendado usar interface asi
  // const params = route.params as RouteParams;

  const params = route.params;
  const {changeUsername} = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  useEffect(() => {
    changeUsername(params.name);
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> {JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
