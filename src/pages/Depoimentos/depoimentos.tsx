import React from "react";
import style from './depoimentos.scss';

const Depoimentos = () => {
  return (

    <main>
			<section>
				<h2 id="titulo-banner">Nossos&nbsp;&nbsp;Depoimentos</h2>
				<img id="depoimento-banner" src="../assets/images/Adocao.jpg" alt="Foto de um garoto com um filhote de cachorro"/>
			</section>

			<section className="depoimento-apresentacao">
				<h2 id="titulo-descricao" >Depoimentos </h2>
				<p id="texto-ap-depoimento">Veja os Depoimentos de quem ja Adotou</p> 
			</section>

			<section className="principal-depoimento">
				<ul className="depoimento">
					<li>
						<h3>Fred</h3>
						<img className="fotos-depoimento" src="../assets/images/fred.jpg" alt="Foto de Uma garota com um Gato Filhote"/>
						<p className="texto-depoimento">Eu não adotei o Fred, foi ele quem me adotou! Logo que fui conhece-lo foi amor a primeira vista, obrigada AUMIGOS.</p>
					</li>

					<li>
						<h3>Mel</h3>
						<img className="fotos-depoimento" src="../assets/images/mel.jpg" alt="Foto de uma Garota com uma cachorrinha"/>
						<p className="texto-depoimento">Adotei a Mel tem 1 mês e não conseguimos mais ficar uma longe da outra. Obrigada AUMIGOS por todo o suporte durante o processo!</p>
					</li>

					<li>
						<h3>Tobias</h3>
						<img className="fotos-depoimento" src="../assets/images/tobias.jpg" alt="Foto de um senhor com um cachorro idoso"/>
						<p className="texto-depoimento">Adotei um animalzinho mais velho , eles são incríveis e merecem um lar também! Esse sou eu e o Tobias que ja tem 5 Anos, minha paixão!</p>
					</li>

					<li>
						<h3>Julie</h3>
						<img className="fotos-depoimento" src="../assets/images/julie.jpg" alt="Foto de uma garotinha com seu cão branco e marrom"/>
						<p className="texto-depoimento">Essa é minha irmã e a Julie, acho que foram feitas uma para a outra, obrigada AUMIGOS por tudo!</p>
					</li>

					<li>
						<h3>Tom</h3>
						<img className="fotos-depoimento" src="../assets/images/tom.jpg" alt="Foto de uma idosa com seu cão filhote"/>
						<p className="texto-depoimento">Adotei o Tom, um filhote já para a minha avó, não preciso nem dizer o quanto ela é apaixonada por ele né!</p>
					</li>

					<li>
						<h3>Tomas</h3>
						<img className="fotos-depoimento" src="../assets/images/tomas.jpg" alt="Foto de uma garotinha com seu gato"/>
						<p className="texto-depoimento">Obrigada AUMIGOS agradeço pelo suporte durante o processo de adoção; minha vida é muito melhor agora e a bianca que tem o tomas para brincar!</p>
					</li>
				</ul>
			</section>
		</main>

  );
};

export default Depoimentos;
