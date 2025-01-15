import styled from "styled-components/native";
import { colors } from "../../../theme";

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
`;

export const ModalContainer = styled.View`
  background-color: ${colors.background};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
`;

export const ActionButton = styled.TouchableOpacity`
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #dddddd;
`;

export const ActionText = styled.Text`
  font-size: 16px;
  color: ${colors.primary};
  text-align: center;
`;

export const CancelButton = styled.TouchableOpacity`
  margin-top: 10px;
  padding: 15px;
  background-color: #f0f0f0;
  border-radius: 10px;
`;

export const CancelText = styled.Text`
  font-size: 16px;
  color: ${colors.textPrimary};
  text-align: center;
`;
