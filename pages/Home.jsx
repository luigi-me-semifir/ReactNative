import { Button, StyleSheet, Text, View } from "react-native";

const Home = ({ navigation }) => {
  /**
   * Fonction pour changer de page au onPress du Button
   */
  const changePage = () => {
    navigation.navigate("Contact");
  };
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Button title="Page Contact" onPress={changePage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
});
export default Home;
