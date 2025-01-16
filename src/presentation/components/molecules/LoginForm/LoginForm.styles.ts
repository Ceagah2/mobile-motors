import styled from 'styled-components/native';
import { useResponsive } from '../../../hooks/useResponsive';
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
  font-size: ${useResponsive(sizes.input)};
  margin-bottom: 8px;
  text-align: left;
`;
