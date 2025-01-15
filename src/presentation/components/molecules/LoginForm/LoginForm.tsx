import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ActivityIndicator } from "react-native";
import { useLogin } from "../../../hooks/useLogin";
import { colors } from "../../../theme";
import { Button, Input } from "../../atoms";
import * as S from "./LoginForm.styles";

export const LoginForm = () => {
  const [isSecureEntry, setIsSecureEntry] = useState<boolean>(true);
  const { isLoading, errorMessage, handleLogin } = useLogin();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      user: "",
      password: "",
    },
  });

  const handleShowPassword = () => {
    setIsSecureEntry(!isSecureEntry);
  };

  return (
    <S.FormContainer>
      <Controller
        name="user"
        control={control}
        rules={{
          required: "Username is required",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Username"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Enter your username"
            autoCapitalize="none" 
          />
        )}
      />
      {errors.user && <S.ErrorText>{errors.user.message}</S.ErrorText>}

      <Controller
        name="password"
        control={control}
        rules={{
          required: "Password is required",
          minLength: {
            value: 3,
            message: "Password must be at least 3 characters",
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Password"
            hasIcon
            icon={isSecureEntry ? "eye-off" : "eye"}
            isSecureEntry={isSecureEntry}
            handleIconPress={handleShowPassword}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            placeholder="Enter your password"
            autoCapitalize="none" 
          />
        )}
      />
      {errors.password && <S.ErrorText>{errors.password.message}</S.ErrorText>}

      {errorMessage && <S.ErrorText>{errorMessage}</S.ErrorText>}

      <S.ButtonContainer>
        {isLoading ? (
          <ActivityIndicator size="large" color={colors.primary} />
        ) : (
          <Button
            title="Login"
            bgColor={colors.primary}
            onPress={handleSubmit((data) =>
              handleLogin({ user: data.user, password: data.password })
            )}
          />
        )}
      </S.ButtonContainer>
    </S.FormContainer>
  );
};
