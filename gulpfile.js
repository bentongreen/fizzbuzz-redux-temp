var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function() {
  gulp.src("css/**/*.scss")
  .pipe(sass().on("error", sass.logError))
  .pipe(gulp.dest("public/css"));
});

gulp.task("default", function() {
  gulp.watch("sass/**/*.scss", ["sass"]);
});
