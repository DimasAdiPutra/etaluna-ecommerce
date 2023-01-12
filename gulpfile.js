require('dotenv').config()
const gulp = require('gulp')
const concat = require('gulp-concat')
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')
const env = process.env.NODE_ENV || 'development'
const filesToConcat = ['main.js', 'form.js']

gulp.task('concat', function () {
	let stream = gulp.src(filesToConcat.map((file) => `src/javascripts/${file}`))
	stream = stream.pipe(concat('main.js'))
	stream = stream.pipe(gulp.dest('public/javascripts/'))
	return stream
})

gulp.task('minify', function () {
	let stream = gulp.src('public/javascripts/main.js')
	if (env === 'production') {
		stream = stream.pipe(uglify())
		stream = stream.pipe(rename({ suffix: '.min' }))
	}
	stream = stream.pipe(gulp.dest('public/javascripts/'))
	return stream
})

gulp.task('mapping', function () {
	let stream = gulp.src('public/javascripts/main.js')
	if (env === 'development') {
		stream = stream
			.pipe(sourcemaps.init())
			.pipe(
				sourcemaps.write('.', {
					includeContent: false,
					sourceRoot: '.',
					file: 'main.map.js',
				})
			)
			.pipe(gulp.dest('public/javascripts/'))
	}
	return stream
})

gulp.task('default', gulp.series('concat', 'minify', 'mapping'))
