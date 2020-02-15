$(function() {
      $('.tab').click(function() {
        if($(this).parent().hasClass('list')) {
          $(this).parent().removeClass('list');
          $(this).parent().addClass('expanded');
          $(this).find('i').removeClass('fa-caret-down');
          $(this).find('i').addClass('fa-caret-up');
      }else{
        $(this).parent().removeClass('expanded');
        $(this).parent().addClass('list');
        $(this).find('i').removeClass('fa-caret-up');
        $(this).find('i').addClass('fa-caret-down');
      }           
    });
});