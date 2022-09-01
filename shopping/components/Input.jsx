import { useEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Bouton from "./Bouton";

const Input = ({ ajout }) => {
  const [produit, setProduit] = useState("");
  const [btnOn, setBtnOn] = useState(true);

  /**
   * Fonction pour fair un formulaire controlé avec notre input
   * @param {*} value donné saisie dans l'input, pour remplis le state produit
   */
  const produitSaisie = (value) => {
    setProduit(value);
  };

  /**
   * Fonction pour pushé les valeurs d l'input dans le tableau
   */
  const clickAjout = () => {
    ajout(produit);
    setProduit("");
  };

  /**
   * useEffect pour activer le bouton seulement si plus de 3 caractère dans l'input
   */
  useEffect(() => {
    if (produit.length > 3) {
      setBtnOn(false);
    } else {
      setBtnOn(true);
    }
  }, [produit]);

  return (
    <View style={styles.container}>
      <View style={styles.inputcontainer}>
        <TextInput
          placeholder="Nouveau produit"
          style={styles.input}
          onChangeText={produitSaisie}
          value={produit}
        />
      </View>
      <Bouton title="Ajout" press={clickAjout} btnOn={btnOn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: "row",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  inputcontainer: {
    borderColor: "green",
    borderWidth: 2,
    padding: 12,
    flexGrow: 1,
    marginRight: 15,
  },
  input: { fontSize: 20 },
});

export default Input;
