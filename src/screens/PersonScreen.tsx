import React, {useEffect} from "react";
import {Text, View} from "react-native";
import {styles} from "../theme/theme";
import {StackScreenProps} from "@react-navigation/stack";
import {RootStackParams} from "../navigation/StackNavigator";

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

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> {JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
