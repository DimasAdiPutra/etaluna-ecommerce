// require sweetalert2
const Swal = require('sweetalert2')

// cek apakah ada element yang memiliki atribut data-success
const successMessage = document.querySelector('[data-success]')

// jika ada tampilkan dialog pesan success
if (successMessage !== '' && successMessage) {
	Swal.fire({
		icon: 'success',
		title: successMessage.dataset.success.split('-').join(' '),
		customClass: {
			confirmButton: 'button button--primary',
		},
	})
}

const error = document.getElementById('error') // mengambil element yang menampilkan error
const closeError = document.getElementById('closeError') // mengambil button closenya

if (error) {
	closeError.addEventListener('click', (e) => {
		e.preventDefault()
		error.classList.add('hidden')
	})
}
