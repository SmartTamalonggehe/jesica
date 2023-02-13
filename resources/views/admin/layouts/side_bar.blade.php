<div class="sidebar sidebar-dark sidebar-main sidebar-expand-lg">

    <!-- Sidebar content -->
    <div class="sidebar-content">

        <!-- User menu -->
        <div class="sidebar-section sidebar-user my-1">
            <div class="sidebar-section-body">
                <div class="media">
                    <a href="#" class="mr-3">
                        <img src="{{ asset('global_assets/images/placeholders/placeholder.jpg') }}" class="rounded-circle"
                            alt="">
                    </a>

                    <div class="media-body">
                        <div class="font-weight-semibold">Jesica</div>
                        <div class="font-size-sm line-height-sm opacity-50">
                            Universitas Ottow Geissler
                        </div>
                    </div>

                    <div class="ml-3 align-self-center">
                        <button type="button"
                            class="btn btn-outline-light-100 text-white border-transparent btn-icon rounded-pill btn-sm sidebar-control sidebar-main-resize d-none d-lg-inline-flex">
                            <i class="icon-transmission"></i>
                        </button>

                        <button type="button"
                            class="btn btn-outline-light-100 text-white border-transparent btn-icon rounded-pill btn-sm sidebar-mobile-main-toggle d-lg-none">
                            <i class="icon-cross2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- /user menu -->

        <!-- Main navigation -->
        <div class="sidebar-section">
            <ul class="nav nav-sidebar" data-nav-type="accordion">

                <!-- Main -->
                <li class="nav-item-header">
                    <div class="text-uppercase font-size-xs line-height-xs">Main</div> <i class="icon-menu"
                        title="Main"></i>
                </li>
                <li class="nav-item">
                    <a href="{{ route('admin.dashboard') }}" class="nav-link">
                        <i class="icon-home4"></i>
                        <span>Dashboard</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="{{ route('admin.kawasan') }}" class="nav-link"><i class="icon-width"></i>
                        <span>Peta Penyebaran Hutan</span>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="{{ route('admin.tutupan') }}" class="nav-link"><i class="icon-width"></i>
                        <span>Tutupan</span>
                    </a>
                </li>

                <li class="nav-item nav-item-submenu">
                    <a href="#" data-link="" class="nav-link"><i class="icon-width"></i>
                        <span>Kawasan Tutupan</span>
                    </a>
                    <ul class="nav nav-group-sub" data-submenu-title="Form layouts">
                        <li class="nav-item">
                            <a href="{{ route('admin.kawasan-tutupan', ['nm_kawasan' => 'Hutan Produksi Yang Dapat Dikonversi']) }}"
                                class="nav-link">
                                <span>Hutan Produksi Yang Dapat Dikonversi</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="{{ route('admin.kawasan-tutupan', ['nm_kawasan' => 'Kawasan Suaka/Pelestarian Alam']) }}"
                                class="nav-link">
                                <span>Kawasan Suaka/Pelestarian Alam</span>
                            </a>
                        </li>

                    </ul>

                </li>
                {{-- <li class="nav-item">
                    <a href="{{ route('admin.polygon') }}" class="nav-link"><i class="icon-width"></i>
                        <span>Polygon</span>
                    </a>
                </li> --}}
            </ul>
        </div>
        <!-- /main navigation -->

    </div>
    <!-- /sidebar content -->

</div>
