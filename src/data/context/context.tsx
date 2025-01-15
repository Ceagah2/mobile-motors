import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useContext, useEffect, useState } from "react";
import { UserContextData } from "./context.interface";

const UserContext = createContext<UserContextData>({} as UserContextData);
const USER_STORAGE_KEY = "@App:user";

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const loadUserName = async () => {
      const storedName = await AsyncStorage.getItem(USER_STORAGE_KEY);
      if (storedName) {
        setUserName(storedName);
      }
    };
    loadUserName();
  }, []);

  const saveUserName = async (name: string) => {
    try {
      await AsyncStorage.setItem(USER_STORAGE_KEY, name);
      setUserName(name);
    } catch (error) {
      console.error("Error on saving user name:", error);
    }
  };

  const clearUserName = async () => {
    try {
      await AsyncStorage.removeItem(USER_STORAGE_KEY);
      await AsyncStorage.removeItem("@App:token");
      setUserName(null);
    } catch (error) {
      console.error("Error on clearing user name:", error);
    }
  };

  return (
    <UserContext.Provider value={{ userName, saveUserName, clearUserName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
