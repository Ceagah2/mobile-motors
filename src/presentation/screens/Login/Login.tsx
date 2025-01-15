import React from "react";
import { Container, HeaderWithLogo } from "../../components/atoms";
import { LoginForm } from "../../components/molecules";

export default function Login() {
 
  return (
    <Container>
      <HeaderWithLogo />
      <LoginForm />
    </Container>
  );
}