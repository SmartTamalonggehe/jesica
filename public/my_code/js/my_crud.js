/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/my_crud/costumeForm.js":
/*!*********************************************!*\
  !*** ./resources/js/my_crud/costumeForm.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formPolygon": () => (/* binding */ formPolygon)
/* harmony export */ });
var formPolygon = function formPolygon() {
  var textToggle = document.querySelector(".modal .toggle .label-toggle");
  textToggle.innerHTML = "Koordinat"; // const parent = document.querySelector(".modal .toggle .row");
  // const inputCoord = `<div class="col-12">
  //                         <button type="button" id="addCoord" class="btn btn-secondary">
  //                             Tambah Koordinat
  //                         </button>
  //                     </div>;`;
  // parent.innerHTML = inputCoord;
};



/***/ }),

/***/ "./resources/js/my_crud/hapus.js":
/*!***************************************!*\
  !*** ./resources/js/my_crud/hapus.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var tools = __webpack_require__(/*! ./tools */ "./resources/js/my_crud/tools.js");

var href;
var csrf_token = $('meta[name="csrf_token"]').attr("content");
$("body").on("click", ".btnHapus", function (e) {
  e.preventDefault();
  href = $(this).data("id");
  Swal.fire({
    title: "Apa anda yakin?",
    text: "Data yang telah dihapus tidak dapat dikembalikan!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Hapus",
    cancelButtonText: "Batal"
  }).then(function (result) {
    if (result.isConfirmed) {
      $.ajax({
        url: "".concat(tools.uri, "/").concat(href),
        type: "POST",
        data: {
          _method: "DELETE",
          _token: csrf_token
        },
        beforeSend: function beforeSend() {// lakukan sesuatu sebelum data dikirim
        },
        success: function success(response) {
          // lakukan sesuatu jika data sudah terkirim
          Swal.fire("Berhasil!", response.pesan, response.type);
          var oTable = $("#my_table").dataTable(); // setTimeOut for reloading page

          setTimeout(function () {
            location.reload();
          }, 1000);
          oTable.fnDraw(false);
        }
      });
    }
  });
});

/***/ }),

/***/ "./resources/js/my_crud/tambah.js":
/*!****************************************!*\
  !*** ./resources/js/my_crud/tambah.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _costumeForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./costumeForm */ "./resources/js/my_crud/costumeForm.js");
/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! toastify-js */ "./node_modules/toastify-js/src/toastify.js");
/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(toastify_js__WEBPACK_IMPORTED_MODULE_1__);
var tools = __webpack_require__(/*! ./tools */ "./resources/js/my_crud/tools.js");




function tampilForm() {
  document.getElementById("judul_form").innerText = "From Tambah Data";
  document.getElementById("tombolForm").innerText = "Simpan Data";

  if (tools.route === "nilai") {
    document.querySelector(".gambar_lama").innerHTML = "";
  }

  $(".tampilModal").modal("show");
}

var btnTambah = document.getElementById("tambah");

if (btnTambah) {
  btnTambah.addEventListener("click", function () {
    if (tools.route === "koordinat" || tools.route === "geomorfologi") {
      _costumeForm__WEBPACK_IMPORTED_MODULE_0__.formPolygon();
    }

    tampilForm();
    tools.save_method = "add";
    $("#id").val("");
    $(".inputReset").val("");
    $(".selectReset").val("").trigger("change");
  });
}

function formBiasa() {
  $("#formKu").on("submit", function (e) {
    e.preventDefault();
    var id = $("#id").val();
    var dataKu = $("#formKu").serialize();
    var url;
    var method;

    if (tools.save_method == "add") {
      url = "".concat(tools.uri);
      method = "POST";
    } else {
      url = "".concat(tools.uri, "/:id");
      url = url.replace(":id", id);
      method = "PUT";
    }

    $.ajax({
      url: url,
      type: method,
      data: dataKu,
      success: function success(response) {
        toastr[response.type](response.pesan, response.judul);

        if (response.type !== "error") {
          $("#id").val("");
          $(".inputReset").val("");
          var oTable = $("#my_table").dataTable();
          oTable.fnDraw(false);
          $(".selectReset").val("").trigger("change"); // setTimeOut for reloading page

          setTimeout(function () {
            location.reload();
          }, 1000);
        }

        if (tools.save_method == "Ubah") {
          $(".tampilModal").modal("hide");
        }
      }
    }).fail(function (res) {
      console.log(res);
    });
  });
}

