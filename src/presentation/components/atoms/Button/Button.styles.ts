import styled from 'styled-components/native';
import { colors, fonts, sizes } from '../../../theme';

type ButtonType = {
  bgColor: string
  textColor: string
}

export const Container = styled.TouchableOpacity<ButtonType>`
  width: 100%;
  height: 40px;
  background: ${(props: ButtonType) => props.bgColor ? props.bgColor : colors.primary};
  align-items: center;
  justify-content: center;
  border-radius: 16px;
`;

export const ButtonText = styled.Text<ButtonType>`
  color: ${(props: ButtonType) => props.textColor ? props.textColor : colors.background};
  font-size: ${sizes.button};
  font-family: ${fonts.button};
`

