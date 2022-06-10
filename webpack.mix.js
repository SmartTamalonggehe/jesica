const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/my_code/js")
    .js("resources/js/chart.js", "public/my_code/js")
    .js("resources/js/my_crud.js", "public/my_code/js")
    .js("resources/js/maps.js", "public/my_code/js")
    .js("resources/js/components.js", "public/my_code/js")
    .postCss("resources/css/app.css", "public/my_code/css");
