import del from "del";
export const reset = () => {
    return del([`${app.path.clean}/js/`, `${app.path.clean}/css/`])
}
export const resetFont = () => {
    return del([`./src/fonts/*.*`])
}
export const resetFontFile = () => {
    return del([`./src/stylesheets/base/_fonts.scss`, `./src/stylesheets/includes/_var-fonts.scss`])
}
export const resetImages = () => {
    return del([`${app.path.watch.images}`])
}