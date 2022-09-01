import { View, Text, StyleSheet, Pressable } from "react-native";

const Liste = ({ produit, effacer, id }) => {
  return (
    <Pressable onPress={() => effacer(id)}>
      <View>
        <Text style={styles.list}>{produit}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  list: {
    backgroundColor: "green",
    color: "white",
    padding: 20,
    fontSize: 20,
    marginHorizontal: 10,
    marginVertical: 5,
  },
});

export default Liste;
