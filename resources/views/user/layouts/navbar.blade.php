<div class="navbar navbar-expand navbar-light sticky-top px-0 px-lg-3">
    <div class="flex-1" id="menu-navbar">
        <ul class="navbar-nav flex-row text-nowrap">
            <li class="nav-item">
                <a href="{{ route('user.dashboard') }}" class="navbar-nav-link">
                    <i class="icon-home4 mr-2"></i>
                    Dashboard
                </a>
            </li>

            <li class="nav-item position-relative">
                <div class="navbar-nav-link" id="menu-kawasan">
                    <i class="icon-indent-decrease2 mr-2"></i> Peta Kawasan
                </div>
                <div class="my-menu" style="top: 55px; position: absolute; display: none">
                    <div class="card" style="width: 500px">
                        <div class="card-body overflow-auto">
                            <div class="row" id='kawasan'>

                            </div>
                        </div>
                    </div>
                </div>
                {{-- <ul>
                    <li>
                        <a href="{{ route('user.kawasan') }}" class="navbar-nav-link">
                            <i class="icon-indent-decrease2 mr-2"></i>
                            Keseluruhan
                        </a>
                    </li>
                </ul> --}}
            </li>

            <li class="nav-item">
                <a href="{{ route('user.kawasan-tutupan') }}" class="navbar-nav-link">
                    <i class="icon-paragraph-justify3 mr-2"></i>
                    Kawasan Tutupan
                </a>
            </li>

        </ul>
    </div>
</div>