function formGambar() {
  $("#formGambar").on("submit", function (e) {
    e.preventDefault();
    var id = $("#id").val();
    var dataKu = new FormData(this);

    if (tools.save_method == "add") {
      url = "".concat(tools.uri);
    } else {
      url = "".concat(tools.uri, "/:id");
      url = url.replace(":id", id);
      dataKu.append("_method", "PUT");
    }

    $.ajax({
      url: url,
      type: "POST",
      data: dataKu,
      contentType: false,
      cache: false,
      processData: false,
      success: function success(response) {
        toastify_js__WEBPACK_IMPORTED_MODULE_1___default()({
          text: "This is a toast",
          className: "info",
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)"
          }
        }).showToast();

        if (response.type === "error") {
          return 0;
        }

        $("#formKu").trigger("reset");
        $(".selectReset").val("").trigger("change");
        resetPicture();
        var oTable = $("#my_table").dataTable();
        oTable.fnDraw(false);

        if (tools.save_method == "Ubah") {
          $(".tampilModal").modal("hide");
          tools.save_method = "add";
        }
      }
    }).fail(function (jqXHR, ajaxOptions, thrownError) {
      alert("Error. Server tidak merespon");
    });
  });
}

var resetPicture = function resetPicture() {
  $(".custom-file-container__image-preview").attr("style", "color: aqua");
  $(".custom-file-container__custom-file__custom-file-control").html("Choose file...\n        <span class=\"custom-file-container__custom-file__custom-file-control__button\"> Browse </span>");
}; // Script Tambah & Ubah


if (tools.route === "nilai" || tools.route === "kartumhs") {
  formGambar();
} else {
  formBiasa();
}

/***/ }),

/***/ "./resources/js/my_crud/tools.js":
/*!***************************************!*\
  !*** ./resources/js/my_crud/tools.js ***!
  \***************************************/
/***/ ((module) => {

// Variable
var route = document.getElementById("route").textContent;
var save_method;
var uri = "/crud/".concat(route);
module.exports = {
  route: route,
  save_method: save_method,
  uri: uri
};

/***/ }),

/***/ "./resources/js/my_crud/ubah.js":
/*!**************************************!*\
  !*** ./resources/js/my_crud/ubah.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var tools = __webpack_require__(/*! ./tools */ "./resources/js/my_crud/tools.js");

