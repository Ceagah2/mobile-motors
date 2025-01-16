import { useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { YearType } from '../../../screens/Models/Models.interface';
import { Card } from '../../atoms';
import { ListProps } from './List.interface';
import * as S from './List.styles';

export const ListByParams = ({ title, carBrandsByYear }: ListProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [displayedData, setDisplayedData] = useState<YearType[]>([]);

  const loadMoreData = () => {
    if (loading || searchQuery.trim() !== "") return;

    setLoading(true);
    setTimeout(() => {
      const newData = carBrandsByYear.slice(
        displayedData.length,
        displayedData.length + 10
      );
      setDisplayedData((prevData) => [...prevData, ...newData]);
      setLoading(false);
    }, 1000);
  };
  return (
    <S.ListContainer>
      <S.ListTitle>{title}</S.ListTitle>
      <FlatList
        data={carBrandsByYear}
        keyExtractor={(item) => item.codigo}
        renderItem={({ item }) => ( <Card codigo={item.codigo} nome={item.nome} height='120px'/> )}
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
    </S.ListContainer>
  );
};