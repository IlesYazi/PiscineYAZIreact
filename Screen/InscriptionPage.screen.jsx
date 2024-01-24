import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const InscriptionPage = () => {
  const navigation = useNavigation();
  const handleSub = () => {
    navigation.navigate("Dashboard");
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/machine-a-cafe.png")}
      />
      <Text style={styles.title}>Inscription</Text>
      <TextInput
        style={styles.inputs}
        label="Prenom"
        placeholder="Your first name"
      />
      <TextInput
        style={styles.inputs}
        label="Nom"
        placeholder="Your last name"
      />
      <TextInput style={styles.inputs} label="Email" placeholder="Your email" />
      <TextInput
        style={styles.inputs}
        label="Mot de passe"
        placeholder="Your password"
      />
      <TextInput
        style={styles.inputs}
        label="Confirmer mot de passe"
        placeholder="Your confirm password"
      />
      <Button style={styles.btn} onPress={handleSub}>
        <Text style={styles.txtBtn}>Enregistrer</Text>
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
    color: "#aa0aaf",
    margin: 5,
  },
  logo: {
    width: 100,
    height: 100,
    backgroundColor: "#fff",
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
    backgroundColor: "#f0f0f0",
    color: "#fff",
  },
  txtBtn: {
    color: "#FFF",
  },
  btn: {
    marginTop: 5,
    backgroundColor: "#aa0aaf",
    width: 250,
    color: "red",
    alignSelf: "center",
    marginBottom: 10,
  },
});

export default InscriptionPage;
