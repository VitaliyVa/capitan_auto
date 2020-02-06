$(document).ready(function(){



    let card = {
        card1: {
            
            images: 'static/img/index/4.png',
            name: 'FORD ESCAPE',
            cost: '10 150 $',
            char1: "Бензин",
            char2: "Автомат",
            char3: "Повний",
            char4: "2016",
            btn_href: "card-car.html",
        },
        card2: {
           
            images: 'static/img/index/4.png',
            name: 'FORD ESCAPE',
            cost: '10 150 $',
            char1: "Бензин",
            char2: "Автомат",
            char3: "Повний",
            char4: "2016",
            btn_href: "card-car.html",
        },
        card3: {
         
            images: 'static/img/index/4.png',
            name: 'FORD ESCAPE',
            cost: '10 150 $',
            char1: "Бензин",
            char2: "Автомат",
            char3: "Повний",
            char4: "2016",
            btn_href: "card-car.html",
        }
      };


      
    // console.log(card);
    
    // var product = value.paginated_items;
    // var fragment = document.createDocumentFragment();
    // var cur_step = 0;
    // скопируем все свойства user в него
    // for (let key in product) {
    //     cur_step += 0.2;
    //     var creat_card1 = createCard(product[key], cur_step);
    //     fragment.appendChild(creat_card1);
    // }

//   console.log(card.card1);


  $('.more_slide_car').on('click', function() {
    
     var fragment = document.createDocumentFragment();
     var cur_step = 0;
     for (var key in card) {
       cur_step += 0.2;
      var ini = 1;
      ini++;
       var creat_card1 = createCard(card[key], cur_step);
    //    console.log(creat_card1);
       fragment.appendChild(creat_card1);
     
       $('.auto-card-block')[0].appendChild(fragment);

     
       
    //    console.log( $('.auto-card-block')[0]);
       console.log(ini);
       
     }
     setTimeout(function(){
        $('.auto-card-prof').removeClass('tile');
        $('.auto-card-prof').css("animation-delay", "0s");
        console.log('finish');
        }, 1200);
        function createCard (product, step) {
            var card_prof = document.createElement('div');
            card_prof.style.setProperty('animation-delay', (step) + 's'),
            card_prof.classList.add('auto-card-prof', 'tile');
            
            var card__img = document.createElement('img');
            card__img.classList.add('photo_auto');
            card__img.setAttribute('src', product.images);

            var card_name = document.createElement('div');
            card_name.classList.add('name_car');
            card_name.textContent = product.name;
           
            var price_name = document.createElement('div');
            price_name.classList.add('price_car');
            price_name.textContent = product.cost;

            var characteristic = document.createElement('div');
            characteristic.classList.add('characteristic_car');

            var char_prof1 = document.createElement('div');
            char_prof1.classList.add('char-prof');
            var char_prof2 = document.createElement('div');
            char_prof2.classList.add('char-prof');
            var char_prof3 = document.createElement('div');
            char_prof3.classList.add('char-prof');
            var char_prof4 = document.createElement('div');
            char_prof4.classList.add('char-prof');

            var char__img1 = document.createElement('img');
            char__img1.classList.add('char');
            char__img1.setAttribute('src', 'static/img/auto_card/char-1.svg');
            var char_text1 = document.createElement('div');
            char_text1.classList.add('char-text');
            char_text1.textContent = product.char1;
            var char__img2 = document.createElement('img');
            char__img2.classList.add('char');
            char__img2.setAttribute('src', 'static/img/auto_card/char-2.svg');
            var char_text2 = document.createElement('div');
            char_text2.classList.add('char-text');
            char_text2.textContent = product.char2;
            var char__img3 = document.createElement('img');
            char__img3.classList.add('char');
            char__img3.setAttribute('src', 'static/img/auto_card/char-3.svg');
            var char_text3 = document.createElement('div');
            char_text3.classList.add('char-text');
            char_text3.textContent = product.char3;
            var char__img4 = document.createElement('img');
            char__img4.classList.add('char');
            char__img4.setAttribute('src', 'static/img/auto_card/char-4.svg');
            var char_text4 = document.createElement('div');
            char_text4.classList.add('char-text');
            char_text4.textContent = product.char4;

            var btn__car = document.createElement('a');
            btn__car.classList.add('btn_car',  'hvr-curl-bottom-left');
            btn__car.setAttribute(`href`, product.btn_href);
            btn__car.textContent = 'ДЕТАЛЬНІШЕ';


            

            card_prof.appendChild(card__img);
            card_prof.appendChild(card_name);
            card_prof.appendChild(price_name);
            card_prof.appendChild(characteristic);

            characteristic.appendChild(char_prof1);
            char_prof1.appendChild(char__img1);
            char_prof1.appendChild(char_text1);

            characteristic.appendChild(char_prof2);
            char_prof2.appendChild(char__img2);
            char_prof2.appendChild(char_text2);

            characteristic.appendChild(char_prof3);
            char_prof3.appendChild(char__img3);
            char_prof3.appendChild(char_text3);

            characteristic.appendChild(char_prof4);
            char_prof4.appendChild(char__img4);
            char_prof4.appendChild(char_text4);

            card_prof.appendChild(btn__car);

            // $('<div>', {class: 'auto-card-prof' + ' ' + card[key].id}).appendTo('.auto-card-block');
            // $('<img>', {class: 'photo_auto', src: card[key].images}).appendTo('.'+card[key].id);
            // $('<div>', {class: 'name_car', text: card[key].name}).appendTo('.'+card[key].id);
            // $('<div>', {class: 'price_car', text: card[key].cost}).appendTo('.'+card[key].id);
            // $('<div>', {class: 'characteristic_car'}).appendTo('.'+card[key].id);
        
            // $('<div>', {class: 'char-prof char1'}).appendTo('.'+card[key].id+" "+".characteristic_car");
            // $('<img>', {class: 'char', src: 'static/img/auto_card/char-1.svg'}).appendTo('.'+card[key].id+" "+".characteristic_car .char1");
            // $('<div>', {class: 'char-text', text: card[key].char1}).appendTo('.'+card[key].id+" "+".characteristic_car .char1");
        
            // $('<div>', {class: 'char-prof char2'}).appendTo('.'+card[key].id+" "+".characteristic_car");
            // $('<img>', {class: 'char', src: 'static/img/auto_card/char-2.svg'}).appendTo('.'+card[key].id+" "+".characteristic_car .char2");
            // $('<div>', {class: 'char-text', text: card[key].char2}).appendTo('.'+card[key].id+" "+".characteristic_car .char2");
        
            // $('<div>', {class: 'char-prof char3'}).appendTo('.'+card[key].id+" "+".characteristic_car");
            // $('<img>', {class: 'char', src: 'static/img/auto_card/char-3.svg'}).appendTo('.'+card[key].id+" "+".characteristic_car .char3");
            // $('<div>', {class: 'char-text', text: card[key].char3}).appendTo('.'+card[key].id+" "+".characteristic_car .char3");
        
            // $('<div>', {class: 'char-prof char4'}).appendTo('.'+card[key].id+" "+".characteristic_car");
            // $('<img>', {class: 'char', src: 'static/img/auto_card/char-4.svg'}).appendTo('.'+card[key].id+" "+".characteristic_car .char4");
            // $('<div>', {class: 'char-text', text: card[key].char4}).appendTo('.'+card[key].id+" "+".characteristic_car .char4");
        
            // $('<a>', { href: card[key].btn_href, class: 'btn_car hvr-curl-bottom-left', text: 'ДЕТАЛЬНІШЕ'}).appendTo('.'+card[key].id);
                return card_prof;
        }
          

  
  });


//   posts ===============>

  let posts = {
    post1: {
        
        images: 'static/img/index/4.png',
        name: 'Культові маслкар в історії США: Camaro, Challenger & Shelby',
        sub: 'Маслкар - спеціальний клас авто з США, вершина яких припала на 1 десятиліття - середини 60-х до середини 70-х років. Сама назва muscle car ...',
        clock_img: "static/img/clock.png",
        clock_data: "28.01.2020",
        eye_img: "static/img/eye.svg",
        eye_data: "26",
        main_img: 'static/img/post-1.png',
        btn_href: "news-link.html",
    },
    post2: {
        
        images: 'static/img/index/4.png',
        name: 'Культові маслкар в історії США: Camaro, Challenger & Shelby',
        sub: 'Маслкар - спеціальний клас авто з США, вершина яких припала на 1 десятиліття - середини 60-х до середини 70-х років. Сама назва muscle car ...',
        clock_img: "static/img/clock.png",
        clock_data: "28.01.2020",
        eye_img: "static/img/eye.svg",
        eye_data: "26",
        main_img: 'static/img/post-1.png',
        btn_href: "news-link.html",
    },
   
  };


$('.more_slide_posts').on('click', function() {

 let fragment = document.createDocumentFragment();
 let cur_step = 0;
 for (var keys in posts) {
   cur_step += 0.2;
  
   var creat_card2 = createCard2(posts[keys], cur_step);
//    console.log(creat_card1);
   fragment.appendChild(creat_card2);
 
   $('.block-post')[0].appendChild(fragment);
   console.log( $('.block-post')[0]);
//    console.log(fragment);
   
 }

    function createCard2 (product, step) {
        var post_prof = document.createElement('div');
       post_prof.style.setProperty('animation-delay', (step) + 's'),
       post_prof.classList.add('post-profile', 'tile');

       var link_wrap = document.createElement('a');
       link_wrap.setAttribute(`href`, product.btn_href);

       var btn_name = document.createElement('div');
       btn_name.classList.add('btn-post', 'hvr-bob');
       btn_name.textContent = 'БІЛЬШЕ';

       var border = document.createElement('div');
       border.classList.add('border_fix');

       var post_wrap = document.createElement('div');
       post_wrap.classList.add('left-post-wrap');
       
       var data_post = document.createElement('div');
       data_post.classList.add('data-post');
       
       var data_prof1 = document.createElement('div');
       data_prof1.classList.add('data-prof');
       
            var clock_img = document.createElement('img');
            clock_img.setAttribute('src', product.clock_img);
           
            var clock_text = document.createElement('div');
            clock_text.classList.add('data-text');
            clock_text.textContent = product.clock_data;

         var data_prof2 = document.createElement('div');
         data_prof2.classList.add('data-prof');
       
            var eye_img = document.createElement('img');
            eye_img.setAttribute('src', product.eye_img);
           
            var eye_text = document.createElement('div');
            eye_text.classList.add('data-text');
            eye_text.textContent = product.eye_data;
       
        var block_for_post = document.createElement('div');
        block_for_post.classList.add('text-block-for-post');
        
        var post__title = document.createElement('div');
        post__title.classList.add('post__title');
        post__title.textContent = product.name;

        var post__sub = document.createElement('div');
        post__sub.classList.add('post__sub');
        post__sub.textContent = product.sub;

        var block_for_img = document.createElement('div');
        block_for_img.classList.add('right-post-wrap');

        var main_img = document.createElement('img');
        main_img.setAttribute('src', product.main_img);

       post_prof.appendChild(link_wrap);
       link_wrap.appendChild(btn_name);
       post_prof.appendChild(border);
       border.appendChild(post_wrap);
       post_wrap.appendChild(data_post);
       data_post.appendChild(data_prof1);
       data_prof1.appendChild(clock_img);
       data_prof1.appendChild(clock_text);
       data_post.appendChild(data_prof2);
       data_prof2.appendChild(eye_img);
       data_prof2.appendChild(eye_text);
       post_wrap.appendChild(block_for_post);
       block_for_post.appendChild(post__title);
       block_for_post.appendChild(post__sub);
       post_prof.appendChild(block_for_img);
       block_for_img.appendChild(main_img);

       
            return post_prof;
    }
      


});











// scroll ==================>
    // console.log(window.location.pathname.split('/')[2]);
   

    if (window.location.pathname == '/C:/Users/odmin/Desktop/Cap-Auto/index.html' && localStorage.team_swipe == 1) {
       
       
        localStorage.setItem('team_swipe', 0);
        function linkTime() {
            
            var destination = $('#calc__link').offset().top;
            $('html, body').animate({ scrollTop: destination }, 600);
            return false;
        }
        setTimeout(linkTime, 500);
        localStorage.team_swipe = 0;
    } 
    localStorage.setItem('team_swipe', 0);
    console.log(window.location.pathname);
    console.log(localStorage.team_swipe);
    $('#calc__blink').on("click", function() {
        
        if (window.location.pathname == '/C:/Users/odmin/Desktop/Cap-Auto/index.html') {
           
        function linkTime_2() {
            var destination = $('#calc__link').offset().top;
            $('html, body').animate({ scrollTop: destination }, 600);
            return false;
        }
        setTimeout(linkTime_2, 500);

        } else {
            localStorage.team_swipe = 1;
            console.log(localStorage.team_swipe);
            window.location.pathname = "/C:/Users/odmin/Desktop/Cap-Auto/index.html";


        }
    });





















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
        $('.select__wrap').removeClass('select__wrap_active');
        //   $('.field').removeClass('field-active');
        $('.field__icon').removeClass('field__icon_active');
        
        fieldt.toggleClass('select__wrap_active');
        $('.field__icon', this).toggleClass('field__icon_active');

    
       
    });

    $(document).mouseup(function(e) {
        var select = $(e.target).parents('.select'); // тут указываем класс элемента
       
        if (select.length > 0) {} else {
            $('.select__wrap').removeClass('select__wrap_active');
            //   $('.field').removeClass('field-active');
            $('.field__icon').removeClass('field__icon_active');
           
        }
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
    $('.set-wrap').fancybox({
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
    $("html,body").css("overflow", "visible");
   });


  




    

// Появление текста при нажати js ==========================================================>




$('.etaps-prof').on("click", function() {
    var ep = $(this).parents(".prof-wrap").find(".etaps-prichka");
    var pe = $(this).parents(".prof-wrap").find(".peshka");
    var cl = $(this).find(".close-etaps");
    var te = $(this).find(".text-etaps");


    $('.peshka').removeClass('peshka_active');
    $('.etaps-prichka').removeClass('etaps-prichka_active');


   $(ep).addClass('etaps-prichka_active');
   $(pe).addClass('peshka_active');
   $(cl).addClass('close-etaps_active');

  
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
    var max_speed = -11845591;
    max_speed -= it4;
    it4++;
    setTimeout(arguments.callee, 0);

}


}
tests4();




$('.left-svg').addClass('eng-svg_active');
$('.eng-svg').on("click", function() {
    $(".eng-svg").removeClass("eng-svg_active")
    $(this).addClass('eng-svg_active');
    if(this == $('.left-svg')[0]) {
        
        $('.left-svg').addClass('left-svg_fix');
    } else if (this !== $('.left-svg')[0]) {
        $('.left-svg').removeClass('left-svg_fix');
    }

    if ($('.right-svg').hasClass('eng-svg_active')) {
            console.log('1');

                var it = 3;
                var speed = 200;

            function tests1() {

                if (it <= 5) {

                    // document.body.innerHTML = i;

                    var content = $('#test1').text(it);
                    
                    speed -= it;
                    it++;

                    setTimeout(arguments.callee, speed);

                }
               

            }
            tests1();

            var it2 = 5;

            function tests22() {

            if (it2 <= 9) {

                // document.body.innerHTML = i;

                var content2 = $('#test2').text(it2);
                
                speed -= it2;
                it2++;

                setTimeout(arguments.callee, speed);

            }


            }
            tests22();
            var it3 = 15;

            function tests33() {

            if (it3 <= 32) {

                // document.body.innerHTML = i;

                var content3 = $('#test3').text(it3);
                
                speed -= it3;
                it3++;

                setTimeout(arguments.callee, speed);

            }


            }
            tests33();
            var it4 = 1300;

            function tests44() {

            if (it4 <= 1600) {

                // document.body.innerHTML = i;

                var content4 = $('#test4').text(it4);
                var max_speed = -11845591;
                max_speed -= it4;
                it4++;
                setTimeout(arguments.callee, 0);

            }


            }
            tests44();

    }
    if ($('.left-svg_fix').hasClass('eng-svg_active')) {
            console.log('1');

                var it = 5;
                var speed = 200;

            function tests1() {

                if (it >= 3) {

                    // document.body.innerHTML = i;

                    var content = $('#test1').text(it);
                    
                    speed -= it;
                    it--;

                    setTimeout(arguments.callee, speed);

                }
               

            }
            tests1();

            var it2 = 9;

            function tests22() {

            if (it2 >= 5) {

                // document.body.innerHTML = i;

                var content2 = $('#test2').text(it2);
                
                speed -= it2;
                it2--;

                setTimeout(arguments.callee, speed);

            }


            }
            tests22();
            var it3 = 32;

            function tests33() {

            if (it3 >= 15) {

                // document.body.innerHTML = i;

                var content3 = $('#test3').text(it3);
                
                speed -= it3;
                it3--;

                setTimeout(arguments.callee, speed);

            }


            }
            tests33();
            var it4 = 1600;

            function tests44() {

            if (it4 >= 1300) {

                // document.body.innerHTML = i;

                var content4 = $('#test4').text(it4);
                var max_speed = -11845591;
                max_speed -= it4;
                it4--;
                setTimeout(arguments.callee, 0);

            }


            }
            tests44();

    }
});



});