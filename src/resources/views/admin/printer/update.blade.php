@extends('layouts.admin')

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <b class="h3">{{__('Редактирование принтера')}}</b>
                </div>
                <form action="{{ route('admin.printers.update.post', $printer->id) }}" method="post">
                    {{ csrf_field() }}
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label>{{__('Имя принтера в CUPS')}}</label>
                                    <input type="text" class="form-control {{ $errors->has('cups_name') ? 'is-invalid' : '' }}" name="cups_name" value="{{ $printer->cups_name }}">
                                    @error('cups_name') <div class="invalid-feedback"> {{ $message }} </div> @enderror
                                </div>
                                <div class="form-group">
                                    <label>{{__('Выполнять печать фото')}}</label>
                                    <input type="hidden" name="is_real_print" value="0">
                                    <input type="checkbox" class="{{ $errors->has('is_real_print') ? 'is-invalid' : '' }}" name="is_real_print" value="1" {{old('is_real_print', $printer->is_real_print) ? 'checked' : ''}} >
                                    @error('is_real_print') <div class="invalid-feedback"> {{ $message }} </div> @enderror
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <button type="submit" class="btn btn-primary btn-flat float-right">
                                    {{ __('Сохранить') }}
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
@stop
