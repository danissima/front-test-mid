const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const rigger = require('gulp-rigger');
const prefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();
function browSync() {
	browserSync.init({
		server: {
			baseDir: 'dist/'
		},
		notify: false
	})
}
function styles() {
	return src('app/sass/style.sass')
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(prefixer({ overrideBrowserslist: ['last 10 versions'] }))
		.pipe(dest('dist/css'))
		.pipe(browserSync.stream())
}
function puging() {
	return src('app/template/*.pug')
		.pipe(pug())
		.pipe(dest('app/template'))
		.pipe(browserSync.stream())
}
function htmling() {
	return src('app/template/*.html')
		.pipe(rigger())
		.pipe(dest('dist/'))
}
function scripts() {
	return src('app/js/main.js')
		.pipe(rigger())
		.pipe(dest('dist/js/'))
		.pipe(browserSync.stream())
}
function images() {
	return src('app/images/**/*')
		.pipe(imagemin())
		.pipe(dest('dist/images/'))
		.pipe(browserSync.stream())
}
function watching() {
	watch(['app/sass/**/*.sass'], styles);
	watch(['app/template/*.pug'], puging);
	watch(['app/js/*.js'], scripts);
	watch(['app/images/**/*'], images);
	watch(['app/template/*.html'], htmling).on('change', browserSync.reload);
}

exports.styles = styles;
exports.puging = puging;
exports.watching = watching;
exports.default = parallel(browSync, watching, puging, htmling, styles, scripts);
exports.browSync = browSync;
exports.htmling = htmling;
exports.scripts = scripts;
exports.images = images;