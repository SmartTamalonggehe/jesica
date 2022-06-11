import _ from "lodash";
window._ = _;
window.Swal = require("sweetalert2");
window.lightbox = require("lightbox2");

try {
    // window.Popper = require("popper.js").default;
    window.$ = window.jQuery = require("jquery");
    require("select2");
    $(".select2_basic").select2({
        tags: true,
        dropdownParent: $(".tampilModal"),
    });
    // require("bootstrap");
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

import axios from "axios";
window.axios = axios;

const feather = require("feather-icons");
feather.replace();

window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
