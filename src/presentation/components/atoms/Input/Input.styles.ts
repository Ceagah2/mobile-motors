import styled from 'styled-components/native';
import { colors, fonts, sizes } from '../../../theme';

export const Container = styled.View`
  width: 90%;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 12px;
  border: 1px solid ${colors.divider};
  border-radius: 16px;
  padding: 12px;
`;
export const Label = styled.Text`
  font-family: ${fonts.caption};
  font-size: ${sizes.caption};
  color: ${colors.textPrimary};
`

export const DefaultInput = styled.TextInput`
  width: 90%;
  height: 30px;
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const ButtonIcon = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
`