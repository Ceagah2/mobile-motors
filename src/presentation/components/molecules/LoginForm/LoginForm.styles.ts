import styled from 'styled-components/native';
import { colors, sizes } from '../../../theme';

export const FormContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  width: 90%;
`;

export const ErrorText = styled.Text`
  width: 85%;
  color: ${colors.error};
  font-size: ${sizes.caption};
  margin-bottom: 8px;
  text-align: left;
`;
