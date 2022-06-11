 <div class="modal tampilModal animate__animated animate__bounceInDown">
     <div class="modal-dialog">
         <div class="modal-content">
             <div class="modal-header">
                 <h5 class="modal-title" id="judul_form"></h5>
                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                 </button>
             </div>
             <form id="formKu" class="tooltip-end-top">
                 @csrf
                 <input type="hidden" name="id" id="id">
                 <div class="modal-body">
                     <div class="row">
                         <div class="col-12">
                             <div class="mb-3">
                                 <label for="nm_polygon">Nama Polygon</label>
                                 <input type="text" class="form-control inputReset" name="nm_polygon" id="nm_polygon"
                                     required />
                             </div>
                         </div>
                         <div class="col-3">
                             <div class="mb-3">
                                 <label for="warna">Warna</label>
                                 <input type="color" class="form-control inputReset" name="warna" id="warna"
                                     value="#ff0000" required />
                             </div>
                         </div>
                         <div class="col-9">
                             <div class="mb-3">
                                 <label for="luas">Luas</label>
                                 <input type="text" class="form-control inputReset" name="luas" id="luas" required />
                             </div>
                         </div>
                         <div class="col-12" class="mb-3">
                             <div class="d-flex justify-content-between">
                                 <label>Koordinat</label>
                                 <div class="d-flex">
                                     <i data-feather="plus-circle" id="add-koordinat" class="mr-2"></i>
                                     <i data-feather="minus-circle" id="remove-koordinat"></i>
                                 </div>
                             </div>
                             <div class="row" id="list-koordinat">

                             </div>
                         </div>
                     </div>
                 </div>
                 <div class="modal-footer">
                     <button type="button" class="btn btn-secondary" data-dismiss="modal">Tutup</button>
                     <button type="submit" class="btn btn-primary" id="tombolForm"></button>
                 </div>
             </form>

         </div>
     </div>
 </div>
