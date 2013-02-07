jQuery(function() {
    var slide = null, save = false,
        $autorun = $('#autorun'),
        editor = ace.edit("editor"),
        titleRE = /@title ?(.*)\n/,
        descRE  = /@desc ?(.*)\n/;

    // Set code editor options
    editor.setTheme("ace/theme/solarized_light");
    editor.getSession().setMode("ace/mode/javascript");
    editor.getSession().setUseWrapMode(true);

    // Slide changed event
    $(window).hashchange(function() {
        var hash = location.hash;
        var slideResult = hash.match(/#(\d+)/);

        if ( ! slideResult) {
            window.location.hash = '0';
            return;
        }

        slide = parseInt(slideResult[1], 10);

        // Jump to slide 0
        if (isNaN(slide) || slide < 0) {
            window.location.hash = '0';
            return;
        }

        if (slide === 0) {
            editor.setValue('');
            editor.gotoLine(1);
            $('#prev').prop('disabled', true);
            $('#next').prop('disabled', false);
            clear();
            return;
        }

        if (slide > 0) {
            $('#prev').prop('disabled', false);
        }

        if (save && sessionStorage[slide])
        {
            editor.setValue(sessionStorage[slide]);
            editor.gotoLine(1);
            return;
        }

        $.ajax({
            url: 'slides/' + slide + '.js',
            success: function(code) {
                clear();
                sessionStorage[slide] = code;
                editor.setValue(code);
                editor.gotoLine(1);
                $('#next').prop('disabled', false);
            },
            error: function(e) {
                window.location.hash = --slide;
                $('#next').prop('disabled', true);
            },
            dataType: 'text'
        });
    });

    var runCode = function() {
        var code = editor.getValue();
        code = code.replace(/document\.write/g, 'print');
        code = code.replace(/document\.writeln/g, 'println');
        clear();
        try {
            (new Function(code)).call();
        } catch(e) {
            error(e);
        }
    };

    var clear = function() {
        $('#output ol').empty();
    };

    var next = function() {
        window.location.hash = ++slide;
    };

    var prev = function() {
        window.location.hash = --slide;
    };

    // Code modified event
    editor.getSession().on('change', function(e) {
        var code    = editor.getValue();
            title   = code.match(titleRE),
            desc    = code.match(descRE),
            $title  = $('#title'),
            $desc   = $('#description');

        if (title) {
            $title.html(slide + '. ' + title[1]);
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

        $autorun.trigger('change');
    });

    // Auto-run state changed
    $autorun.on('change', function() {
        var checked = $(this).prop('checked');
        sessionStorage['autorun'] = 0 + checked;

        if (checked) {
            runCode();
        }
    });

    // Attach Events
    $('#run').on('click', runCode);
    $('#clear').on('click', clear);
    $('#next').on('click', next);
    $('#prev').on('click', prev);

    // Init auto-run status
    if (sessionStorage['autorun'] == 1) {
        $autorun.prop('checked', true);
    } else if (sessionStorage['autorun'] == 0) {
        $autorun.prop('checked', false);
    } else {
        $autorun.prop('checked', true);
    }

    // Init the slide
    $(window).hashchange();
});

// Define replacement for document.write()
function print(str) {
    if (arguments.length == 0) {
        str = '';
    }
    if ($('#output li').length === 0)
    {
       println(str);
    } else {
        $('#output li').last().children('span').append(str);
    }
}

// Define replacement for document.writeln()
function println(str) {
    if (arguments.length == 0) {
        str = '';
    }
    $('#output ol').append('<li><span>' + str + '</span></li>');
}

// Output an error
function error(str) {
    $('#output ol').append('<li><span style="color: red">' + str + '</span></li>');
}
