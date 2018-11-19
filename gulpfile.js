const gulp = require('gulp');
const util = require('gulp-util');
const sequence = require('run-sequence');
const stylus = require('gulp-stylus');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const babel = require('gulp-babel');
const htmlmin = require('gulp-htmlmin');
const watch = require('gulp-watch');
const server = require('gulp-webserver');



gulp.task('assets',['assets.html', 'assets.stylus', 'assets.js', 'assets.fonts', 'assets.img']);

gulp.task('assets.html', ()=>{
    return gulp.src('assets/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))   
        .pipe(gulp.dest('public'))

});

gulp.task('assets.stylus', ()=>{
    return gulp.src('assets/styl/index.styl')
        .pipe(stylus())
        .pipe(uglifycss({'uglifyComments': true}))
        .pipe(concat('assets.min.css'))
        .pipe(gulp.dest('public/css'));

});

gulp.task('assets.js', ()=>{
    return gulp.src(['assets/**/*.js'])
        .pipe(babel({presets:['env']}))
        .pipe(uglify())
        .pipe(concat('assets.min.js'))   
        .pipe(gulp.dest('public/js'))
    
});

gulp.task('assets.fonts', ()=>{
     return gulp.src('assets/fonts/*.*')
     .pipe(gulp.dest('public/fonts'))
  
});

gulp.task('assets.img', ()=>{
    return gulp.src('assets/img/*.*')
    .pipe(gulp.dest('public/img'))
})


gulp.task('watch', ()=>{
    watch('assets/**/*.html', ()=> gulp.start('assets.html'))
    watch('assets/**/*.styl', ()=> gulp.start('assets.stylus'))
    watch('assets/**/*.js', ()=> gulp.start('assets.js'))
    watch('assets/fonts/*.*', ()=> gulp.start('assets.fonts'))
    watch('assets/img/*.*', ()=> gulp.start('assets.img'))

});

gulp.task('server', ['watch'], ()=>{
    return gulp.src('public').pipe(server({
        livereload: true,
        port: 3030,
        open: true
    }))
})

gulp.task('default', ()=>{
    if(util.env.production){
        sequence('assets');
    }else{
        sequence('assets', 'server');
    }
})