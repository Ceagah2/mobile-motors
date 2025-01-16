import styled from 'styled-components/native';
import { useResponsive } from '../../../hooks/useResponsive';
import { colors, fonts, sizes } from '../../../theme';

export const ListContainer = styled.View`
  width: 100%;
  height: 320px;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export const ListTitle = styled.Text`
  width: 85%;
  font-family: ${fonts.caption};
  font-size: ${useResponsive(sizes.caption)};
  color: ${colors.textPrimary};
  text-align: left;
`;