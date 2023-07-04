$ (document).ready(function(){
    $('img').click(function(){
        let src = $(this).attr('src');
        let altsrc = $(this).attr('data-alt-src');
        $(this).attr('src', altsrc);
        $(this).attr('data-alt-src', src);
    });
});