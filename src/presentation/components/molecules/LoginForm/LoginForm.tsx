import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { colors } from '../../../theme';
import { Button, Input } from '../../atoms';
import { FormProps } from './LoginForm.interface';
import * as S from './LoginForm.styles';

export const LoginForm = ({onSubmit}: FormProps) => { 
   const [isSecureEntry, setIsSecureEntry] = useState<boolean>(true)
  
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
      setIsSecureEntry(!isSecureEntry)
    }
  
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
          />
        )}
      />
      {errors.password && <S.ErrorText>{errors.password.message}</S.ErrorText>}
      <S.ButtonContainer>
        <Button
          title="Login"
          bgColor={colors.primary}
          onPress={handleSubmit(onSubmit)}
        />
      </S.ButtonContainer>
    </S.FormContainer>
  );
}