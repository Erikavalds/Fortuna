import randomIndex from './indexRandom';

function changePhrase() {
	setPhrase(phrases[randomIndex(phrases.length)]);
	setImg(images[randomIndex(images.length)]);
}

export default changePhrase;
