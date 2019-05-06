import gulp from 'gulp';
import sass from 'gulp-sass';
import gutil from 'gulp-util';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import connect from 'gulp-connect';

const jsSources = ['app/scripts/*.js'],
      sassSources = ['app/styles/*.scss'],
      htmlSources = ['**/*.html'],
      outputDir = 'dist';

gulp.task('log', () => {
  gutil.log('== My UI Task ==')
});

gulp.task('sass', () => {
  gulp.src(sassSources)
  .pipe(sass({style: 'expanded'}))
    .on('error', gutil.log)
  .pipe(gulp.dest(outputDir))
  .pipe(connect.reload())
});

gulp.task('js', () => {
  gulp.src(jsSources)
  .pipe(uglify())
  .pipe(concat('main.js'))
  .pipe(gulp.dest(outputDir))
  .pipe(connect.reload())
});

gulp.task('watch', () => {
  gulp.watch(jsSources, ['js']);
  gulp.watch(sassSources, ['sass']);
  gulp.watch(htmlSources, ['html']);
});

gulp.task('connect', () => {
  connect.server({
    root: ['dist', 'app'],
    livereload: true
  })
});

gulp.task('html', () => {
  gulp.src(htmlSources)
  .pipe(connect.reload())
});

gulp.task('dev',['html', 'js', 'sass','connect','watch'])

gulp.task('default', ['html', 'js', 'sass']);
