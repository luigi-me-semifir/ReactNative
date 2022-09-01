import { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

const Input = () => {
  const [nom, setNom] = useState("");
  console.log(nom);

  const handleChange = (text) => {
    return setNom(text);
  };

  // useEffect est un hooks permettant de gerer le cycle de vie du composants
  useEffect(() => {
    console.log(nom);
  }, []);

  return (
    <View>
      <Text> Votre Nom : {nom}</Text>
      <TextInput
        style={styles.input}
        placeholder="Indiquer votre nom"
        onChangeText={handleChange}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "red",
    borderWidth: 2,
    padding: 10,
    margin: 9,
    width: "90%",
  },
});
