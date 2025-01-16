import styled from 'styled-components/native';
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
  font-family: ${fonts.button};
  font-size: ${sizes.subHeading};
  color: ${colors.textPrimary};
  text-align: left;

`