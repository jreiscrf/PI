import styled from "styled-components";
import Image from "../../assets/images/dog.jpg";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const BackgroundImage = styled.div`
  background-image: url(${Image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-self: center;
`;

const Login = styled.div`
  background-color: #292d33;
  height: 100vh;
  width: 30%;
`;

const Register = styled.div`
  background-color: #292d33;
  height: 100vh;
  width: 30%;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 2em;
  font-weight: bold;
  text-align: center;
`;

const InputArea = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ButtonArea = styled.div`
  display: flex;
  width: 82%;
  justify-content: flex-start;
`;

const ButtonSignIn = styled.button`
  background-color: #db545a;
  color: #fff;
  border: none;
  padding: 14px;
  font-size: 0.6em;
  border-radius: 2px;
`;

const RecoveryPassaword = styled.p`
  color: #fff;
  font-size: 0.8em;
  text-align: center;
  margin-left: 20px;
`;

export {
  BackgroundImage,
  Login,
  Register,
  Title,
  InputArea,
  ButtonSignIn,
  ButtonArea,
  RecoveryPassaword,
  Container,
};