function dataForm(data) {
  // Jika route pegawai
  if (tools.route === "pegawai") {
    $("#id").val(data.id);
    $("#NIP").val(data.NIP);
    $("#nama").val(data.nama);
    $("#bidang").val(data.bidang);
    $("#bagian").val(data.bagian);
    $("#pangkat").val(data.pangkat);
    $("#golongan").val(data.golongan);
    $("#jabatan").val(data.jabatan);
    $("#instansi").val(data.instansi);
    $("#tingkat").val(data.tingkat);
    $(".tampilModal").modal("show");
    $("#judul").html("Silahkan Merubah Data");
    $("#tombolForm").html("Ubah Data");
  } // Jika route gaji


  if (tools.route === "gaji") {
    $("#id").val(data.id);
    $("#pegawai_id").val(data.pegawai_id).trigger("change");
    $("#gaji_pokok").val(data.gaji_pokok);
    $("#pembulatan").val(data.pembulatan);
    $("#tgl_gaji").val(data.tgl_gaji);
    $(".tampilModal").modal("show");
    $("#judul").html("Silahkan Merubah Data");
    $("#tombolForm").html("Ubah Data");
  } // Jika route tunjangan


  if (tools.route === "tunjangan") {
    $("#id").val(data.id);
    $("#nm_tunjangan").val(data.nm_tunjangan).trigger("change");
    $("#jml_tunjangan").val(data.jml_tunjangan);
    $(".tampilModal").modal("show");
    $("#judul").html("Silahkan Merubah Data");
    $("#tombolForm").html("Ubah Data");
  } // Jika route potongan


  if (tools.route === "potongan") {
    $("#id").val(data.id);
    $("#nm_potongan").val(data.nm_potongan).trigger("change");
    $("#jml_potongan").val(data.jml_potongan);
    $(".tampilModal").modal("show");
    $("#judul").html("Silahkan Merubah Data");
    $("#tombolForm").html("Ubah Data");
  } // Jika route surat


  if (tools.route === "surat") {
    $("#id").val(data.id);
    $("#pegawai_id").val(data.pegawai_id).trigger("change");
    $("#tgl_surat").val(data.tgl_surat);
    $("#no_surat").val(data.no_surat);
    $("#jenis_surat").val(data.jenis_surat);
    $("#dasar").val(data.dasar);
    $("#dari").val(data.dari);
    $("#tujuan").val(data.tujuan);
    $("#maksud").val(data.maksud);
    $("#alat_angkut").val(data.alat_angkut);
    $("#lama").val(data.lama);
    $("#tgl_berangkat").val(data.tgl_berangkat);
    $("#tgl_kembali").val(data.tgl_kembali);
    $("#beban_anggaran").val(data.beban_anggaran);
    $("#mata_anggaran").val(data.mata_anggaran);
    $("#keterangan").val(data.keterangan);
    $(".tampilModal").modal("show");
    $("#judul").html("Silahkan Merubah Data");
    $("#tombolForm").html("Ubah Data");
  } // Jika route pengikut


  if (tools.route === "pengikut") {
    $("#id").val(data.id);
    $("#pegawai_id").val(data.pegawai_id).trigger("change");
    $(".tampilModal").modal("show");
    $("#judul").html("Silahkan Merubah Data");
    $("#tombolForm").html("Ubah Data");
  } // Jika route kwitansi


  if (tools.route === "kwitansi") {
    $("#id").val(data.id);
    $("#surat_id").val(data.surat_id).trigger("change");
    $("#kode_rek").val(data.kode_rek);
    $("#tgl_kwitansi").val(data.tgl_kwitansi);
    $("#terima").val(data.terima);
    $("#tgl_terima").val(data.tgl_terima);
    $("#banyak").val(data.banyak);
    $("#terbilang").val(data.terbilang);
    $("#pergi").val(data.pergi);
    $("#pulang").val(data.pulang);
    $(".tampilModal").modal("show");
    $("#judul").html("Silahkan Merubah Data");
    $("#tombolForm").html("Ubah Data");
  } // Jika route kwitansiDetail


  if (tools.route === "kwitansiDetail") {
    $("#id").val(data.id);
    $("#kwitansi_id").val(data.kwitansi_id);
    $("#uraian").val(data.uraian);
    $("#lama").val(data.lama);
    $("#jumlah").val(data.jumlah);
    $(".tampilModal").modal("show");
    $("#judul").html("Silahkan Merubah Data");
    $("#tombolForm").html("Ubah Data");
  } // Jika route mhs


  if (tools.route === "mhs") {
    $("#id").val(data.id);
    $("#NPM").val(data.NPM);
    $("#nm_mhs").val(data.nm_mhs);
    $("#thn_angkatan").val(data.thn_angkatan).trigger("change");

    if (data.jenkel === "Perempuan") {
      $("#Perempuan").prop("checked", true);
    } else {
      $("#Laki-laki").prop("checked", true);
    }

    $(".tampilModal").modal("show");
    $("#judul").html("Silahkan Merubah Data");
    $("#tombolForm").html("Ubah Data");
  } // Jika route nilai alternatif


  if (tools.route === "nilaiAlternatif") {
    (function () {
      var gpAlternatif = data.reduce(function (r, a) {
        r[a.alternatif_id] = [].concat(_toConsumableArray(r[a.alternatif_id] || []), [a]);
        return r;
      }, {}); // cari select alternatif

      var selectAlt = document.getElementById("alternatif_id");
      var isiId = [];

      for (var i in gpAlternatif) {
        var subKrit = gpAlternatif[i];
        subKrit.forEach(function (el) {
          isiId.push(el.id);
          var isiOption = "<option value=\"".concat(el.alternatif.id, "\" selected>").concat(el.alternatif.nm_alternatif, "</option>");
          selectAlt.innerHTML = isiOption;
          $("#".concat(el.sub_kriteria.kriteria_id, "sub_kriteria_id")).val(el.sub_kriteria_id).trigger("change");
        });
      }

      $("#id").val(isiId);
      $(".tampilModal").modal("show");
      $("#judul").html("Silahkan Merubah Data");
      $("#tombolForm").html("Ubah Data");
    })();
  }
}

$("body").on("click", ".btnUbah", function (e) {
  e.preventDefault();
  var href = $(this).data("id");
  tools.save_method = "Ubah";
  $.ajax({
    url: "".concat(tools.uri, "/").concat(href, "/edit"),
    type: "GET",
    dataType: "JSON",
    beforeSend: function beforeSend() {// lakukan sesuatu sebelum data dikirim
    },
    success: function success(data) {
      // return console.log(data);
      dataForm(data);
    }
  });
});

