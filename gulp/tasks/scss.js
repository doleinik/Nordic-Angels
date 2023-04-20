import dartSass from "sass";
import gulpSass from "gulp-sass";
import rename from "gulp-rename"

import cleanCss from "gulp-clean-css";
import webpcss from "gulp-webpcss";
import autoprefixer from "gulp-autoprefixer";
import groupCssMediaQueries from "gulp-group-css-media-queries";

const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { soursmap: app.isDev })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SCSS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(sass({ outputStyle: 'expanded' }))
        .pipe(groupCssMediaQueries())
        .pipe(
            webpcss({
                webClass: '.webp',
                noWebpClass: '.no-webp'
            })
        )
        .pipe(
            autoprefixer({
                grid: true,
                overrideBrowserslist: ['last 3 versions'],
                cascade: true
            })
        )
        // Not compres copy
        // .pipe(app.gulp.dest(app.path.build.css))
        .pipe(cleanCss())
        .pipe(rename({ extname: ".css" }))
        .pipe(app.gulp.dest(app.path.build.scss))
        .pipe(app.plugins.browsersync.stream());
}