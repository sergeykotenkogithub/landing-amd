const menu = document.querySelector('.menu')

menu.addEventListener('click', () => {
	document.querySelector('.contacts').scrollIntoView({
		behavior: 'smooth',
	})
})
