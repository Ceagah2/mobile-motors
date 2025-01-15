import styled from 'styled-components/native';
import { colors, fonts, sizes } from '../../../theme';
import { useResponsive } from './../../../hooks/useResponsive';

export const Header = styled.View`
  width: 100%;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`
export const ActionButtons = styled.TouchableOpacity`
  padding: 0;
  margin: 0;
`;
export const Logo = styled.Image`
  width: 150px;
  height: 150px;
  margin-right: -24px;
`;
export const TextContainer = styled.View``
export const Title = styled.Text`
  color: ${colors.textPrimary};
  font-size: ${useResponsive(sizes.body)};
  font-family: ${fonts.heading};
  padding-right: 16px;
`

export const Subtitle = styled.Text`
  color: ${colors.textSecondary};
  font-size: ${useResponsive(sizes.caption)};
  font-family: ${fonts.heading};
`;
