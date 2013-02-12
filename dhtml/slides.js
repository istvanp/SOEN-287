jQuery(function() {
    var slide   = null, data = null;
        $title  = $('#slide-inner h1'),
        $desc   = $('#slide-inner div');
        $iframe = $('iframe');

    $.get('data.yml', function(_data) {
        data = jsyaml.load(_data);
        $(window).trigger('hashchange');
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
                jsbin = data[slide - 1].jsbin;

            title = slide + ". " + title;
            if (desc) {
                desc = desc.replace(/\`(.*)\`/g, '<code class="prettyprint">$1</code>');
            }

            $title.html(title);
            $desc.html(desc);
            $iframe.attr('src', 'http://jsbin.com/' + jsbin + '/edit');
            prettyPrint();
        }
        if ( ! data[slide])
        {
            $('#next').prop('disabled', true);
        }
    });
});