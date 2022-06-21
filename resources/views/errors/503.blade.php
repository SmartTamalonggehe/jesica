<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Halaman Error</title>

    <!-- Global stylesheets -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet" type="text/css">
    <link href="{{ asset('global_assets/css/icons/icomoon/styles.min.css') }}" rel="stylesheet" type="text/css">
    <link href="{{ asset('layout_1/css/all.min.css') }}" rel="stylesheet" type="text/css">
    <!-- /theme JS files -->

</head>

<body>

    <!-- Page content -->
    <div class="page-content">

        <!-- Main content -->
        <div class="content-wrapper">

            <!-- Inner content -->
            <div class="content-inner">

                <!-- Content area -->
                <div class="content d-flex justify-content-center align-items-center">

                    <!-- Container -->
                    <div class="flex-fill">

                        <!-- Error title -->
                        <div class="text-center mb-4">
                            <img src="{{ asset('global_assets/images/error_bg.svg') }}" class="img-fluid mb-3"
                                height="230" alt="">
                            <h1 class="display-2 font-weight-semibold line-height-1 mb-2">503</h1>
                            <h6 class="w-md-25 mx-md-auto">Sabar ya...<br>
                                Website sedang dalam perbaikan atau pengembangan.</h6>
                        </div>
                        <!-- /error title -->

                    </div>
                    <!-- /container -->

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
    <!-- /page content -->

</body>

</html>
