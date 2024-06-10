@extends('layouts.admin')

@section('content')

    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <b class="h3">{{__('Принтера')}}</b>
                </div>
                <div class="card-body">
                    <table class="table table-bordered">
                        <tr>
                            <th>ID</th>
                            <th>{{__('Имя принтера в CUPS')}}</th>
                            <th>{{__('Выполнять печать фото')}}</th>
                            <th> </th>
                        </tr>
                        @foreach ($printers as $printer)
                            <tr>
                                <td>{{ $printer->id }}</td>
                                <td>{{ $printer->cups_name }}</td>
                                <td>{{(int) $printer->is_real_print }}</td>
                                <th>
                                    <a href="{{route('admin.printers.update.get', [$printer->id])}}" class="btn btn-sm btn-success col-md-12">
                                        {{ __('Редактировать') }}
                                    </a>
                                </th>
                            </tr>
                        @endforeach
                    </table>
                </div>
            </div>
        </div>
    </div>
@endsection
