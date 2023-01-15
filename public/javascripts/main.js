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

const validation = new JustValidate('#mainForm', {
  errorFieldCssClass: 'invalid',
  errorLabelCssClass: 'error'
})

if (document.getElementById('email')) {
  validation
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'Email is required',
      },
      {
        validator: (value) =>
          value.split('').find((e) => e === '@') ? true : false,
        errorMessage: 'Email must have @ in it.',
      },
      {
        rule: 'email',
        errorMessage:
          'After @ there must be at least 2 letters, point (.), And 2 letters behind the point (.)',
      },
    ])
    .addField(
      '#password',
      [
        {
          rule: 'required',
          errorMessage: 'Password is required.',
        },
        {
          rule: 'customRegexp',
          value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
          errorMessage:
            'Passwords must at least have 8 characters and contain 1 capital letter, 1 lowercase, and 1 number.',
        },
      ]
    )
}

if (document.getElementById('name')) {
  validation.addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Name is required.',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'The name must contain a minimum of 2 letters.',
    },
  ])
}

if (document.getElementById('firstName')) {
  validation.addField('#firstName', [
    {
      rule: 'required',
      errorMessage: 'First Name is required.',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'The first name must contain a minimum of 2 letters.',
    },
  ])
}

validation.onSuccess(() => {
  document.getElementById('mainForm').submit()
})