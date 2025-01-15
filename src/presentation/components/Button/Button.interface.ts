import { PressableProps } from "react-native";

export interface ButtonProps extends PressableProps {
  title: string;
  bgColor?: string;
  textColor?: string;
}