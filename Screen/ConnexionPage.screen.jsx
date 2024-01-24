import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const ConnexionPage = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate("Dashboard_Screen");
  };

  const handleSub = () => {
    navigation.navigate("Subscribe_Screen");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/machine-a-cafe.png")}
      />
      <Text style={styles.title}>So, wanna connect ?</Text>
      <TextInput style={styles.inputs} label="Email" placeholder="Your email" />
      <TextInput
        style={styles.inputs}
        label="Password"
        placeholder="Your password"
      />
      <Button style={styles.btn} onPress={handleLogin}>
        <Text style={styles.txtBtn}>Submit</Text>
      </Button>
      <Button style={styles.btn} onPress={handleSub}>
        <Text style={styles.txtBtn}>
          Wait, you don't have an account ? Here come here
        </Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f8f8",
    margin: 5,
    borderRadius: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    margin: 5,
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: "#333",
    borderRadius: 100,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  inputs: {
    height: 40,
    width: 250,
    margin: 5,
    alignSelf: "center",
    backgroundColor: "#3498db",
    color: "#fff",
  },
  txtBtn: {
    color: "#3498db",
  },
  btn: {
    marginTop: 5,
    backgroundColor: "#333",
    width: 250,
    color: "red",
    alignSelf: "center",
    marginBottom: 10,
  },
});

export default ConnexionPage;
