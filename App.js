import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
// Création d'un stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // appel de la balise englobant le routing
    <NavigationContainer>
      {/* appel de la balise Stack.navigator pour atteindre une page */}
      <Stack.Navigator>
        {/* appel d'une page */}
        <Stack.Screen
          options={{ animation: "slide_from_right" }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ animation: "slide_from_right" }}
          name="Contact"
          component={Contact}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

{
  /* {marioBros.map((personnage, index) => (
    <Contact key={index} {...personnage} />
  ))}
</>

return <Index /> */
}
