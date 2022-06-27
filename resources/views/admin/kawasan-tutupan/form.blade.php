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
                 <input type="hidden" name="id" class="inputReset" id="id_form">
                 <div class="modal-body">
                     <div class="row">
                         <div class="col-12">
                             <div class="mb-3">
                                 <label for="kawasan-id">Kawasan</label>
                                 <select name="kawasan_id" id="kawasan-id" class="select2_basic">
                                 </select>
                             </div>
                         </div>
                         <div class="col-12">
                             <div class="mb-3">
                                 <label for="tutupan-id">Tutupan</label>
                                 <select name="tutupan_id" id="tutupan-id" class="select2_basic">

                                 </select>
                             </div>
                         </div>
                         <div class="col-12 col-md-6">
                             <div class="mb-3">
                                 <label for="luas">Luas</label>
                                 <input type="text" class="form-control inputReset" name="luas" id="luas"
                                     required />
                             </div>
                         </div>
                         <div class="col-12 col-md-6">
                             <div class="mb-3">
                                 <label for="presentase">Presentase</label>
                                 <input type="text" class="form-control inputReset" name="presentase" id="presentase"
                                     required />
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
