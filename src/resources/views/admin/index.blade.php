@extends('layouts.admin')

@section('content')

        <div class="row">
            <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <b class="h3">{{__('Данные киоска')}}</b>
                            <a href="{{route('admin.synchronize', [app()->getLocale()])}}" class="btn btn-sm btn-success float-right ml-3">
                                {{ __('Синхронизировать киоск') }}
                            </a>
                        </div>
                        @if($kiosk->synchronized_at)
                            <div class="card-body">
                                <b>{{__('Наименование')}} :</b> {{$kiosk->name}} <br>
                                <b>{{__('Идентификатор')}} :</b> {{$kiosk->identity}} <br>
                                <b>{{__('Местоположение')}} :</b> {{$kiosk->location_description}} <br>
                                <b>{{__('Время последней синхронизации')}} :</b> {{$kiosk->synchronized_at}} <br>
                            </div>
                        @else
                            <div class="card-body">
                                <h4>{{__('Запрос на инициализацию киоска отправлен')}}</h4>
                                <b>{{__('Наименование')}} :</b> {{$kiosk->name}} <br>
                                <b>{{__('Идентификатор')}} :</b> {{$kiosk->identity}} <br>
                                <b>{{__('Местоположение')}} :</b> {{$kiosk->location_description}} <br>
                            </div>
                        @endif

                        <div class="card-footer">

                        </div>
                    </div>
            </div>
        </div>
@endsection
