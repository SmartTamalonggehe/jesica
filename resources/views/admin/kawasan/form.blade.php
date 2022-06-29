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
                 <input type="hidden" class="inputReset" name="id" id="id_form">
                 <input type="hidden" name="jenis" id="jenis" value="polygon">
                 <div class="modal-body">
                     <div class="row">
                         <div class="col-12">
                             <div class="mb-3">
                                 <label for="nm_kawasan">Nama Kawasan</label>
                                 <input type="text" class="form-control inputReset" name="nm_kawasan" id="nm_kawasan"
                                     required />
                             </div>
                         </div>
                         <div class="col-3">
                             <div class="mb-3">
                                 <label for="kd_kawasan">Kode Kawasan</label>
                                 <input type="text" class="form-control inputReset" name="kd_kawasan" id="kd_kawasan"
                                     required />
                             </div>
                         </div>
                         <div class="col-3">
                             <div class="mb-3">
                                 <label for="warna">Warna</label>
                                 <input type="color" class="form-control inputReset" name="warna" id="warna"
                                     value="#00bbfa" required />
                             </div>
                         </div>
                         <div class="col-6">
                             <div class="mb-3">
                                 <label for="luas">Luas</label>
                                 <input type="text" class="form-control inputReset" name="luas" id="luas"
                                     required />
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
