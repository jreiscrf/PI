import styled from "styled-components";
import ImageContato from "../../assets/images/thor.jpg";
import IconeHistoria from "../../assets/images/icone.jpg";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column
`;

const BackgroundHistoria = styled.div`
  background-color: #CCD3DB;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 16rem;
  width: 90%;
  display: flex;
  align-self: center;
  justify-content: space-around;
`;

const ImageHistoria = styled.img.attrs({
  src: IconeHistoria,
})`
  width: 18rem;
  height: 15rem;
`;

const Icone = styled.div` 
  width: 50%;
  height: 16rem;
`;

const Sobre = styled.div`
  height: 13rem;
  width: 30rem;
  align-self: center;
`;

const Title = styled.h1`
  color: red;
  font-size: 2em;
  font-weight: bold;
  text-align: justify;
`;

const Texto = styled.h1`
  color: #000;
  font-size: 0.9em;
  text-align: left;
`;

const BackgroundImageContato = styled.div`
  background-image: url(${ImageContato});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 32rem;
  width: 90%;
  display: flex;
  justify-content: flex-end;
  align-self: center;
`;

const ContatoQuadro = styled.div`
  background-color: #1A1A1A;
  height: 30rem;
  width: 40%;
  display: flex;
  align-self: center;
  flex-direction: column;
  margin-right: 2rem;
`;

const TitleContato = styled.h1`
  color: #fff;
  font-size: 1.5em;
  font-weight: bold;
  text-align: center;
`;

const Nav = styled.div`
  width: 100%;
  heigth: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ItemContato = styled.div` 
  width: 45%;
  height: 50%;
  margin: 0.3rem;
  display: flex;
  flex-direction: column;
  align-itens: center;
  justify-content: center;
`;

const TextoSpan = styled.p`
  color: #808080;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0px;
`;

const TextoP = styled.p`
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
`;

const TextoSpanIcon = styled.p`
  color: #808080;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  margin-top: 5rem;
`;

const IconsContato = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 1px;
`;



export {Container,BackgroundImageContato,ImageHistoria,BackgroundHistoria,Sobre,Title,Texto,Icone,ItemContato, ContatoQuadro, TitleContato, TextoSpan, Nav, TextoP, IconsContato, TextoSpanIcon};
