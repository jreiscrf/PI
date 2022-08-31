import React from "react";
import style from './depoimentos.scss';

const Depoimentos = () => {
  return (

    <main>
			<section>
				<h2 id="titulo-banner">Nossos&nbsp;&nbsp;Depoimentos</h2>
				<img id="depoimentos-banner" src="../assets/images/Adocao.jpg" alt="Foto de uma bolsa com ferramentas de barbeiro"/>
			</section>

			<section className="servicos-apresentacao">
				<h2 id="titulo-descricao" >Depoimentos </h2>
				<p id="texto-ap-servicos">Veja os Depoimentos de quem ja Adotou</p> 
			</section>

			<section className="principal-servicos">
				<ul className="servicos">
					<li>
						<h3>Fred</h3>
						<img className="fotos-servicos" src="../assets/images/fred.jpg" alt="Foto de um barbeiro cotando cabelo"/>
						<p className="texto-servicos">Eu não adotei o Fred, foi ele quem me adotou! Logo que fui conhece-lo foi amor a primeira vista, obrigada AUMIGOS.</p>
					</li>

					<li>
						<h3>Mel</h3>
						<img className="fotos-servicos" src="../assets/images/mel.jpg" alt="Foto de navalha e espuma de barbear"/>
						<p className="texto-servicos">Adotei a Mel tem 1 mês e não conseguimos mais ficar uma longe da outra. Obrigada AUMIGOS por todo o suporte durante o processo!</p>
					</li>

					<li>
						<h3>Tobias</h3>
						<img className="fotos-servicos" src="../assets/images/tobias.jpg" alt="Foto de uma criança de uns dois anos cortando o cabelo"/>
						<p className="texto-servicos">Adotei um animalzinho mais velho , eles são incríveis e merecem um lar também! Esse sou eu e o Tobias que ja tem 5 Anos, minha paixão!</p>
					</li>

					<li>
						<h3>Julie</h3>
						<img className="fotos-servicos" src="../assets/images/julie.jpg" alt="Foto com muitas ferramentas de barbearia"/>
						<p className="texto-servicos">Essa é minha irmã e a Julie, acho que foram feitas uma para a outra, obrigada AUMIGOS por tudo!</p>
					</li>

					<li>
						<h3>Tom</h3>
						<img className="fotos-servicos" src="../assets/images/tom.jpg" alt="Foto com muitas ferramentas de barbearia"/>
						<p className="texto-servicos">Adotei o Tom, um filhote já para a minha avó, não preciso nem dizer o quanto ela é apaixonada por ele né!</p>
					</li>

					<li>
						<h3>Tomas</h3>
						<img className="fotos-servicos" src="../assets/images/tomas.jpg" alt="Foto de pai e filho criança com espuma de barbear"/>
						<p className="texto-servicos">Obrigada AUMIGOS agradeço pelo suporte durante o processo de adoção; minha vida é muito melhor agora e a bianca que tem o tomas para brincar!</p>
					</li>
				</ul>
			</section>
		</main>

  );
};

export default Depoimentos;
