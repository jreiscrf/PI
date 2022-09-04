import styled from "styled-components";

const Container = styled.input``;

const Body = styled.body`
    background-color: #DDDDDD;
    font-family: "Montserrat", sans-serif;
`;

const Main = styled.main`
    background-color: #DDDDDD;
`;
  
const TituloBanner = styled.h2`
    font-family: "Italianno", cursive;
    position: absolute;
    display: inline-block;
    margin-left: 40px;
    margin-top: 80px;
    font-weight: bold;
    color: #a04d20;
    text-align: center;
    font-size: 4.125rem;
`;  

const DepoimentosBanner = styled.img`
    margin-top: 30px;
    display: inline-block;
    width: 100%;
    height: 630px;
    border-radius: 17px;
`;

const DepoimentoApresentacao = styled.section`
    background: linear-gradient(#DDDDDD, #888888);
    margin-top: 40px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 35px;
    padding-right: 25px;
`;

const TituloDescricao = styled.h2`
    margin-top: -10px;
    width: 500px;
    font-family: "New Rocker", cursive;
    margin-bottom: 30px;
    margin-left: 350px;
    margin-right: 500px;
    padding: 20px;
    text-align: center;
    border: 2px solid rgba(124, 10, 39, 0.925);
    border-radius: 10px;
    box-shadow: 10px 10px 10px #373737;
`;
  
const TextoApDepoimento = styled.p`
    text-align: center;
    margin-left: 33px;
    margin-right: 33px;
    font-size: 1.65rem;
    font-family: 'Cormorant Garamond', serif;
`;
  
const PrincipalDepoimento = styled.section`
    background: linear-gradient(#DDDDDD, #888888);
`;
  
const DepoimentoUl = styled.ul`
    display: inline-block;
`;
  
  
const DepoimentoLi = styled.li`
    display: inline-block;
    vertical-align: top;
    width: 20%;
    margin: 25px;
    margin-top: 100px;
    margin-left: 7%;
    margin-right: 4%;
    border: solid 2px rgba(124, 10, 39, 0.925);
    border-radius: 15px;
    background-color: #CCCCCC;
    box-shadow: 10px 10px 10px #000000;
    font-size: 1.25rem;
 }
 &:hover {
    transform: scale(1.1);
    border-color: #C78C19;
    font-size: 2rem;
}
 &:active {
    border-color: #088C19;
 }  
`;
  
const H3 = styled.h3`
    font-family: "New Rocker", cursive;
    margin-top: 35px;
    text-align: center;
    font-size: 1.375rem;
`;
  
const TextoDepoimento = styled.p`
    font-family: "Italianno", cursive;
    text-align: center;
    margin-top: 50px;
    font-size: 1.75rem;
`;

const Texto = styled.p`
    margin-bottom: 0px 20px 10px 10px
`;
  
const FotosDepoimento = styled.img`
    margin-top: 30px;
    width: 286px;
    height: 400px;
    margin-left: 4px;
    margin-right: 4px;
    border-radius: 35px;
    filter: grayscale(100%);
    transition: 3s all;
 }
 &:hover {
    transform: scale(1.1);
    filter: grayscale(0%);
 }`
  

export {
    Container,
    Body,
    Main,
    TituloBanner,
    DepoimentosBanner,
    DepoimentoApresentacao,
    TituloDescricao,
    TextoDepoimento,
    PrincipalDepoimento,
    DepoimentoUl,
    DepoimentoLi,
    H3,
    TextoApDepoimento,
    Texto,
    FotosDepoimento
};
