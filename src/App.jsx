import { useState } from 'react';
import { bg1, bg2, bg3, bg4 } from './assets/images';
import phrases from './phrases.json';
import randomIndex from './assets/helpers/indexRandom';
// import changePhrase from './assets/helpers/changePhrase';
import './App.css';

const images = [bg1, bg2, bg3, bg4];

function App() {
	const [phrase, setPhrase] = useState(phrases[randomIndex(phrases.length)]);
	const [img, setImg] = useState(images[randomIndex(images.length)]);

	function changePhrase() {
		setPhrase(phrases[randomIndex(phrases.length)]);
		setImg(images[randomIndex(images.length)]);
	}

	return (
		<div className="wrapper" style={{ backgroundImage: `url('${img}')` }}>
			<div className="container">
				{/* Encabezado */}
				<h1 className="heading">Tu fortuna</h1>

				{/* Contenido */}
				<div className="card">
					<div className="card__body">
						<q className="phrase">{phrase.phrase}</q>
						<cite className="author">
							-<b>{phrase.author}</b>
						</cite>
					</div>
				</div>

				{/* Boton */}
				<button onClick={changePhrase} className="btn">
					Ver otro
				</button>
			</div>
		</div>
	);
}

export default App;
