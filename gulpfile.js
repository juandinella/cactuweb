const config = require('./gulp/config')
const gulp = require('gulp')
const prod = config.production

const common = [
  'fonts', 'markup',
  'scripts', 'static',
  'styles'
]
const development = [
  'serve', 'watch'
]
const production = [
  'minifyStyles',
  'purge',
  'styles-production',
  'minification',
  'critical'
]

common.forEach(file => require(`./gulp/common/${file}`))
prod
  ? production.forEach(file => require(`./gulp/production/${file}`))
  : development.forEach(file => require(`./gulp/development/${file}`))

const prodTasks = [
  'minifyStyles',
  'purge',
  'minification',
  'critical'
]

let tasks = [
  'clean',
  config.production ? 'styles:prod' : 'styles',
  'images', 'webp',
  'head', 'scripts',
  'fonts', 'markup',
  'laminas',
  prod && [...prodTasks]
]

const filteredTasks = tasks.filter(task => !!task)
gulp.task('build', gulp.series(...filteredTasks))

if (prod) {
  gulp.task('release', gulp.series('build'))
} else {
  gulp.task('serve', gulp.parallel('browser-sync', 'watch'))
  gulp.task('default', gulp.series('build', 'serve'))
}
