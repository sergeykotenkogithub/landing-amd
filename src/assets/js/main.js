//= components/script.js
//= components/script2.js
//= components/script3.js

const menu = document.querySelector('.menu')

menu.addEventListener('click', () => {
	console.log('11')
	document.querySelector('.contacts').scrollIntoView({
		behavior: 'smooth',
	})
})
