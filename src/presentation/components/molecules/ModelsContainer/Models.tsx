import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { Card, Input } from "../../atoms";
import { Model, ModelsProps } from "./Models.interface";
import * as S from "./Models.styles";


export const ModelsContainer = ({ data }: ModelsProps) => {
  const [displayedData, setDisplayedData] = useState<Model[]>(
    data.slice(0, 10)
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigation: NavigationProp<any, any> = useNavigation()


  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (query.trim() === "") {
      setDisplayedData(data.slice(0, 10));
    } else {
      const filteredData = data.filter((item) =>
        item.nome.toLowerCase().includes(query.toLowerCase())
      );
      setDisplayedData(filteredData);
    }
  };

  const loadMoreData = () => {
    if (loading || searchQuery.trim() !== "") return;

    setLoading(true);
    setTimeout(() => {
      const newData = data.slice(
        displayedData.length,
        displayedData.length + 10
      );
      setDisplayedData((prevData) => [...prevData, ...newData]);
      setLoading(false);
    }, 1000);
  };

  return (
    <S.Container>
      <Input
        label="Search your model"
        hasIcon
        icon={"close-circle"}
        handleIconPress={() => {
          setSearchQuery("");
          setDisplayedData(data.slice(0, 10)); 
        }}
        value={searchQuery}
        onChangeText={handleSearch}
      />

      <FlatList
        data={displayedData}
        renderItem={({ item }) => (
          <Card codigo={item.codigo} nome={item.nome} hasNavigation navigation={() => navigation.navigate("Models", item.codigo)}/>
        )}
        keyExtractor={(item) => item.codigo.toString()}
        initialNumToRender={10}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.1}
        style={{ width: "90%" }}
        ListFooterComponent={
          loading ? (
            <View style={{ padding: 20 }}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          ) : null
        }
      />
    </S.Container>
  );
};
