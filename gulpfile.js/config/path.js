const pathSrc = './src'
const pathDest = './public'

module.exports = {
  root: pathDest,

  html: {
    src: [pathSrc + '/pages/*.html'],
    watch: pathSrc + '/**/*.html',
    dest: pathDest
  },

  css: {
    src: pathSrc + '/css/style.css',
    watch: pathSrc + '/css/**/*.css',
    dest: pathDest + '/css'
  },

  scss: {
    src: pathSrc + '/scss/main.scss',
    watch: pathSrc + '/scss/**/*.scss',
    dest: pathDest + '/css'
  },

  js: {
    src: pathSrc + '/js/main.js',
    watch: pathSrc + '/js/**/*.js',
    dest: pathDest + '/js'
  },

  img: {
    src: pathSrc + '/img/static/**/*.{png,jpg,jpeg,gif,svg}',
    watch: pathSrc + '/img/static/**/*.{png,jpg,jpeg,gif,svg}',
    dest: pathDest + '/img/static'
  },

  resources: {
    src: pathSrc + '/resources/**/*.*',
    watch: pathSrc + '/resources/**/*.*',
    dest: pathDest + '/resources'
  },

  sprite: {
    src: pathSrc + '/img/icons/*.svg',
    watch: pathSrc + '/img/icons/**/*.svg',
    dest: pathDest + '/img'
  },

  font: {
    src: pathSrc + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
    watch: pathSrc + '/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}',
    dest: pathDest + '/fonts'
  },

  zip: {
    src: pathDest + '/**/*.*',
    dest: './'
  }
}
