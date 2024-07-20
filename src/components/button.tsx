import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type Variants = "primary" | "secondary";

type ButtonProps = TouchableOpacityProps & {
  variant?: Variants;
  isLoading?: boolean;
};

function Button({
  variant = "primary",
  children,
  isLoading,
  ...rest
}: ButtonProps) {
  return <TouchableOpacity {...rest}>{children}</TouchableOpacity>;
}

function Title({ children }: TextProps) {
  return <Text>{children}</Text>;
}

Button.Title = Title;

export { Button };
