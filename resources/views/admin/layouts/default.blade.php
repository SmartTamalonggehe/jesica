<!DOCTYPE html>
<html lang="en">

@include('admin.layouts.head')

<body>

    <!-- Main navbar -->
    @include('admin.layouts.top_bar')
    <!-- /main navbar -->


    <!-- Page content -->
    <div class="page-content">

        <!-- Main sidebar -->
        @include('admin.layouts.side_bar')
        <!-- /main sidebar -->


        <!-- Main content -->
        <div class="content-wrapper">

            <!-- Inner content -->
            <div class="content-inner">

                <!-- Page header -->
                <div class="page-header page-header-light">
                    <div class="page-header-content header-elements-lg-inline">
                        <div class="page-title d-flex">
                            <h4><span class="font-weight-semibold text-uppercase"></h4></span>
                            <a href="#" class="header-elements-toggle text-body d-lg-none"><i
                                    class="icon-more"></i></a>
                        </div>

                        <div class="header-elements d-none">
                            @yield('btn-top-right')
                        </div>
                    </div>
                </div>
                <!-- /page header -->


                <!-- Content area -->
                <div class="content">

                    <!-- Basic datatable -->
                    @yield('content')
                    <!-- /basic datatable -->

                </div>
                <!-- /content area -->


                <!-- Footer -->
                @include('admin.layouts.footer')
                <!-- /footer -->

            </div>
            <!-- /inner content -->

        </div>
        <!-- /main content -->

    </div>

    <script>
        let route = document.getElementById('route');
        if (route) {
            route = route.textContent
        }
        const role = 'admin';
    </script>

    @include('admin.layouts.scripts')
</body>

</html>
