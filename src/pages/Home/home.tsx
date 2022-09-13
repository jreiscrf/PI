import React from "react";
import Home0Img from "../../assets/images/home-0.jpg";
import HomeDep1Img from "../../assets/images/homeDep1.png";
import HomeDep2Img from "../../assets/images/homeDep2.png";

import {
  TitlesHome,
  HomeDepoimentos,
  HomeDepoimentos2,
  // HomeDepoimentos3,
  Body,
  Main,
  TituloBanner,
  HomeBanner,
} from "./styles";

const Home = () => {
  return (
    <Body>
      <Main>
        <section>
          <TituloBanner>Tudo que vc precisa é de um amigo</TituloBanner>
          <HomeBanner src={Home0Img} alt="Tudo que vc precisa é de um amigo" />
        </section>

        <TitlesHome>
          <h2>Depoimentos</h2>
        </TitlesHome>

        <HomeDepoimentos>
          <div>
            <img src={HomeDep1Img} alt="Depoimento 1" />
            <br />
            <div>
              Esse é Mateus e seu mais novo AUmigo Teddy. Desde que Mateus
              chegou em casa os dois não se desgrudam mais, obrigado por todo
              apoio durante o processo de adoção AUMIGOS!
            </div>
          </div>
        </HomeDepoimentos>
        <HomeDepoimentos2>
          <div>
            <img src={HomeDep2Img} alt="Depoimento 2" />
            <br />
            <div>
              Essa é a Sofia e seu mais novo AUmigo Pingo. Desde que Pingo
              chegou em casa os dois não se desgrudam mais, obrigada por todo
              apoio durante o processo de adoção AUMIGOS!
            </div>
          </div>
        </HomeDepoimentos2>
      </Main>
    </Body>
  );
};

export default Home;
