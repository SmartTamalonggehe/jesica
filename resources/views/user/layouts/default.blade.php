<!DOCTYPE html>
<html lang="en">

@include('user.layouts.head')

<body>

    <!-- Main navbar -->
    @include('user.layouts.top_bar')
    <!-- /main navbar -->


    <!-- Secondary navbar -->
    @include('user.layouts.navbar')
    <!-- /secondary navbar -->


    <!-- Page header -->
    <div class="page-header">
        <div class="page-header-content header-elements-lg-inline">
            <div class="page-title d-flex">
                <h4> <span class="font-weight-semibold">@yield('judul')</span></h4>
                <a href="" class="header-elements-toggle text-body d-lg-none"><i class="icon-more"></i></a>
            </div>
        </div>
    </div>
    <!-- /page header -->


    <!-- Page content -->
    <div class="page-content pt-0">

        <!-- Main content -->
        <div class="content-wrapper">

            <!-- Content area -->
            <div class="content">
                <!-- Dashboard content -->
                <div class="row">
                    <div class="col-12">
                        {{-- content --}}
                        @yield('content')
                    </div>
                </div>
                <!-- /dashboard content -->

            </div>
            <!-- /content area -->

        </div>
        <!-- /main content -->

    </div>
    <!-- /page content -->
    <!-- Footer -->
    @include('admin.layouts.footer')
    <!-- /footer -->

    <script>
        let route = document.getElementById('route');
        if (route) {
            route = route.textContent
        }
    </script>

    @include('user.layouts.scripts')
</body>

</html>
