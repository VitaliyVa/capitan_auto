$(document).ready(function(){
	$('.main_menu').click(function(){
        $("#nav-icon4").toggleClass('open');
        $(".right_nav-bar").toggleClass('right_nav-bar_active');
    });
    
    $('.left-svg').addClass('eng-svg_active');
    $('.eng-svg').on("click", function() {
        $(".eng-svg").removeClass("eng-svg_active")
        $(this).addClass('eng-svg_active');
    });





    

    $('.select__input').on('click', function(){
       
        let fieldt = $(this).parents('.select').find(".select__wrap");

        fieldt.toggleClass('select__wrap_active');
        $('.field__icon', this).toggleClass('field__icon_active');
       
    });


    $(document).mouseup(function (e){ // событие клика по веб-документу
        let fieldt2 = $(this).parents('.select').find(".select__input");
		var div = $(this).parent('.select').find(".select__wrap"); // тут указываем класс элемента
		if (fieldt2.is(e.target) // если клик был не по нашему блоку
	  &&
	  div.has(e.target).length === 0) { // и не по его дочерним элементам
  	  $('.select__wrap').removeClass('select__wrap_active');
      //   $('.field').removeClass('field-active');
      $('.field__icon').removeClass('field__icon_active');
      }
    
	});

    $('.select__wrap_item').on('click', function() {
        let text = $(this).text();
        let id = $(this).data('id');
        let field = $(this).parents('.select').find(".field_text ");
        let input_select = $(this).parents('.select').find("input");
        $(field).text(text);
        $(input_select).val(id);
        $('.select__wrap').removeClass('select__wrap_active');
        $('.field__icon').removeClass('field__icon_active');
        // $('.select__input').removeClass('select__input-active');
        
      })



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