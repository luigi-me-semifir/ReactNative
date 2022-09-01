import { View, Text } from "react-native";

const Contact = ({ nom, prenom, adress }) => {
  // Passage des props
  return (
    <View>
      <Text> Nom: {nom} </Text>
      <Text> Prénom: {prenom} </Text>
      <Text> Adresse: {adress} </Text>
    </View>
  );
};

export default Contact;
