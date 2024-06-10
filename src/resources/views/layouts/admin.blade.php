<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Settings</title>

    <link rel="stylesheet" href="/css/bootstrap.min.css" type="text/css" />
</head>
<body>


<nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Kiosk Settings</a>
    <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
            <a class="nav-link" href="/">Home</a>
        </li>
    </ul>
</nav>

<div class="container">
    <div class="row">
        <nav id="sidebarMenu" class="col-md-4 col-lg-3 d-md-block bg-light sidebar collapse">
            <div class="sidebar-sticky pt-3">
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link active" href="{{route('admin')}}">
                            {{__('Главная')}}
                        </a>
                        <a class="nav-link" href="{{route('admin.printers')}}">
                            {{__('Настройка принтеров')}}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-9 px-md-4">
            @yield('content')
        </main>

    </div>
</div>


<script src="/js/jquery-3.5.1.min.js"></script>
<script src="/js/bootstrap.bundle.js"></script>
</body>
</html>
