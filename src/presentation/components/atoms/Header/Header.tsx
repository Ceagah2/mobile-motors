import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import Logo from '../../../../../assets/img/logo.png';
import { HeaderProps } from './Header.interface';
import * as S from './Header.styles';

export const Header = ({onPressLogo}: HeaderProps) => {
  const [userName, setUserName] = useState<string>('')

  useEffect(() => {
  const fetchUserData = async() => {
    const user = await AsyncStorage.getItem("@App:user");
    if (user) {
      setUserName(user)
    }
  }
  fetchUserData()
  },[])
  return (
    <S.Header>
      <S.ActionButtons onPress={onPressLogo}>
        <S.Logo source={Logo} />
      </S.ActionButtons>
      <S.Title>Welcome {userName} !</S.Title>
    </S.Header>
  );
}