import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ConnexionPage from "./ConnexionPage.screen";
import InscriptionPage from "./InscriptionPage.screen";

const HomePage = () => {
  const Stack = createNativeStackNavigator();

  return (
    <View style={styles.container}>
      <Stack.Navigator initialRouteName="ConnexionPage">
        <Stack.Screen name="ConnexionPage" component={ConnexionPage} />

        <Stack.Screen name="InscriptionPage" component={InscriptionPage} />

        {/* <Stack.Screen name="Dashboard_Screen" component={Dashboard_Screen} /> */}
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#333",
  },
  maintxt: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
});

export default HomePage;
