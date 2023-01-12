 <!-- /page content -->
 <script src="{{ mix('my_code/js/app.js') }}"></script>
 <!-- Core JS files -->
 <script src="{{ asset('global_assets/js/main/bootstrap.bundle.min.js') }}"></script>
 <!-- /core JS files -->
 <script src="{{ asset('layout_4/js/app.js') }}"></script>
 <!-- /theme JS files -->
 <script src="{{ mix('my_code/js/components.js') }}" defer></script>
 {{-- user --}}
 <script src="{{ mix('user/js/user.js') }}"></script>
 @yield('scripts')
