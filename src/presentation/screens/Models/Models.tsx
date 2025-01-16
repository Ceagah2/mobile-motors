import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { carsAPI } from "../../../data/service/api";
import { Container, Header } from "../../components/atoms";
import { ListByParams } from "../../components/molecules";
import { ModelType, YearType } from "./Models.interface";



export default function Models({route}: any) {
  const [carBrandsByModel, setCarBrandsByModel] = useState<ModelType[]>([])
  const [carBrandsByYear, setCarBrandsByYear] = useState<YearType[]>([])
  const navigation: NavigationProp<any, any> = useNavigation()

  const brandId = route?.params

 

  useEffect(() => {
    const fetchData = async () => {
      const response = await carsAPI.get(`/carros/marcas/${brandId}/modelos`);
      const data = await response.data;
      setCarBrandsByModel(data.modelos)
      setCarBrandsByYear(data.anos)
    };
    fetchData();
  }, []);


  return (
    <Container>
      <Header
        SubTitle="This brand new cars just arrived"
        goHome
      />
     
      <ListByParams
        title="Select your cars by year."
        carBrandsByYear={carBrandsByYear}
      />

      <ListByParams
        title="Select your cars by Model."
        carBrandsByYear={carBrandsByModel}
      />
      
    </Container>
  );
}