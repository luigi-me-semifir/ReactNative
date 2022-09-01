import { Image, StyleSheet, Text, View } from "react-native";

const StyleCat = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Image
          source={require("./assets/images/assurance-habitation.png")}
          style={styles.icon}
        />
        <Image
          source={require("./assets/images/reglage.png")}
          style={styles.icon}
        />
        <Image
          source={require("./assets/images/chat-noir.png")}
          style={styles.icon}
        />
      </View>
      <View style={styles.root}>
        <View style={styles.sidebar}>
          <Image
            source={require("./assets/images/dialogue.png")}
            style={styles.icon}
          />
          <Image
            source={require("./assets/images/d20.png")}
            style={styles.icon}
          />
          <Image
            source={require("./assets/images/nuage.png")}
            style={styles.icon}
          />
        </View>
        <View style={styles.body}>
          <Text style={styles.text}> Mise en page avec FlexBox</Text>
          <Image source={require("./assets/img/cat.jpeg")} style={styles.img} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
  },
  navbar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "red",
  },
  icon: {
    width: 50,
    height: 50,
  },
  sidebar: {
    flex: 3,
    justifyContent: "space-around",
    backgroundColor: "green",
    alignItems: "center",
  },
  root: {
    flex: 17,
    flexDirection: "row",
  },
  img: {
    width: 150,
    height: 100,
    resizeMode: "contain",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
  body: {
    padding: 30,
    alignItems: "center",
  },
});

export default StyleCat;
