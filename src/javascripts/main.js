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
	console.log('button click nav');
})

document.addEventListener('focusin', e => {
	if (e.target !== nav && !nav.contains(e.target) && e.target !== button) {
		button.ariaExpanded = 'false'
		nav.classList.remove('show')
		for (const child of navChildren) {
			child.setAttribute('tabindex', '-1')
		}
	}
})

// Menjalankan feather icons
feather.replace({
	class: 'icons'
	// color: '#1B1B1B',
	// width: '16px',
})

console.log('main.js');
