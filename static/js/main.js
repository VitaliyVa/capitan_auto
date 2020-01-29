$(document).ready(function(){





    $('.select__input').on('click', function(){
       
        let fieldt = $(this).parents('.select').find(".select__wrap");

        fieldt.toggleClass('select__wrap_active');
        $('.field__icon', this).toggleClass('field__icon_active');
       
    });


    // $(document).mouseup(function (e){ // событие клика по веб-документу
    //     let fieldt2 = $(this).parents('.select').find(".select__input");
	// 	var div = $(this).parent('.select').find(".select__wrap"); // тут указываем класс элемента
	// 	if (fieldt2.is(e.target) // если клик был не по нашему блоку
	//   &&
	//   div.has(e.target).length === 0) { // и не по его дочерним элементам
  	//   $('.select__wrap').removeClass('select__wrap_active');
    //   //   $('.field').removeClass('field-active');
    //   $('.field__icon').removeClass('field__icon_active');
    //   }
      $(document).mouseup(function(e) {
        var select = $(e.target).parents('.select'); // тут указываем класс элемента
       
        if (select.length > 0) {} else {
            $('.select__wrap').removeClass('select__wrap_active');
            //   $('.field').removeClass('field-active');
            $('.field__icon').removeClass('field__icon_active');
           
        }
        });
	

    $('.select__wrap_item').on('click', function() {
        var text = $(this).text();
        var id = $(this).data('id');
        let field = $(this).parents('.select').find(".field_text ");
        let input_select = $(this).parents('.select').find("input");
        console.log(id);
        $(field).text(text);
        $(input_select).val(id);
        $('.select__wrap').removeClass('select__wrap_active');
        $('.field__icon').removeClass('field__icon_active');
        // $('.select__input').removeClass('select__input-active');
        
      })







$('.main_cost_result').on("click", function() {
    var costAuto = $('.cost_class_1');

    var currency = $('.usd').find(".field_text ");
    var finderCurrency = $("#header-form .usd .field_text").text();

    var engine = $('.cost_class_3');

    var EngineType = $('.cost_class_4').find(".field_text ");
    var finderEngineType = $("#header-form .cost_class_4 .field_text").text();

    var yearAuto = $('.cost_class_5').find(".field_text ");
    var finderYearAuto = $("#header-form .cost_class_5 .field_text").text();
    // console.log(finderCurrency);
    console.log(engine.val());
    $(costAuto).val(costAuto.val());
    $(currency).text(finderCurrency);
    $(engine).val(engine.val());
    $(EngineType).text(finderEngineType);
    $(yearAuto).text(finderYearAuto);
   
});











    // $("#mobile").mask("+38 (9 9 9) 9 9 -9 9 - 9 9 9");
    $('#mobile').mask("+38(999) 99 99 999",{placeholder:"+38(___)__ __-____"});
   
        $('.link-fanc').fancybox({
            touch: false,
            scrolling: 'hidden',	
        });
 
    $('.log-in').fancybox({
        touch: false,
        scrolling: 'hidden',
    });


    $.extend($.lazyLoadXT, {
        edgeY:  250,
        srcAttr: 'data-src'
      });


      $(".scroll_all").on('click', function () {
        var elementClick = $(this).attr("href");
        // console.log(elementClick);
        var destination = $(elementClick).offset().top;
        $('html, body').animate({ scrollTop: destination }, 600);
        return false;
    });
 
// перемикач мови

   


$('#lang-btn').on('click', function(){
    $('.lang-nav').toggleClass('lang-nav_active');
    $('.arrow-lang').toggleClass('arrow-lang_active');
});

    













	$('.main_menu').click(function(){
        $("#nav-icon4").toggleClass('open');
        $(".right_nav-bar").toggleClass('right_nav-bar_active');
    });
    
    $('.left-svg').addClass('eng-svg_active');
    $('.eng-svg').on("click", function() {
        $(".eng-svg").removeClass("eng-svg_active")
        $(this).addClass('eng-svg_active');
    });





    

// Появление текста при нажати js ==========================================================>




$('.etaps-prof').on("click", function() {
    var ep = $(this).parents(".prof-wrap").find(".etaps-prichka");
    var pe = $(this).parents(".prof-wrap").find(".peshka");
    var cl = $(this).find(".close-etaps");
    var te = $(this).find(".text-etaps");

   $(ep).toggleClass('etaps-prichka_active');
   $(pe).toggleClass('peshka_active');
   $(cl).toggleClass('close-etaps_active');

  
});

$(".close-etaps").on("click", function(){
    $('.peshka').removeClass('peshka_active');
    $('.etaps-prichka').removeClass('etaps-prichka_active');
});
$(document).mouseup(function(e) {
    var select = $(e.target).parents('.prof-wrap'); // тут указываем класс элемента
    var closs = $(e.target).parents('.prof-wrap').find('.close-etaps'); // тут указываем класс элемента
 
    if (select.length > 0 || closs.length > 0) {} else {
      $('.peshka').removeClass('peshka_active');
      $('.etaps-prichka').removeClass('etaps-prichka_active');
    }
    
});



        



// Прокрутка чисел js ==========================================================>

	var it = 0;
	var speed = 200;

function tests() {

    if (it <= 3) {

        // document.body.innerHTML = i;

        var content = $('#test1').text(it);
        
        speed -= it;
        it++;

        setTimeout(arguments.callee, speed);

    }
   

}
tests();

var it2 = 0;

function tests2() {

if (it2 <= 5) {

    // document.body.innerHTML = i;

    var content2 = $('#test2').text(it2);
    
    speed -= it2;
    it2++;

    setTimeout(arguments.callee, speed);

}


}
tests2();
var it3 = 0;

function tests3() {

if (it3 <= 15) {

    // document.body.innerHTML = i;

    var content3 = $('#test3').text(it3);
    
    speed -= it3;
    it3++;

    setTimeout(arguments.callee, speed);

}


}
tests3();
var it4 = 0;

function tests4() {

if (it4 <= 1300) {

    // document.body.innerHTML = i;

    var content4 = $('#test4').text(it4);
    
    speed -= it4;
    it4++;

    setTimeout(arguments.callee, speed);

}


}
tests4();


});