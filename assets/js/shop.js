$(function() {
   $('.headline_one, .headline_two').click(function() {
       if($(this).parent().hasClass('contentWrap')) {
           $(this).parent().removeClass('contentWrap');
           $(this).parent().addClass('expanded');
           $(this).find('span').html('&times;');
       }else{
           $(this).parent().removeClass('expanded');
           $(this).parent().addClass('contentWrap');
           $(this).find('span').html('&#8640');
       }
   }); 
});