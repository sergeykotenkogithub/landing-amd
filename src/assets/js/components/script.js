const menu = document.querySelector('.menu')

if (menu) {
	menu.addEventListener('click', () => {
		document.querySelector('.contacts').scrollIntoView({
			behavior: 'smooth',
		})
	})
}
