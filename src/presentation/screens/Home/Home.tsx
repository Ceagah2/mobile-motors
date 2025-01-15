import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useUser } from "../../../data/context/context";
import { carsAPI } from "../../../data/service/api";
import { Container, Header } from "../../components/atoms";
import { BottomModal } from "../../components/atoms/Modal/Modal";
import { ModelsContainer } from "../../components/molecules";
import { Model } from "../../components/molecules/ModelsContainer/Models.interface";


export default function Home() {
  const [carBrands, setCarBrands] = useState<Model[]>()
  const [isActionModalOpen, setIsActionModalOpen] = useState<boolean>(false);
  const navigation: NavigationProp<any, any> = useNavigation()
  const { clearUserName } = useUser()

  const handleLogout = () => {
    navigation.navigate("Login")
    clearUserName()
    setIsActionModalOpen(false)
  }
  const handleOpenActions = () => {
    setIsActionModalOpen(true)
  }

  useEffect(() => {

    const fetchData = async () => {
      const cachedData = await AsyncStorage.getItem("brands");
      if (cachedData) {
        setCarBrands(JSON.parse(cachedData));
      } else {
        const response = await carsAPI.get("/carros/marcas");
        const data = await response.data;
        setCarBrands(data);
        await AsyncStorage.setItem("brands", JSON.stringify(data));
      }
    };
    fetchData();
  }, []);


  return (
    <Container>
      <Header onPressLogo={handleOpenActions} />
      {carBrands && <ModelsContainer data={carBrands} />}
      <BottomModal
        visible={isActionModalOpen}
        onClose={() => setIsActionModalOpen(false)}
        actions={[{ label: "Logout", onPress: () => handleLogout() }]}
      />
    </Container>
  );
}