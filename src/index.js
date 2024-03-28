import './style.scss';
const shareButton = document.querySelector('.author__share-button');
const shareBox = document.querySelector('.author__share-box');
const arrow = document.querySelector('.author__share-button-arrow');

shareButton.addEventListener('click', () => {
	shareBox.classList.toggle('author__share-box--active-desktop');
	shareButton.classList.toggle('author__share-box--active-button');
	arrow.classList.toggle('author__share-box--active-button');
});
