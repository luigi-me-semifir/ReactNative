import { useState } from "react";
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

const ButtonTest = () => {
  const [nom, setNom] = useState("Luigi");

  // Fonction, pour modifier le nom au click sur le boutton
  const click = () => {
    return setNom("Mario");
  };

  return (
    <View>
      {/* Boutton classique */}
      <Button title="Clique ici" onPress={click} />
      <Text>{nom}</Text>
      {/* Mets un effet d'opacité au click sur l'éléménts */}
      <TouchableOpacity onPress={click} activeOpacity="0.5">
        <View style={styles.button}>
          <Text>Hello</Text>
        </View>
      </TouchableOpacity>
      {/* Change la couleur quand on clique sur l'élémént */}
      <TouchableHighlight
        onPress={click}
        activeOpacity="0.5"
        underlayColor="#DDDDDD"
      >
        <View style={styles.button2}>
          <Text>Hello</Text>
        </View>
      </TouchableHighlight>
      {/* Permets d'ajouter ds option sur le clique du boutton */}
      <Pressable
        onPress={() => console.log("j'ai cliqué")}
        style={({ pressed }) => [
          { backgroundColor: pressed ? "green" : "blue" },
        ]}
      >
        <View>
          <Text>Hello</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "red",
  },
  button2: {
    backgroundColor: "green",
  },
});

export default ButtonTest;
