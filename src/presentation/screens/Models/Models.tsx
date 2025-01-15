import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { carsAPI } from "../../../data/service/api";
import { Container, Header } from "../../components/atoms";
import { BrandsContainer } from "../../components/molecules";
import { Model } from "../../components/molecules/ModelsContainer/Models.interface";


export default function Models() {
  const [carBrands, setCarBrands] = useState<Model[]>()
  const handleOpenActions = () => {
    console.log('open actions')
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
      {carBrands && <BrandsContainer data={carBrands} />}
    </Container>
  );
}