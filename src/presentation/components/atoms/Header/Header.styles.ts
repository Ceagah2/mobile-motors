import styled from 'styled-components/native';
import { colors, fonts, sizes } from '../../../theme';
import { useResponsive } from './../../../hooks/useResponsive';

export const Header = styled.View`
  width: 100%;
  height: 150px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`
export const ActionButtons = styled.View`
  flex-direction: row;
  width: 80%;
  gap: 8px;
  margin-top: 8px;
`;
export const Logo = styled.Image`
  width: 150px;
  height: 150px;
  margin-right: -24px;
`;
export const TextContainer = styled.View`
  width: 80%;
`
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

export const ButtonContainer = styled.View`
  width: 100px;
  height: 30px;
`