/***/ }),

/***/ "./node_modules/toastify-js/src/toastify.js":
/*!**************************************************!*\
  !*** ./node_modules/toastify-js/src/toastify.js ***!
  \**************************************************/
/***/ (function(module) {

/*!
 * Toastify js 1.11.2
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */
(function(root, factory) {
  if ( true && module.exports) {
    module.exports = factory();
  } else {
    root.Toastify = factory();
  }
})(this, function(global) {
  // Object initialization
  var Toastify = function(options) {
      // Returning a new init object
      return new Toastify.lib.init(options);
    },
    // Library version
    version = "1.11.2";

  // Set the default global options
  Toastify.defaults = {
    oldestFirst: true,
    text: "Toastify is awesome!",
    node: undefined,
    duration: 3000,
    selector: undefined,
    callback: function () {
    },
    destination: undefined,
    newWindow: false,
    close: false,
    gravity: "toastify-top",
    positionLeft: false,
    position: '',
    backgroundColor: '',
    avatar: "",
    className: "",
    stopOnFocus: true,
    onClick: function () {
    },
    offset: {x: 0, y: 0},
    escapeMarkup: true,
    style: {background: ''}
  };

  // Defining the prototype of the object
  Toastify.lib = Toastify.prototype = {
    toastify: version,

    constructor: Toastify,

    // Initializing the object with required parameters
    init: function(options) {
      // Verifying and validating the input object
      if (!options) {
        options = {};
      }

      // Creating the options object
      this.options = {};

      this.toastElement = null;

      // Validating the options
      this.options.text = options.text || Toastify.defaults.text; // Display message
      this.options.node = options.node || Toastify.defaults.node;  // Display content as node
      this.options.duration = options.duration === 0 ? 0 : options.duration || Toastify.defaults.duration; // Display duration
      this.options.selector = options.selector || Toastify.defaults.selector; // Parent selector
      this.options.callback = options.callback || Toastify.defaults.callback; // Callback after display
      this.options.destination = options.destination || Toastify.defaults.destination; // On-click destination
      this.options.newWindow = options.newWindow || Toastify.defaults.newWindow; // Open destination in new window
      this.options.close = options.close || Toastify.defaults.close; // Show toast close icon
      this.options.gravity = options.gravity === "bottom" ? "toastify-bottom" : Toastify.defaults.gravity; // toast position - top or bottom
      this.options.positionLeft = options.positionLeft || Toastify.defaults.positionLeft; // toast position - left or right
      this.options.position = options.position || Toastify.defaults.position; // toast position - left or right
      this.options.backgroundColor = options.backgroundColor || Toastify.defaults.backgroundColor; // toast background color
      this.options.avatar = options.avatar || Toastify.defaults.avatar; // img element src - url or a path
      this.options.className = options.className || Toastify.defaults.className; // additional class names for the toast
      this.options.stopOnFocus = options.stopOnFocus === undefined ? Toastify.defaults.stopOnFocus : options.stopOnFocus; // stop timeout on focus
      this.options.onClick = options.onClick || Toastify.defaults.onClick; // Callback after click
      this.options.offset = options.offset || Toastify.defaults.offset; // toast offset
      this.options.escapeMarkup = options.escapeMarkup !== undefined ? options.escapeMarkup : Toastify.defaults.escapeMarkup;
      this.options.style = options.style || Toastify.defaults.style;
      if(options.backgroundColor) {
        this.options.style.background = options.backgroundColor;
      }

      // Returning the current object for chaining functions
      return this;
    },

    // Building the DOM element
    buildToast: function() {
      // Validating if the options are defined
      if (!this.options) {
        throw "Toastify is not initialized";
      }

      // Creating the DOM object
      var divElement = document.createElement("div");
      divElement.className = "toastify on " + this.options.className;

      // Positioning toast to left or right or center
      if (!!this.options.position) {
        divElement.className += " toastify-" + this.options.position;
      } else {
        // To be depreciated in further versions
        if (this.options.positionLeft === true) {
          divElement.className += " toastify-left";
          console.warn('Property `positionLeft` will be depreciated in further versions. Please use `position` instead.')
        } else {
          // Default position
          divElement.className += " toastify-right";
        }
      }

      // Assigning gravity of element
      divElement.className += " " + this.options.gravity;

      if (this.options.backgroundColor) {
        // This is being deprecated in favor of using the style HTML DOM property
        console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');
      }

      // Loop through our style object and apply styles to divElement
      for (var property in this.options.style) {
        divElement.style[property] = this.options.style[property];
      }

      // Adding the toast message/node
      if (this.options.node && this.options.node.nodeType === Node.ELEMENT_NODE) {
        // If we have a valid node, we insert it
        divElement.appendChild(this.options.node)
      } else {
        if (this.options.escapeMarkup) {
          divElement.innerText = this.options.text;
        } else {
          divElement.innerHTML = this.options.text;
        }

        if (this.options.avatar !== "") {
          var avatarElement = document.createElement("img");
          avatarElement.src = this.options.avatar;

          avatarElement.className = "toastify-avatar";

          if (this.options.position == "left" || this.options.positionLeft === true) {
            // Adding close icon on the left of content
            divElement.appendChild(avatarElement);
          } else {
            // Adding close icon on the right of content
            divElement.insertAdjacentElement("afterbegin", avatarElement);
          }
        }
      }

      // Adding a close icon to the toast
      if (this.options.close === true) {
        // Create a span for close element
        var closeElement = document.createElement("span");
        closeElement.innerHTML = "&#10006;";

        closeElement.className = "toast-close";

        // Triggering the removal of toast from DOM on close click
        closeElement.addEventListener(
          "click",
          function(event) {
            event.stopPropagation();
            this.removeElement(this.toastElement);
            window.clearTimeout(this.toastElement.timeOutValue);
          }.bind(this)
        );

        //Calculating screen width
        var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

        // Adding the close icon to the toast element
        // Display on the right if screen width is less than or equal to 360px
        if ((this.options.position == "left" || this.options.positionLeft === true) && width > 360) {
          // Adding close icon on the left of content
          divElement.insertAdjacentElement("afterbegin", closeElement);
        } else {
          // Adding close icon on the right of content
          divElement.appendChild(closeElement);
        }
      }

      // Clear timeout while toast is focused
      if (this.options.stopOnFocus && this.options.duration > 0) {
        var self = this;
        // stop countdown
        divElement.addEventListener(
          "mouseover",
          function(event) {
            window.clearTimeout(divElement.timeOutValue);
          }
        )
        // add back the timeout
        divElement.addEventListener(
          "mouseleave",
          function() {
            divElement.timeOutValue = window.setTimeout(
              function() {
                // Remove the toast from DOM
                self.removeElement(divElement);
              },
              self.options.duration
            )
          }
        )
      }

      // Adding an on-click destination path
      if (typeof this.options.destination !== "undefined") {
        divElement.addEventListener(
          "click",
          function(event) {
            event.stopPropagation();
            if (this.options.newWindow === true) {
              window.open(this.options.destination, "_blank");
            } else {
              window.location = this.options.destination;
            }
          }.bind(this)
        );
      }

      if (typeof this.options.onClick === "function" && typeof this.options.destination === "undefined") {
        divElement.addEventListener(
          "click",
          function(event) {
            event.stopPropagation();
            this.options.onClick();
          }.bind(this)
        );
      }

      // Adding offset
      if(typeof this.options.offset === "object") {

        var x = getAxisOffsetAValue("x", this.options);
        var y = getAxisOffsetAValue("y", this.options);

        var xOffset = this.options.position == "left" ? x : "-" + x;
        var yOffset = this.options.gravity == "toastify-top" ? y : "-" + y;

        divElement.style.transform = "translate(" + xOffset + "," + yOffset + ")";

      }

      // Returning the generated element
      return divElement;
    },

    // Displaying the toast
    showToast: function() {
      // Creating the DOM object for the toast
      this.toastElement = this.buildToast();

      // Getting the root element to with the toast needs to be added
      var rootElement;
      if (typeof this.options.selector === "string") {
        rootElement = document.getElementById(this.options.selector);
      } else if (this.options.selector instanceof HTMLElement || (typeof ShadowRoot !== 'undefined' && this.options.selector instanceof ShadowRoot)) {
        rootElement = this.options.selector;
      } else {
        rootElement = document.body;
      }

      // Validating if root element is present in DOM
      if (!rootElement) {
        throw "Root element is not defined";
      }

      // Adding the DOM element
      var elementToInsert = Toastify.defaults.oldestFirst ? rootElement.firstChild : rootElement.lastChild;
      rootElement.insertBefore(this.toastElement, elementToInsert);

      // Repositioning the toasts in case multiple toasts are present
      Toastify.reposition();

      if (this.options.duration > 0) {
        this.toastElement.timeOutValue = window.setTimeout(
          function() {
            // Remove the toast from DOM
            this.removeElement(this.toastElement);
          }.bind(this),
          this.options.duration
        ); // Binding `this` for function invocation
      }

      // Supporting function chaining
      return this;
    },

    hideToast: function() {
      if (this.toastElement.timeOutValue) {
        clearTimeout(this.toastElement.timeOutValue);
      }
      this.removeElement(this.toastElement);
    },

    // Removing the element from the DOM
    removeElement: function(toastElement) {
      // Hiding the element
      // toastElement.classList.remove("on");
      toastElement.className = toastElement.className.replace(" on", "");

      // Removing the element from DOM after transition end
      window.setTimeout(
        function() {
          // remove options node if any
          if (this.options.node && this.options.node.parentNode) {
            this.options.node.parentNode.removeChild(this.options.node);
          }

          // Remove the element from the DOM, only when the parent node was not removed before.
          if (toastElement.parentNode) {
            toastElement.parentNode.removeChild(toastElement);
          }

          // Calling the callback function
          this.options.callback.call(toastElement);

          // Repositioning the toasts again
          Toastify.reposition();
        }.bind(this),
        400
      ); // Binding `this` for function invocation
    },
  };

  // Positioning the toasts on the DOM
  Toastify.reposition = function() {

    // Top margins with gravity
    var topLeftOffsetSize = {
      top: 15,
      bottom: 15,
    };
    var topRightOffsetSize = {
      top: 15,
      bottom: 15,
    };
    var offsetSize = {
      top: 15,
      bottom: 15,
    };

    // Get all toast messages on the DOM
    var allToasts = document.getElementsByClassName("toastify");

    var classUsed;

    // Modifying the position of each toast element
    for (var i = 0; i < allToasts.length; i++) {
      // Getting the applied gravity
      if (containsClass(allToasts[i], "toastify-top") === true) {
        classUsed = "toastify-top";
      } else {
        classUsed = "toastify-bottom";
      }

      var height = allToasts[i].offsetHeight;
      classUsed = classUsed.substr(9, classUsed.length-1)
      // Spacing between toasts
      var offset = 15;

      var width = window.innerWidth > 0 ? window.innerWidth : screen.width;

      // Show toast in center if screen with less than or equal to 360px
      if (width <= 360) {
        // Setting the position
        allToasts[i].style[classUsed] = offsetSize[classUsed] + "px";

        offsetSize[classUsed] += height + offset;
      } else {
        if (containsClass(allToasts[i], "toastify-left") === true) {
          // Setting the position
          allToasts[i].style[classUsed] = topLeftOffsetSize[classUsed] + "px";

          topLeftOffsetSize[classUsed] += height + offset;
        } else {
          // Setting the position
          allToasts[i].style[classUsed] = topRightOffsetSize[classUsed] + "px";

          topRightOffsetSize[classUsed] += height + offset;
        }
      }
    }

    // Supporting function chaining
    return this;
  };

  // Helper function to get offset.
  function getAxisOffsetAValue(axis, options) {

    if(options.offset[axis]) {
      if(isNaN(options.offset[axis])) {
        return options.offset[axis];
      }
      else {
        return options.offset[axis] + 'px';
      }
    }

    return '0px';

  }

  function containsClass(elem, yourClass) {
    if (!elem || typeof yourClass !== "string") {
      return false;
    } else if (
      elem.className &&
      elem.className
        .trim()
        .split(/\s+/gi)
        .indexOf(yourClass) > -1
    ) {
      return true;
    } else {
      return false;
    }
  }

  // Setting up the prototype for the init object
  Toastify.lib.init.prototype = Toastify.lib;

  // Returning the Toastify function to be assigned to the window object/module
  return Toastify;
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./resources/js/my_crud.js ***!
  \*********************************/
__webpack_require__(/*! ./my_crud/tools */ "./resources/js/my_crud/tools.js");

__webpack_require__(/*! ./my_crud/tambah */ "./resources/js/my_crud/tambah.js");

__webpack_require__(/*! ./my_crud/hapus */ "./resources/js/my_crud/hapus.js");

__webpack_require__(/*! ./my_crud/ubah */ "./resources/js/my_crud/ubah.js");
})();

/******/ })()
;