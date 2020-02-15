

$(function() {
    $('.img_text_box').hover(
        function() {
        $(this).find('.hover').addClass('hover_active');   
        },
        function() {
        $(this).find('.hover').removeClass('hover_active');
        }
    );
});
