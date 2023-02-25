const menu = document.querySelector('.menu')

if (menu) {
	menu.addEventListener('click', () => {
		document.querySelector('.contacts').scrollIntoView({
			behavior: 'smooth',
		})
	})
}
// console.log(2)
// console.log(3)