$(document).ready(function(){










// scroll ==================>
    // console.log(window.location.pathname.split('/')[2]);

    // if (window.location.pathname.split('/')[2] == '' && localStorage.team_swipe == 1) {
       
       
    //     localStorage.setItem('link_href', 0);
    //     function linkTime() {
            
    //         var destination = $('#block_id').offset().top;
    //         $('html, body').animate({ scrollTop: destination }, 600);
    //         return false;
    //     }
    //     setTimeout(linkTime, 500);
    //     localStorage.team_swipe = 0;
    // } 
    
    // console.log(localStorage.link_href);
    // $('.link_calkul_solo').on("click", function() {
        
    //     if (window.location.pathname.split('/')[2] == "") {
           
    //     function linkTime_2() {
    //         var destination = $('#block_id').offset().top;
    //         $('html, body').animate({ scrollTop: destination }, 600);
    //         return false;
    //     }
    //     setTimeout(linkTime_2, 500);

    //     } else {
    //         localStorage.team_swipe = 1;
    //         window.location.pathname = "/";


    //     }
    // });





















    $('#main_lang').on('click', function() {
        $('.hidden_lang-block').toggleClass('hidden_lang-block_active')
    });
// $('.main_lang_active').on('click', function() {
//     $('.hidden_lang-block').removeClass('hidden_lang-block_active');
// });
//     $(document).mouseup(function(e) {
//         var select3 = $(e.target).parents('.hidden_lang_item'); // тут указываем класс элемента
//         console.log('in');
//         if (select3.length > 0) {} else {
//             $('.hidden_lang-block').removeClass('hidden_lang-block_active');
//             console.log(select3[1]);
           
//         }
//         });




















    // tabs==========
    $(".main_tab__link").on("click", function(){
        ($(this)[0].dataset.tab);
        var className = ($(this)[0].dataset.tab);
        console.log(className);
        ($(".main_tab__link").removeClass("main_tab__link_active"));
         ($(this).addClass("main_tab__link_active"));
        ($(".tab-auto-content-prof").removeClass("tab-auto-content-prof_active"));
            ($("#"+$(this)[0].dataset.tab).addClass("tab-auto-content-prof_active"));

    });
    $(".mini-tab__link").on("click", function(){
        ($(this)[0].dataset.tab);
        var className = ($(this)[0].dataset.tab);
        console.log(className);
        ($(".mini-tab__link").removeClass("mini-tab__link_active"));
         ($(this).addClass("mini-tab__link_active"));
        ($(".mini-tab-content-prof").removeClass("mini-tab-content-prof_active"));
            ($("#"+$(this)[0].dataset.tab).addClass("mini-tab-content-prof_active"));

    });




















    var slidFinder = document.getElementById('slider_id');


    if (slidFinder != null) {   
    $('.main-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.main-slider',
        centerMode: true,
        focusOnSelect: true,
        // responsive: [{

        //     breakpoint: 1024,
        //     settings: {
        //       slidesToShow: 2,
        //       infinite: true
        //     }
      
        //   }]
      });

    }




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
    $('.car-form').fancybox({
        touch: false,
        scrolling: 'hidden',
    });
    $('.post1').fancybox({
        touch: false,
        scrolling: 'hidden',
    });
    $('.post2').fancybox({
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
        var destContacts = (destination - 600)
        $('html, body').animate({ scrollTop: destination }, 600);
        console.log(destContacts);
        return false;
        
 
    });

    $(".scroll_for_contact").on('click', function () {
        var elementClick = $(this).attr("href");
        // console.log(elementClick);
      
        var destination = $(elementClick).offset().top;
        var destContacts = (destination - 100)
        $('html, body').animate({ scrollTop: destContacts }, 600);
        console.log(destContacts);
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

        if ($('.right_nav-bar').hasClass('right_nav-bar_active')) {
            $("html,body").css("overflow", "hidden");
          } else {
              $("html,body").css("overflow", "visible");
        
          }
        
    });
   $('.nav__link').on('click', function() {
    $("#nav-icon4").removeClass('open');
    $(".right_nav-bar").removeClass('right_nav-bar_active');
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



$('.user-btn').on("click", function() {
    var user_btn = $(this)
    var hidden_item = $(this).parents(".wrap_user_items").find(".hidden_item");


   $(user_btn).toggleClass('user-btn_active');
   $(hidden_item).toggleClass('hidden_item_active');
  

  
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