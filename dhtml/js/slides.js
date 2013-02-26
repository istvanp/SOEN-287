jQuery(function() {
    var slide    = null, data = null, isLocal = /^http:\/\/localhost/.test(window.location.href);
        $content = $('#slide-outer');
        $title   = $('#slide-inner h1'),
        $desc    = $('#slide-inner div');
        $iframe  = $('iframe');
        
    if (isLocal) {
        $.ajax({
            url: 'data.yml',
            dataType: 'text',
            success: function(_data) {
                data = jsyaml.load(_data);
                $(window).trigger('hashchange');
            }
        });   
    } else {
        $.ajax({
            url: 'http://istvanp.github.com/tutorials/dhtml/data.json',
            dataType: 'jsonp',
            jsonpCallback: 'callback',
            success: function(_data) {
                data = _data;
                $(window).trigger('hashchange');
            }
        });
    }

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
                jsbin = data[slide - 1].jsbin,
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
                           })
            }

            $title.html(title);
            $desc.html(desc || '');
            if (jsbin) {
                src = 'http://jsbin.com/' + jsbin + '/';
                src += isLocal ? 'edit' : 'embed';
                src += '?html,javascript,live';
                $iframe.show();
                $content.get(0).style.height = null;
            } else {
                src = 'about:blank';
                $iframe.hide();
                $content.css('height', 'auto');
            }
            $iframe.attr('src', src);
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
});