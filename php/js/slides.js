jQuery(function() {
    var slide    = null, data = null, doEval = true, doTest = false,
        isLocal = /^http:\/\/localhost/.test(window.location.href),
        previousCode = '', inProgress = false,
        $content = $('#slide-outer'),
        $title   = $('#slide-inner h1'),
        $desc    = $('#slide-inner div'),
        $editor  = $('#editor');
        $output  = $('#output');


    // Set code editor options
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/tomorrow");
    editor.getSession().setMode("ace/mode/php");
    editor.getSession().setUseWrapMode(true);
    editor.getSession().on('change', function(e) {
        var height = editor.getSession().getScreenLength();
        $editor.height(20 * height + 'px');
        editor.resize();
    });

    $.ajax({
        url: 'data.yml',
        dataType: 'text',
        success: function(_data) {
            data = jsyaml.load(_data);
            $(window).trigger('hashchange');
        }
    });

    var evaluate = function(testOutput) {
        if (doEval === false || inProgress) {
            return;
        }

        var code = editor.getValue();

        if (previousCode === code) {
            return;
        }

        inProgress = true;
        $("#ajax" ).show();

        $.ajax({
            url: (isLocal) ? 'eval.php' : 'http://users.encs.concordia.ca/~i_puszta/eval.php',
            data: { code: code },
            dataType: 'jsonp',
            jsonpCallback: 'callback',
            success: function(_data) {
                if (_data === "") {
                    _data = '<h3 style="text-align:center"><em>No output</em></h3>';
                }
                
                $output.html(_data);
                previousCode = code;
                
                if (testOutput &&
                    testOutput.toString().rtrim() != _data.toString().rtrim()) {
                    alert('Must update output in YAML');
                    console.log(testOutput.rtrim());
                    console.log(_data.rtrim());
                }
            },
            error: function(xhr, status, err) {
                if (status != 'parsererror') {
                    return;
                }
                previousCode = code;
                $output.html(xhr.responseText);
            },
            complete: function() {
                inProgress = false;
                $("#ajax" ).hide();
            }
        });
    };

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
            window.location.hash = '1';
            return;
        }

        slide = parseInt(slideResult[1], 10);

        // Jump to slide 1
        if (isNaN(slide) || slide < 1) {
            window.location.hash = '1';
            return;
        }

        if (slide === 1) {
            $('#prev').prop('disabled', true);
            $('#next').prop('disabled', false);
        }

        if (slide > 1) {
            $('#prev').prop('disabled', false);
        }

        if (data[slide - 1]) {
            var title = data[slide - 1].title,
                desc = data[slide - 1].desc,
                php = data[slide - 1].php,
                pre = data[slide - 1].pre,
                output = data[slide - 1].output || '<em>No output available for this slide</em>',
                src,
                re = /`([^`]*)`/g,
                replacement = '<code class="prettyprint">$1</code>';


            title = title.replace(/&/g,'&amp;')
                         .replace(/</g,'&lt;')
                         .replace(/>/g,'&gt;')
                         .replace(re, replacement);
            title = slide + ". " + (title || 'No title');
            if (desc) {
                desc = desc.replace(/& /g,'&amp; ')
                           .replace(/\n[\t ]*\n/g, "<br>")
                           .replace(/```([^`]*)```/g, function(match, p1) {
                               return '<pre class="prettyprint">' +
                                      p1.replace(/</g, '&lt;')
                                        .replace(/>/g, '&gt;') +
                                      '</pre>';
                           })
                           .replace(re, function(match, p1) {
                               return '<code class="prettyprint">' +
                                      p1.replace(/</g, '&lt;')
                                        .replace(/>/g, '&gt;') +
                                      '</code>';
                           });
            }
            
            $title.html(title);
            $desc.html(desc || '');

            editor.setValue(php);
            editor.gotoLine(1);
            
            if (pre === false) {
                $output.removeClass('pre');                
            } else {
                $output.addClass('pre');
            }

            if (doTest) {
                evaluate(data[slide - 1].output);
            } else {
                evaluate();
            }

            $output.html(output);
            prettyPrint();
        }
        if ( ! data[slide])
        {
            $('#next').prop('disabled', true);
        }
        else {
            $('#next').prop('disabled', false);
        }
    });

    window.setInterval(evaluate, 500);
});

String.prototype.rtrim = function(){
    return this.replace(/\s+$/gm,'');
};