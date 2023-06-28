window.addEventListener('DOMContentLoaded', function () {
	const headerHeight = document.querySelector('header').offsetHeight
	const footerHeight = document.querySelector('footer').offsetHeight
	const mainElement = document.querySelector('main')

	const windowHeight = window.innerHeight
	const mainHeight = windowHeight - headerHeight - footerHeight

	mainElement.style.minHeight = mainHeight + 'px'
})
