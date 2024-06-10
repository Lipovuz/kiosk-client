@extends('layouts.admin')

@section('content')
    <form method="post" action="{{route('admin.sendRequest')}}">
        {{ csrf_field() }}
        <div class="row">
            <div class="col-md-12">
                @env('local', 'staging')
                    @if ($errors->any())
                        <div class="alert alert-danger">
                            <ul>
                                @foreach ($errors->all() as $error)
                                    <li>{{ $error }}</li>
                                @endforeach
                            </ul>
                        </div>
                    @endif
                @endenv
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">{{__('Запрос на подключение')}}</h3>
                    </div>
                    <div class="card-body">

                        <div class="form-group">
                            <label>{{__('Идентификатор')}}</label>
                            <input
                                    type="text"
                                    class="form-control {{ $errors->has('identity') ? 'is-invalid' : '' }}"
                                    name="identity"
                                    value="{{ old('identity') }}"
                            >
                            @error('identity') <div class="invalid-feedback"> {{ $message }} </div> @enderror
                        </div>

                        <hr>

                        <div class="form-group">
                            <label>{{__('Наименование')}}</label>
                            <input
                                    type="text"
                                    class="form-control {{ $errors->has('name') ? 'is-invalid' : '' }}"
                                    name="name"
                                    value="{{ old('name') }}"
                            >
                            @error('name') <div class="invalid-feedback"> {{ $message }} </div> @enderror
                        </div>

                        <div class="form-group">
                            <label>{{__('Тип киоска')}}</label>
                            <select class="form-control {{ $errors->has('location_type_id') ? 'is-invalid' : '' }}" name="location_type_id">
                                <option value=""> -- -- -- -- </option>
                                @foreach ($locationTypes as $value => $title)
                                    <option value="{{$value}}">
                                        {{$title}}
                                    </option>
                                @endforeach
                            </select>
                            @error('location_type_id') <div class="invalid-feedback"> {{ $message }} </div> @enderror
                        </div>

                        <div class="form-group">
                            <label>{{__('Местоположение')}}</label>
                            <textarea
                                    class="form-control {{ $errors->has('location_description') ? 'is-invalid' : '' }}"
                                    name="location_description">{{ old('location_description') }}</textarea>
                            @error('location_description') <div class="invalid-feedback"> {{ $message }} </div> @enderror
                        </div>
                    </div>
                    <div class="card-footer">
                        <div class="row">
                            <div class="col-md-12">
                                <button type="submit" class="btn btn-sm btn-primary border-right">
                                    {{ __('Добавить') }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
@endsection
