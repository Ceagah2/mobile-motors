import { Poppins_300Light, Poppins_400Regular, Poppins_700Bold } from "@expo-google-fonts/poppins";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import Home from "./src/presentation/screens/Home/Home";
import Login from "./src/presentation/screens/Login/Login";
import Models from "./src/presentation/screens/Models/Models";

export default function App() {
  const fontsLoaded = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Poppins_400Regular,
    Poppins_300Light,
    Poppins_700Bold
  })
  const Stack = createNativeStackNavigator()

  if(!fontsLoaded){
    <ActivityIndicator />
  }
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
          <Stack.Screen component={Login} name="Login" />
          <Stack.Screen component={Home} name="Home" />
          <Stack.Screen component={Models} name="Models" />
        </Stack.Navigator>
      </NavigationContainer>
  );
}


