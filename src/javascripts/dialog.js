const error = document.getElementById('error')
const closeError = document.getElementById('closeError')

if (error) {
	closeError.addEventListener('click', (e) => {
		e.preventDefault()
		error.classList.add('hidden')
	})
}
