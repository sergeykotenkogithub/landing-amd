const menu = document.querySelector('.menu')

menu.addEventListener('click', () => {
	document.querySelector('.contacts').scrollIntoView({
		behavior: 'smooth',
	})
})
// console.log(2)
// console.log(3)