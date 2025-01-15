import { Alert } from "react-native";
import { Container, HeaderWithLogo } from "../../components/atoms";
import { LoginForm } from "../../components/molecules";

export default function Login() {
    const handleLogin = (data: { user: string; password: string }) => {
      Alert.alert("Login Data", JSON.stringify(data, null, 2));
    };
 
  return (
    <Container>
      <HeaderWithLogo />
      <LoginForm onSubmit={handleLogin} />
    </Container>
  );
}