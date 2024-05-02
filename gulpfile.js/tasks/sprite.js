const svgSprite = require('gulp-svg-sprite')
const svgmin = require('gulp-svgmin')

const sprite = () => {
  return $.gulp
    .src($.path.sprite.src)
    .pipe(svgmin({ multipass: true, js2svg: { pretty: true } }))
    .pipe(svgSprite({ mode: { stack: { sprite: '../sprite.svg' } } }))
    .pipe($.gulp.dest($.path.sprite.dest))
    .pipe($.browserSync.stream())
}

module.exports = sprite
