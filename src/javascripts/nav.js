/**
 * @const button - mengambil element dengan id 'nav-button'
 * @const nav - mengambil element dengan id 'nav-menu'
 * @const navChildren - mengambil semua element input yang ada di dalam const nav
 */
const button = document.getElementById('nav-button')
const nav = document.getElementById('nav-menu')

const navChildren = nav.querySelectorAll('a, input')

/**
 * @event click - ketika const button di click atau element nav-button di click maka akan mengecek atribut aria-expanded
 * @atribute aria-expanded = true / false
 * @bool true = nav-menu di tampilkan
 * @bool false = nav-menu di sembunyikan
 */
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

/**
 * @event focusin - ketika menekan tab dan focus ke area diluar nav-menu maka nav-menu akan tertutup
 */
document.addEventListener('focusin', (e) => {
	if (e.target !== nav && !nav.contains(e.target) && e.target !== button) {
		button.ariaExpanded = 'false'
		nav.classList.remove('show')
		for (const child of navChildren) {
			child.setAttribute('tabindex', '-1')
		}
	}
})
