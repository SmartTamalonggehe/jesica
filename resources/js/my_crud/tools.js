// toastr
import toastr from "toastr";

const route = document.getElementById("route").textContent;
let save_method;

const setSaveMethod = (set) => {
    save_method = set;
};

toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: false,
    progressBar: true,
    positionClass: "toast-top-right",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
};

export { toastr, route, save_method, setSaveMethod };
