import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { useUser } from "../../../data/context/context";
import { carsAPI } from "../../../data/service/api";
import { Container, Header } from "../../components/atoms";
import { BottomModal } from "../../components/atoms/Modal/Modal";
import { BrandContainer } from "../../components/molecules";
import { Model } from "../../components/molecules/ModelsContainer/Models.interface";


export default function Models({route}: any) {
  const [carBrands, setCarBrands] = useState<Model[]>()
  const navigation: NavigationProp<any, any> = useNavigation()
  const { clearUserName } = useUser()
  const [isActionModalOpen, setIsActionModalOpen] = useState<boolean>(false);

  const brandId = route?.params
  const handleOpenActions = () => {
    setIsActionModalOpen(true);
  };

   const handleLogout = () => {
     navigation.navigate("Login");
     clearUserName();
     setIsActionModalOpen(false);
   };

  useEffect(() => {
    const fetchData = async () => {
      const response = await carsAPI.get(`/carros/marcas/${brandId}/modelos`);
      const data = await response.data;
      setCarBrands(data);
      console.log(data)
    };
    fetchData();
  }, []);


  return (
    <Container>
      <Header onPressLogo={handleOpenActions} SubTitle="This brand new cars just arrived"/>
      <BrandContainer data={carBrands}/>
      <BottomModal
        visible={isActionModalOpen}
        onClose={() => setIsActionModalOpen(false)}
        actions={[
          { label: "Logout", onPress: () => handleLogout() },
          { label: "Go back", onPress: () => navigation.goBack() }
        ]}
      />
    </Container>
  );
}