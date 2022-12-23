const button = document.getElementById('nav-button')

button.addEventListener('click', () => {
	if (button.ariaExpanded == 'true') {
		button.ariaExpanded = 'false'
		button.nextElementSibling.classList.remove('show')
	} else if (button.ariaExpanded == 'false') {
		button.ariaExpanded = 'true'
		button.nextElementSibling.classList.add('show')
	}
})
