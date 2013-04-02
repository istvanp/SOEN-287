jQuery(function() {
    var slide        = null,
        data         = null,
        doEval       = true,
        doTest       = false,
        inProgress   = false,
        previousCode = '',
        scriptURL    = '',
        isLocal      = /^http:\/\/localhost/.test(window.location.href),
        REMOTE       = "http://users.encs.concordia.ca/~i_puszta/",
        PHP_EVAL     = "eval.php",
        XML_EVAL     = "validate.php",
        $content     = $('#slide-outer'),
        $title       = $('#slide-inner h1'),
        $desc        = $('#slide-inner div'),
        $output      = $('#output');


    // Set code editor options
    var editors = [ace.edit("editor1"), ace.edit("editor2")];

    for (var i = editors.length - 1; i >= 0; i--)
    {
        editors[i].setTheme("ace/theme/tomorrow");
        editors[i].getSession().setUseWrapMode(true);
        editors[i].getSession().setTabSize(4);
        editors[i].getSession().on('change', function(i) {
            var e = document.getElementById('editor' + (i + 1)),
                height = editors[i].getSession().getScreenLength();
            e.style.height = Math.round(19.2 * height) + 'px';
            editors[i].resize();
        }.bind(this, i));
    }

    $.ajax({
        url: 'data.yml',
        dataType: 'text',
        success: function(_data) {
            data = jsyaml.load(_data);
            $(window).trigger('hashchange');
        }
    });

    var evaluate = function(testOutput) {

        if (doEval === false || inProgress)
        {
            return;
        }

        var code1 = editors[0].getValue(),
            code2 = editors[1].getValue(),
            code  = code1 + code2;

        if ( ! code || code.trim().length === 0 || previousCode === code) {
            return;
        }

        inProgress = true;
        $("#ajax").show();

        $.ajax({
            url: scriptURL,
            data: { code: code1, code2: code2 },
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


        // Jump to first slide
        if (isNaN(slide) || slide < 1) {
            window.location.hash = '1';
            return;
        }

        // Jump to last slide
        if (slide > data.length) {
            window.location.hash = data.length;
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
                xml = data[slide - 1].xml,
                xsd = data[slide - 1].xsd,
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
                           .replace(/\n\n/g, "<br>")
                           .replace(/```([^`]*)```/g, function(match, p1) {
                               return '<pre class="prettyprint">' +
                                      p1.replace(/<br>/g, "\n\n")
                                        .replace(/</g, '&lt;')
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

            scriptURL = (isLocal) ? '' : REMOTE;

            if (xml) {
                scriptURL += XML_EVAL;


                if (xsd) {
                    editors[0].getSession().setMode("ace/mode/xml");
                    editors[0].getSession().setTabSize(2);
                    editors[0].setValue(xsd);
                    editors[0].gotoLine(1);
                    $("#editor1").removeClass('php').addClass('xsd').show();
                } else {
                    $("#editor1").hide();
                }

                editors[1].getSession().setMode("ace/mode/xml");
                editors[1].getSession().setTabSize(2);
                editors[1].setValue(xml);
                editors[1].gotoLine(1);
                $("#editor2").removeClass('php').addClass('xml').show();

                $output.show();
            }
            else if (php) {
                scriptURL += PHP_EVAL;
                editors[0].getSession().setMode("ace/mode/php");
                editors[0].getSession().setTabSize(4);
                editors[0].setValue(php);
                editors[0].gotoLine(1);
                $("#editor1").removeClass('xsd').addClass('php').show();
                $("#editor2").hide();
                $output.show();
            }
            else
            {
                $("#editor1, #editor2").hide();
                $output.hide();
            }

            if (pre === true) {
                $output.addClass('pre');
            } else {
                $output.removeClass('pre');
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