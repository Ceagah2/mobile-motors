import styled from 'styled-components/native';
import { colors, fonts, sizes } from '../../../theme';
import { useResponsive } from './../../../hooks/useResponsive';

export const Header = styled.View`
  width: 90%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 16px;
`
export const Logo = styled.Image`
  width: 150px;
  height: 200px;
  margin-bottom: -50px;
`
export const Title = styled.Text`
  color: ${colors.textPrimary};
  font-size: ${useResponsive(sizes.heading)};
  font-family: ${fonts.heading};
`
export const SubTitle = styled.Text`
  color: ${colors.textSecondary};
  font-size: ${useResponsive(sizes.subHeading)};
  font-family: ${fonts.heading};
  text-align: center;
`