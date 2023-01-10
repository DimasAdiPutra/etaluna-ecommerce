const button = document.getElementById('nav-button')
const nav = document.getElementById('nav-menu')

const navChildren = nav.querySelectorAll('a, input')

button.addEventListener('click', () => {
	if (button.ariaExpanded == 'true') {
		button.ariaExpanded = 'false'
		nav.classList.remove('show')
		for (const child of navChildren) {
			child.setAttribute('tabindex', '-1')
		}
	} else if (button.ariaExpanded == 'false') {
		button.ariaExpanded = 'true'
		nav.classList.add('show')
		for (const child of navChildren) {
			child.removeAttribute('tabindex')
		}
	}
})

document.addEventListener('focusin', e => {
	if (e.target !== nav && !nav.contains(e.target)) {
		button.ariaExpanded = 'false'
		nav.classList.remove('show')
		for (const child of navChildren) {
			child.setAttribute('tabindex', '-1')
		}
	}
})

document.addEventListener('mousedown', e => {
	if (e.target !== nav && !nav.contains(e.target)) {
		button.ariaExpanded = 'false'
		nav.classList.remove('show')
		for (const child of navChildren) {
			child.setAttribute('tabindex', '-1')
		}
	}
})
