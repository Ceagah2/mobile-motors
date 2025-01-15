import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { UserProvider } from "./src/data/context/context";
import Home from "./src/presentation/screens/Home/Home";
import Login from "./src/presentation/screens/Login/Login";
import Models from "./src/presentation/screens/Models/Models";

export default function App() {
  const [initialRoute, setInitialRoute] = useState<string | null>(null);

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Poppins_400Regular,
    Poppins_300Light,
    Poppins_700Bold,
  });

  const Stack = createNativeStackNavigator();

  useEffect(() => {
    const checkStorage = async () => {
      try {
        const user = await AsyncStorage.getItem("@App:user");
        if (user) {
          setInitialRoute("Home");
        } else {
          setInitialRoute("Login");
        }
      } catch (error) {
        console.error("Erro ao acessar o AsyncStorage:", error);
        setInitialRoute("Login");
      }
    };

    checkStorage();
  }, []);

  if (!fontsLoaded || initialRoute === null) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={initialRoute}
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen component={Login} name="Login" />
            <Stack.Screen component={Home} name="Home" />
            <Stack.Screen component={Models} name="Models" />
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    </GestureHandlerRootView>
  );
}
