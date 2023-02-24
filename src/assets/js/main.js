//= components/script.js
//= components/script2.js
//= components/script3.js

const menu = document.querySelector('.menu')

menu.addEventListener('click', () => {
	document.querySelector('.contacts').scrollIntoView({
		behavior: 'smooth',
	})
})
