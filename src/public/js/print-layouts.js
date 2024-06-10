
$(document).on('click', '.layout-setting-values button.increment', function () {
    var conteiner = $(this).closest('.layout-setting-values');
    var input = $(conteiner).find('.layout-setting-value');
    var value = parseInt($(input).attr('value'));

    if (value < 50) {
        value = value + 1;
    }
    $(input).attr('value', value);

    conteiner = $(conteiner).closest('.card-body');
    if (!hasValue(conteiner)) {
        $(conteiner).find('button.reset').attr('disabled', '');
        $(conteiner).find('button.save').attr('disabled', '');
    } else {
        $(conteiner).find('button.reset').removeAttr('disabled');
        $(conteiner).find('button.save').removeAttr('disabled');
    }

    layoutSettingRender(conteiner);
});

$(document).on('click', '.layout-setting-values button.decrement', function () {
    var conteiner = $(this).closest('.layout-setting-values');
    var input = $(conteiner).find('.layout-setting-value');
    var value = parseInt($(input).attr('value'));

    if (value > -50) {
        value = value - 1;
    }
    $(input).attr('value', value);

    conteiner = $(conteiner).closest('.card-body');
    if (!hasValue(conteiner)) {
        $(conteiner).find('button.reset').attr('disabled', '');
        $(conteiner).find('button.save').attr('disabled', '');
    } else {
        $(conteiner).find('button.reset').removeAttr('disabled');
        $(conteiner).find('button.save').removeAttr('disabled');
    }

    layoutSettingRender(conteiner);
});

$(document).on('click', '#accordionlayoutSetting button.reset', function () {
    var conteiner = $(this).closest('.card-body');
    layoutSettingReset(conteiner);
    $(conteiner).find('button.reset').attr('disabled', '');
    $(conteiner).find('button.save').attr('disabled', '');
});

$(document).on('click', '#accordionlayoutSetting button.save', function () {
    var conteiner = $(this).closest('.card-body');
    layoutSettingSave(conteiner);
});

$('#accordionlayoutSetting').on('shown.bs.collapse', function () {
    var conteiner = $(this).find('.show>.card-body');
    layoutSettingRender(conteiner)
});
/**
 *
 * @param conteiner
 */
function layoutSettingRender(conteiner) {

    var factor = 810 / 1800;

    var offsetX = Math.floor(parseInt($(conteiner).find('[data-layout-setting-values=offsetX]').find('.layout-setting-value').attr('value')) * factor);
    var offsetY = Math.floor(parseInt($(conteiner).find('[data-layout-setting-values=offsetY]').find('.layout-setting-value').attr('value')) * factor);

    var top = Math.floor(parseInt($(conteiner).find('[data-layout-setting-values=top]').find('.layout-setting-value').attr('value')) * factor);
    var bottom = Math.floor(parseInt($(conteiner).find('[data-layout-setting-values=bottom]').find('.layout-setting-value').attr('value')) * factor);
    var right = Math.floor(parseInt($(conteiner).find('[data-layout-setting-values=right]').find('.layout-setting-valuel').attr('value')) * factor);
    var left = Math.floor(parseInt($(conteiner).find('[data-layout-setting-values=left]').find('.layout-setting-value').attr('value')) * factor);

    var renderEl = $(conteiner).find('.pl-4x6 .image');
    $(renderEl).css('height', 540 - top - bottom);
    $(renderEl).css('width', 810 - right - left);

    $(renderEl).css('top', offsetY);
    $(renderEl).css('left', offsetX);
}

function layoutSettingReset(conteiner) {
    $(conteiner).find('.layout-setting-value').each(function( index ) {
        $(this).attr('value',  $(this).siblings('.layout-setting-value-default').attr('value'));
    });
}

/**
 * @param conteiner
 * @returns {boolean}
 */
function hasValue(conteiner) {

    var isValue = false;
    $(conteiner).find('.layout-setting-value').each(function(index) {
        if (
            parseInt($(this).attr('value')) !==
            parseInt($(this).siblings('.layout-setting-value-default').attr('value'))
        ) {
            isValue = true;
        }
    });
    return isValue;
}

function layoutSettingSave(conteiner) {
    var data = {
        id: parseInt($(conteiner).attr('data-layout-setting-id'))
    };
    $(conteiner).find('.layout-setting-value').each(function(index) {
        data[$(this).attr('name')] = parseInt($(this).attr('value'));
    });

    $.ajax({
        url: '/settings/layout-settings',
        type: 'POST',
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(){
            $(conteiner).find('.layout-setting-value').each(function(index) {
                $(this).siblings('.layout-setting-value-default').attr('value', $(this).attr('value'));
            });
            $(conteiner).find('button.reset').attr('disabled', '');
            $(conteiner).find('button.save').attr('disabled', '');
        }
    });

}



