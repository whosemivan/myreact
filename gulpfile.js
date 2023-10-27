var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sass = require('gulp-sass')(require('sass'))
var server = require("browser-sync").create()
var csso = require("gulp-csso")
var autoprefixer = require("autoprefixer")
var sourcemap = require("gulp-sourcemaps")
var rename = require("gulp-rename")
var postcss = require("gulp-postcss");
var imagemin = require("gulp-imagemin")
var del = require("del");

gulp.task("css", function () {
    return gulp.src("src/assets/scss/style.scss")
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest("public/assets/css"))
        .pipe(csso())
        .pipe(rename("style.min.css"))
        .pipe(sourcemap.write("."))
        .pipe(gulp.dest("public/assets/css"))
        .pipe(server.stream());
});

gulp.task("js", function () {
    return gulp.src("src/assets/js/**/*.js")
        
        .pipe(gulp.dest("public/assets/js"));
});

gulp.task("images", function () {
    return gulp.src("src/assets/image/**/*.{png,jpg,svg}")
        .pipe(imagemin([
            imagemin.optipng({
                optimizationLevel: 3
            }),
            imagemin.mozjpeg({
                progressive: true
            }),
            imagemin.svgo()
        ]))

        .pipe(gulp.dest("public/assets/image"));
});

gulp.task("fonts", function () {
    return gulp.src("src/assets/fonts/**/*.{eot,ttf,woff,woff2}")

        .pipe(gulp.dest("public/assets/fonts"));
});

gulp.task("html", function () {
    return gulp.src("src/view/*.html")
        .pipe(gulp.dest("public"));
});

gulp.task("copy", function () {
    return gulp.src([
        "src/assets/fonts/**/*.{woff,woff2}",
        "src/assets/image/**",
        "src/assets/js/**",
        "src/*.ico"
    ], {
        base: "src"
    })
        .pipe(gulp.dest("public"));
});

gulp.task("clean", function () {
    return del("public");
});

gulp.task("build", gulp.series(
    "clean",
    "images",
    "css",
    "fonts",
    "js",
    "html"
));

gulp.task("server", function () {
    server.init({
        server: "public/",
    });

    gulp.watch("src/assets/scss/**/*.scss", gulp.series("css"));
    gulp.watch("src/assets/js/**/*.js", gulp.series("js"));
    gulp.watch("src/view/*.html", gulp.series("html", "refresh"));
});

gulp.task("refresh", function (done) {
    server.reload();
    done();
});

gulp.task("start", gulp.series("build", "server"));