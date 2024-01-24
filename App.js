// npx expo start -- --port=8082

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Bouton from "./Components/Bouton";
import State from "./Components/State";
import List from "./Components/List"

import { NavigationContainer } from '@react-navigation/native';
import ConnexionPage from "./Screen/ConnexionPage.screen";
import InscriptionPage from "./Screen/InscriptionPage.screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <View style={styles.container}>
      {/* <HomePage></HomePage>
      <Bouton></Bouton>
      <State></State>

      <List></List> */}

      <NavigationContainer>
        <Stack.Navigator initialRouteName="ConnexionPage">
          <Stack.Screen name="ConnexionPage" component={ConnexionPage} /> 
        </Stack.Navigator>
      </NavigationContainer>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width:"100%",
    height:"100%"
  },
});
