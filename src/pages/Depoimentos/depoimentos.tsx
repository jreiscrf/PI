import React from "react";
import AdocaoImg from "../../assets/images/Adocao.jpg";
import FredImg from "../../assets/images/fred.jpg";
import MelImg from "../../assets/images/mel.jpeg";
import TobiasImg from "../../assets/images/tobias.jpg";
import JulieImg from "../../assets/images/julie.jpg";
import TomImg from "../../assets/images/tom.jpg";
import TomasImg from "../../assets/images/tomas.jpg";

import {
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
  FotosDepoimento,
} from "./styles";

const Depoimentos = () => {
  return (
    <Body>
      <Main>
        <section>
          <TituloBanner>Nossos&nbsp;Depoimentos</TituloBanner>
          <DepoimentosBanner
            src={AdocaoImg}
            alt="Foto de um garoto com um filhote de cachorro"
          />
        </section>

        <DepoimentoApresentacao>
          <TituloDescricao>
            Veja os depoimentos dos nossos AUMIGOS
          </TituloDescricao>
        </DepoimentoApresentacao>

        <PrincipalDepoimento>
          <DepoimentoUl>
            <DepoimentoLi>
              <H3>Fred</H3>
              <FotosDepoimento
                src={FredImg}
                alt="Foto de Uma garota com um Gato Filhote"
              />
              <TextoApDepoimento>
                Eu não adotei o Fred, foi ele quem me adotou! Logo que fui
                conhece-lo foi amor a primeira vista, obrigada AUMIGOS.
              </TextoApDepoimento>
            </DepoimentoLi>

            <DepoimentoLi>
              <H3>Mel</H3>
              <FotosDepoimento
                src={MelImg}
                alt="Foto de uma Garota com uma cachorrinha"
              />
              <TextoApDepoimento>
                Adotei a Mel tem 1 mês e não conseguimos mais ficar longe uma da
                outra. Obrigada AUMIGOS por todo o suporte durante o processo!
              </TextoApDepoimento>
            </DepoimentoLi>

            <DepoimentoLi>
              <H3>Tobias</H3>
              <FotosDepoimento
                src={TobiasImg}
                alt="Foto de um senhor com um cachorro idoso"
              />
              <TextoApDepoimento>
                Adotei um animalzinho mais velho , eles são incríveis e merecem
                um lar também! Esse sou eu e o Tobias que ja tem 5 Anos, minha
                paixão!
              </TextoApDepoimento>
            </DepoimentoLi>

            <DepoimentoLi>
              <H3>Julie</H3>
              <FotosDepoimento
                src={JulieImg}
                alt="Foto de uma garotinha com seu cão branco e marrom"
              />
              <TextoApDepoimento>
                Essa é minha irmã e a Julie, acho que foram feitas uma para a
                outra, obrigada AUMIGOS por tudo!
              </TextoApDepoimento>
            </DepoimentoLi>

            <DepoimentoLi>
              <H3>Tom</H3>
              <FotosDepoimento
                src={TomImg}
                alt="Foto de uma idosa com seu cão filhote"
              />
              <TextoApDepoimento>
                Adotei o Tom, que ainda era um filhote, para a minha avó, não
                preciso nem dizer o quanto ela é apaixonada por ele né !?
              </TextoApDepoimento>
            </DepoimentoLi>

            <DepoimentoLi>
              <H3>Tomas</H3>
              <FotosDepoimento
                src={TomasImg}
                alt="Foto de uma garotinha com seu gato"
              />
              <TextoApDepoimento>
                Obrigada AUMIGOS agradeço pelo suporte durante todo o processo
                de adoção, agora a Bianca tem o Tomas para brincar!
              </TextoApDepoimento>
            </DepoimentoLi>
          </DepoimentoUl>
        </PrincipalDepoimento>
      </Main>
    </Body>
  );
};

export default Depoimentos;
