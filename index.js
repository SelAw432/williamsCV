$(document).ready(function(){
    $('#menu-bar').click(function(){
        $(this).toggleClass('fa fa-sort-asc');
        $('.nar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load',function (){
        $('#menu-bar').removeClass('fa fa-sort-asc');
        $('.nar').removeClass('nav-toggle');      
    });
});