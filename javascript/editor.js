jQuery(function() {
    var slide = null, editor = ace.edit("editor"),
        titleRE = /@title ?(.*)\n/,
        descRE  = /@desc ?(.*)\n/;
    editor.setTheme("ace/theme/tomorrow_night");
    editor.getSession().setMode("ace/mode/javascript");
    editor.getSession().setUseWrapMode(true);

    if (sessionStorage['code']) {
        editor.setValue(sessionStorage['code']);
        editor.gotoLine(1);
    }

    var update = function(e) {
        var code    = editor.getValue();
            title   = code.match(titleRE),
            desc    = code.match(descRE),
            $title  = $('#title'),
            $desc   = $('#description');

        if (title) {
            $title.html(title[1]);
        } else {
            $title.html('');
        }

        if (desc) {
            $desc.html(desc[1]);
        } else {
            $desc.html('');
        }

        if (slide) {
            sessionStorage[slide] = code;
        }
    };
    editor.getSession().on('change', update);

    $('#run').on('click', function() {
        var code = editor.getValue();
        code = code.replace(/document\.write/g, 'print');
        code = code.replace(/document\.writeln/g, 'println');
        try {
            (new Function(code)).call();
        } catch(e) {
            error(e);
        }
    });

    $('#clear').on('click', function() {
        $('#output ol').empty();
    });

    $('#next').on('click', function() {
        window.location.hash = ++slide;
    });

    $('#prev').on('click', function() {
        window.location.hash = --slide;
    });

    $(window).hashchange(function() {
        var hash = location.hash;
        var slideResult = hash.match(/#(\d+)/);
        if ( ! slideResult) {
            window.location.hash = '0';
            return;
        };
        slide = slideResult[1];
        if (slide < 0) {
            window.location.hash = '0';
            return;
        }
        if (slide == 0) {
            editor.setValue('');
            editor.gotoLine(1);
            $('#prev').prop('disabled', true);
            $('#next').prop('disabled', false);
            $('#clear').trigger('click');
            return;
        }

        if (sessionStorage[slide])
        {
            editor.setValue(sessionStorage[slide]);
            editor.gotoLine(1);
            return;
        }

        $.ajax({
            url: 'slides/' + slide + '.js',
            success: function(code) {
                sessionStorage[slide] = code;
                editor.setValue(code);
                editor.gotoLine(1);
                $('#prev').prop('disabled', false);
                $('#next').prop('disabled', false);
                $('#clear').trigger('click');
            },
            error: function(e) {
                window.location.hash = --slide;
                $('#next').prop('disabled', true);
            },
            dataType: 'text'
        });
    });
    $(window).hashchange();
});

function print(str) {
    if (typeof str == 'undefined') {
        str = '';
    }
    if ($('#output li').length === 0)
    {
       println(str);
    } else {
        $('#output li').last().append(str);
    }
}

function println(str) {
    if (typeof str == 'undefined') {
        str = '';
    }
    $('#output ol').append('<li>' + str + '</li>');
}

function error(str) {
    $('#output ol').append('<li style="color: red">' + str + '</li>');
}