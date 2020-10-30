//****** JS FOR CHANGE COLOR ON SCROLL******
$(window).scroll(function(){
	$("nav").toggleClass("scrolled", $(this).scrollTop() > 270);
});


// ********JS FOR SECTION5 btngroup started********
$("#web_btn").click(function () {
    $('.box').filter(".all, .apps, .icons").hide(2000);
    $(".web").show(1000);
});

$("#apps_btn").click(function () {
    $('.box').filter(".all, .web, .icons").hide(2000);
    $(".apps").show(1000);
});

$("#icons_btn").click(function () {
    $('.box').filter(".all, .web, .apps").hide(2000);
    $(".icons").show(1000);
});

$("#all").click(function () {
    $(".box").show(1000);
});
// ********JS FOR SECTION5 btngroup ended********