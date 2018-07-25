var menuBtn = $('#menuBtn');
var menu = $('.main_menu_wraper');
var BtnPicture = $('#btnPic')

menuBtn.click(function(){
    menu.slideToggle(500);
    BtnPicture.toggleClass('fa-times');
    BtnPicture.toggleClass('fa-bars');
});

