import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { login as loginService } from "../../data/service/login";

interface LoginData {
  user: string;
  password: string;
}

interface UseLoginReturn {
  isLoading: boolean;
  errorMessage: string | null;
  handleLogin: (data: LoginData) => Promise<void>;
}

export const useLogin = (): UseLoginReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigation: NavigationProp<any, any> = useNavigation()

  const handleLogin = async (data: LoginData) => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await loginService(data.user, data.password);
      if (response.error) {
        setErrorMessage(response.message || "Invalid credentials");
      } else if (response.user) {
        const { name, token } = response.user;

        await AsyncStorage.multiSet([
          ["@App:token", token],
          ["@App:user", name],
        ]);

        navigation.navigate("Home")
      }
    } catch (error) {
      setErrorMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    errorMessage,
    handleLogin,
  };
};
