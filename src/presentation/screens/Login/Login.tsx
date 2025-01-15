import { useState } from "react";
import { Container, HeaderWithLogo, Input } from "../../components";
import { Button } from "../../components/Button/Button";
import { colors } from "../../theme";
import * as S from './Login.styles';
export default function Login() {
  const [isSecureEntry, setIsSecureEntry] = useState<boolean>(true)
  
  const handleShowPassword = () => {
    setIsSecureEntry(!isSecureEntry)
  }

  return (
    <Container>
      <HeaderWithLogo />
      <S.FormContainer>
        <Input label="E-mail" />
        <Input
          label="Password"
          hasIcon
          icon={isSecureEntry ? "eye-off" : "eye"}
          isSecureEntry={isSecureEntry}
          handleIconPress={handleShowPassword}
        />
        <S.ButtonContainer>
          <Button title="Login" bgColor={colors.primary}/>
        </S.ButtonContainer>
      </S.FormContainer>
    </Container>
  );
}