// npx expo start -- --port=8082

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Bouton from "./Components/Bouton";
import State from "./Components/State";
import List from "./Components/List";
import HomePage_screen from "./Screen/HomePage_screen";
import { NavigationContainer} from "@react-navigation/native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomePage></HomePage>
      <Bouton></Bouton>
      <State></State>

      <List></List> */}
      <NavigationContainer>
      {/* <HomePage_screen/> */}
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
  },
});
