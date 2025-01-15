import Ionicons from "@expo/vector-icons/Ionicons";
import { TextInputProps } from "react-native";

export interface InputProps extends TextInputProps {
  label: string;
  hasIcon?: boolean;
  icon?: keyof typeof Ionicons.glyphMap;
  isSecureEntry?: boolean;
  handleIconPress?: () => void
}