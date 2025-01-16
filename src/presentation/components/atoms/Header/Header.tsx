import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Logo from '../../../../../assets/img/logo.png';
import { useUser } from '../../../../data/context/context';
import { colors } from '../../../theme';
import { Button } from '../Button/Button';
import { HeaderProps } from './Header.interface';
import * as S from './Header.styles';

export const Header = ({ SubTitle, goHome }: HeaderProps) => {
  const [userName, setUserName] = useState<string>('')
  const navigation: NavigationProp<any, any> = useNavigation()
  const { clearUserName } = useUser();

  const handleNavigate = () => {
    clearUserName()
    navigation.navigate("Login")
  }

  const handleLogout = () => {
    Alert.alert("Are you sure?", "You will leave the application and must login again", [
      {
        text: "I'll stay",
        style: 'cancel'
      },
      {
        text: "I'm sure",
        onPress: () => handleNavigate()
      }
    ])
  }

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
      <S.Logo source={Logo} />
      <S.TextContainer>
        <S.Title>Welcome {userName} !</S.Title>
        <S.Subtitle>{SubTitle}</S.Subtitle>
        <S.ActionButtons>
          {goHome && (
            <S.ButtonContainer>
              <Button title="Home" onPress={() => navigation.navigate('Home')}/>
            </S.ButtonContainer>
          )}
          <S.ButtonContainer>
            <Button title="Logout" bgColor={colors.error} onPress={() => handleLogout()}/>
          </S.ButtonContainer>
        </S.ActionButtons>
      </S.TextContainer>
    </S.Header>
  );
}