console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(2)
console.log(3)

const menu = document.querySelector('.menu')

menu.addEventListener('click', () => {
	console.log('11')
	document.querySelector('.contacts').scrollIntoView({
		behavior: 'smooth',
	})
})