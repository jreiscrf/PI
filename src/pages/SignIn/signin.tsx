import React from "react";
import Input from "../../components/Input/Input";
import {
  BackgroundImage,
  Login,
  Register,
  Title,
  InputArea,
  ButtonSignIn,
  ButtonArea,
  RecoveryPassaword,
  Container,
} from "./styles";

const SignIn = () => {
  return (
    <Container>
      <BackgroundImage>
        <Login>
          <Title>Login</Title>
          <InputArea>
            <Input placeholder="E-mail" label="E-mail" />
            <Input placeholder="Senha" label="Senha" />
            <ButtonArea>
              <ButtonSignIn onClick={() => console.log("click")}>
                LOGIN
              </ButtonSignIn>
              <RecoveryPassaword>Esqueci minha senha</RecoveryPassaword>
            </ButtonArea>
          </InputArea>
        </Login>
        <Register>
          <InputArea>
            <Title>Cadastre-se</Title>
            <Input placeholder="Insira seu nome" label="Nome" />
            <Input placeholder="Insira seu e-mail" label="E-mail" />
            <Input placeholder="Senha" label="Senha" />
            <ButtonSignIn onClick={() => console.log("click")}>
              ENVIAR
            </ButtonSignIn>
          </InputArea>
        </Register>
      </BackgroundImage>
    </Container>
  );
};

export default SignIn;
