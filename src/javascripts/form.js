/**
 * mengecek apakah terdapat element dengan id mainForm
 * jika ada kita akan merequire package just-validate untuk melakukan validasi form
 */
if (document.getElementById('mainForm')) {
	const JustValidate = require('just-validate')

	/**
	 * Membuat custom class untuk inputan yang tidak valid dan error
	 * @class invalid - digunakan untuk inputan yang tidak valid
	 * @class error - digunakan untuk keterangan error
	 */
	const validation = new JustValidate('#mainForm', {
		errorFieldCssClass: 'invalid',
		errorLabelCssClass: 'error',
	})

	/**
	 * Untuk field name dan firstName wajib diisi dan minimal memiliki 2 huruf
	 */
	if (document.getElementById('name')) {
		validation.addField('#name', [
			{
				rule: 'required',
				errorMessage: 'Name is required.',
			},
			{
				rule: 'minLength',
				value: 2,
				errorMessage: 'Name must be at least 2 letters.',
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
				errorMessage: 'First Name must be at least 2 letters.',
			},
		])
	}

	/**
	 * just-validate sudah menyediakan validasi email yang cukup dengan mengecek @ dan domain emailnya
	 */
	if (document.getElementById('email')) {
		validation.addField('#email', [
			{
				rule: 'required',
				errorMessage: 'Email is required',
			},
			{
				rule: 'email',
				errorMessage: 'Invalid email. Please enter a valid email.',
			},
		])
	}

	/**
	 * Password menggunakan regex dengan minimal 8 karakter yang berisi huruf besar, huruf kecil dan angka
	 */
	if (document.getElementById('password')) {
		validation.addField('#password', [
			{
				rule: 'required',
				errorMessage: 'Password is required.',
			},
			{
				rule: 'customRegexp',
				value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
				errorMessage:
					'Password is too weak. It must be at least 8 characters long and include an uppercase letter, a lowercase letter and a number.',
			},
		])
	}

	/**
	 * @success - submit form
	 */
	validation.onSuccess(() => {
		document.getElementById('mainForm').submit()
	})
}
