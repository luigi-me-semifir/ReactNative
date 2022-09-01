import { useState } from "react";
import {
  Alert,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import Input from "./components/Input";
import Liste from "./components/Liste";

const Index = () => {
  const [produits, setProduits] = useState([]);
  const [modal, setModal] = useState(false);

  const ajout = (produit) => {
    if (produit.length > 3) {
      const id = Date.now().toString();
      setProduits((newProduit) => [{ key: id, nom: produit }, ...newProduit]);
    } else {
      setModal(true);
    }
  };
  /**
   * Fonction pour effacer les éléments de la liste
   * @param {*} key paramètre pris en charge pour éffacer
   */
  const effacer = (key) => {
    setProduits((listeActuel) => {
      return listeActuel.filter((produit) => produit.key !== key);
    });
  };

  console.log(produits);
  return (
    <>
      {/* Création d'une modal pour gerer les erreurs */}
      <Modal
        visible={modal}
        transparent
        hardwareAccelerated
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContain}>
            <View style={styles.modalHeader}>
              <Text style={styles.textHeader}>Error</Text>
            </View>
            <View style={styles.body}>
              <Text style={styles.modalText}>
                Il doit avoir plus de 3 caractères pour valider votre produit
              </Text>
            </View>
            <View style={styles.footer}>
              <Pressable
                style={styles.btnModal}
                onPress={() => setModal(false)}
              >
                <Text style={styles.footerBtn}>OK</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Input ajout={ajout} />
      <FlatList
        data={produits}
        renderItem={({ item }) => (
          <Liste produit={item.nom} id={item.key} effacer={effacer} />
        )}
      />
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000c2",
  },
  modalContain: {
    backgroundColor: "pink",
    height: 250,
    width: "90%",
    alignItems: "center",
    borderRadius: 15,
  },
  body: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  modalText: {
    fontSize: 20,
    textAlign: "center",
  },
  modalHeader: {
    width: "50%",
    padding: 20,
    borderBottomColor: "black",
    borderBottomWidth: 2,
    alignItems: "center",
  },
  btnModal: {
    width: "50%",
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 15,
  },
  footer: {
    backgroundColor: "yellow",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  footerBtn: {
    fontSize: 15,
    color: "yellow",
    textAlign: "center",
    padding: 10,
  },
});

export default Index;
