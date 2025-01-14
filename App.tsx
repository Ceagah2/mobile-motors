import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/presentation/screens/Home/Home";
import Login from "./src/presentation/screens/Login/Login";
import Models from "./src/presentation/screens/Models/Models";

export default function App() {
  const Stack = createNativeStackNavigator()
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


