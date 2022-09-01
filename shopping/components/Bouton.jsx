import { Button, StyleSheet } from "react-native";

const Bouton = ({ title, press }) => {
  /**
   * Composant Button
   */
  return <Button style={styles.bouton} title={title} onPress={press} />;
};

const styles = StyleSheet.create({
  bouton: {
    fontSize: 20,
    padding: 15,
  },
});
export default Bouton;
