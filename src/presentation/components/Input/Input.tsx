import Ionicons from "@expo/vector-icons/Ionicons";
import { Text } from "react-native";
import { InputProps } from "./Input.interface";
import * as S from './Input.styles';

export const Input = ({
  label,
  hasIcon,
  icon,
  handleIconPress,
  isSecureEntry,
  ...rest
}: InputProps) => {
  return (
    <S.Container>
      <Text>{label}</Text>
      <S.InputWrapper>
        <S.DefaultInput secureTextEntry={isSecureEntry} {...rest} />
        {hasIcon && (
          <S.ButtonIcon onPress={handleIconPress}>
            <Ionicons name={icon} size={24} color="#cecece" />
          </S.ButtonIcon>
        )}
      </S.InputWrapper>
    </S.Container>
  );
};