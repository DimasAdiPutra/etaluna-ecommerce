const button = document.getElementById('nav-button')
const nav = document.getElementById('nav-menu')

const navChildren = nav.querySelectorAll('*')

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

/* 
TODO: Mengatur jika pengguna mengklik di tempat selain navbar atau menekan tab untuk fokus ke element di luar navbar, maka, navbar akan otomatis tertutup. Untuk saat ini cara yang terpikirkan adalah dengan menggunakan event blur pada navbar lalu menghilangkan class show, atau dengan event focusin lalu mengecek apakah yang sedang fokus navbar atau bukan, jika bukan hilangkan class show, dan terakhir menggunakan click, jika yang di click bukan navbar atau element" di dalamnya maka hilangkan class show
*/
