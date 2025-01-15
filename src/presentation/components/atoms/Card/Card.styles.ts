import styled from "styled-components/native";
import { colors, fonts, sizes } from "../../../theme";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 150px;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.divider};
  border-radius: 16px;
  padding: 8px;
  margin-bottom: 8px;
`

export const Image = styled.Image`
  width: 100px;
  height: 75px;
`
export const Code = styled.Text`
  font-family: ${fonts.caption};
  font-size: ${sizes.button};
  color: ${colors.textPrimary};
`
export const Name = styled.Text`
  font-family: ${fonts.heading};
  font-size: ${sizes.subHeading};
  color: ${colors.textSecondary};
`;