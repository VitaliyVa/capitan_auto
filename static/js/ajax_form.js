$(function() {


    Onload();
  })
// /**
//  * valide_form - Валідація форм
//  * @param {selector form} ID Форми на яку підвішують валідацію
//  * @param {class name} class групи куди виводять помилки
//  * @param {bull} true Чи виводи вспливайку пісял відповіді ajax
//  *
//  **/
function Onload() {

    var more_form = $('.mini-user-form');

    for (var testz = 0; testz < more_form.length; testz++) {
        var tehas = more_form[testz];
        var dinamic_id = 'active_form' + testz;
        $(tehas).attr('id', dinamic_id);
        var dinamic_main_id = '#' + $(tehas).attr('id');
        console.log(dinamic_main_id);
        valide_form(dinamic_main_id, '.inp-mini-wrap', false);
    }


    valide_form('.form_consult', '.inp-cons-wrap', true);
    valide_form('#modal-form_user', '.inp-vak-wrap', true);
    valide_form('#modal-form_sale_car', '.inp-vak-wrap', true);
    valide_form('#modal-form_post1', '.inp-vak-wrap', true);
    valide_form('#modal-form_post2', '.inp-vak-wrap', true);
    valide_form('#modal-form_settings', '.inp-vak-wrap', true);
    
   
}
function location_leng() {
    return location.pathname.split('/')[1];
}
function valide_form(id_form, error_inp_wrap, check_request) {
    var check_request = check_request;
    if ($(id_form).length > 0) {
        var lang_site;
        var error_text = {};

        lang_site = location_leng();
        switch (lang_site) {
            case 'uk':
            error_text.required = 'Поле обов\'язково для заповнення';
            error_text.email = 'Поле має містити email';
            break;
            case 'ru':
            error_text.required = 'Поле обязательно для заполнения';
            error_text.email = 'Поле должно содержать email';
            break;
            case 'en':
            error_text.required = 'The field is required';
            error_text.email = 'The field must contain an email';
            break;
            default:
            error_text.required = 'Поле обов\'язково для заповнення.';
            error_text.email = 'Поле має містити email.';
        }
        $(id_form).validate({
            errorPlacement: function (event, validator) {
                console.log(validator);
                console.log(event);
                $(validator).parents(error_inp_wrap).append($(event));
            },
            rules: {
                name_car: {
                    required: true,
                },
                tel_car: {
                    required: true,
                },
                mail_car: {
                    required: true,
                    email: true,
                },
                usernames: {
                    required: true,
                },
                passwords: {
                    required: true,
                },
                firstname1: {
                    required: true,
                },
                mail: {
                    required: true,
                    email: true,
                },
                mobile: {
                    required: true,
                },
                username: {
                    required: true,
                },
                password: {
                    required: true,
                },
                log_in: {
                    required: true,
                    email: true,
                },
                pass: {
                    required: true,
                },
                fPhone: {
                    required: true,
                },
                name: {
                    required: true,
                },
                phone: {
                    required: true,
                },
             },
             messages: {
                usernames: {
                    required: error_text.required,
                },
                passwords: {
                    required: error_text.required,
                },
                firstname1: {
                    required: error_text.required,
                },
                name_car: {
                    required: error_text.required,
                },
                tel_car: {
                    required: error_text.required,
                },
                mail_car: {
                    required: error_text.required,
                    email: error_text.email
                },
                mail: {
                    required: error_text.required,
                    email: error_text.email
                },
                mobile: {
                    required: error_text.required,
                },
                username: {
                    required: error_text.required,
                },
                password: {
                    required: error_text.required,
                },
                log_in: {
                    required: error_text.required,
                    email: error_text.email
                },
                pass: {
                    required: error_text.required,
                },
                fPhone: {
                    required: error_text.required,
                },
                name: {
                    required: error_text.required,
                },
                phone: {
                    required: error_text.required,
                },
             },
             submitHandler: function(form) {
                console.log("222");
                event.preventDefault();
             
                
                 $('.load_spin').addClass('load_spin_active');
                 var form_input = $(form).serializeArray();
                 var url_form = form.action;
                 var form_json = {};
                 $(form_input).each(function(index, obj) {
                    console.log(obj);
                    console.log(index);
                    form_json[obj.name] = obj.value;
          
                    console.log(form_json);
                  });
          
                    console.log(form_json);
                  if(url_form != ''){
          
                    fetch(url_form, {
                      method: 'POST',
                      body: new URLSearchParams($.param(form_json))
                    })
                    .then(data => {
          
                      return data.json();
                    })
                    .then(data => {
                        console.log(data)
                      if(data.status=='OK' && typeof data['status'] !== "undefined"){
                          sayHi();
                      }
                      if(data.status=='BAD' && typeof data['status'] !== "undefined"){
                          $('.load_spin').removeClass('load_spin_active');
                          $(".error_block_false").text("Невірний логін або пароль");
                        //   $.fancybox.open({
                        //     src: '#modal-form_false',
                        //   });
          
                      }
          
                      if(typeof data['url'] !== "undefined" && data.url!=''){
                        //   sayHi();
                          console.log(location.href)
                          console.log(data.url)
                          location.href=data.url;
                      }
                    
          
          
                    })
          
                  }else {
                    console.log("forn_not_actions");
                  }
          
                //     $(form_input).each(function(index, obj) {
                //         [obj.name] = obj.value;
                //     });
                // if(url_form != '') {
                //     fetch(url_form, {
                //         method: 'POST',
                //         body: new URLSearchParams($.param())
                //     })
                //     .then(data => {
                //         return data.json();
                //     })
                //     .then(data => {
                //         console.log('2223');
                //         if(data.status=='OK' && typeof data['status'] !== "undefined") {
                //             sayHi();
                            
                //         }
                //         if(typeof data['url'] !== 'undefined' && data.url!='') {
                //             sayHi();
                            
                //             location.href=data.url;
                //         }
                //         if(typeof data['reviews'] !== "undefined") {
                //             sayHi_rewis();
                            
                //         }
                       
                //     })
                // } else {
                //     console.log("form_not_actions");
                // }
                function explode(){
                  if (id_form == '#modal-form_user') {
                    // window.location.pathname = '/'
                  } else {
                    sayHi();
                  }
                   
                  }
                  explode()
                function sayHi() {
                    $('.load_spin').removeClass('load_spin_active');
                    $.fancybox.close();
                    if (check_request === true) {
                      $.fancybox.open({
                        src: '#modal-form_true',
                      });
                        var form_inputs = $(form)[0].querySelectorAll('input');
                        if (form_inputs.length > 0) {
                            for (var key in form_inputs) {
                                if (form_inputs.hasOwnProperty(key) && /^0$|^[1-9]\d*$/.test(key) && key <= 4294967294) {
                                    if (form_inputs[key].type !== 'submit') {
                                        form_inputs[key].value = '';
                                    }
                                }
                            }
                            var form_textaria = $(form)[0].querySelectorAll('textarea');
                            if (form_textaria.length > 0) {
                                form_textaria[0].value = '';
                            }
                        }
                    }
                }
                function sayHi_rewis() {
                    $('.load_spin').removeClass('load_spin_active');
                    $.fancybox.close();
                    if (check_request === true) {
                        $.fancybox.open({
                            src: '#modal-form_true',
                        });
                        var form_inputs = $(form)[0].querySelectorAll('input');
                        if (form_inputs.length > 0) {
                          for (var key in form_inputs) {
                          if (form_inputs.hasOwnProperty(key) && /^0$|^[1-9]\d*$/.test(key) && key <= 4294967294) {
                              if (form_inputs[key].type !== 'submit') {
                                form_inputs[key].value = '';
                              }
                            }
                          }
                        }
                        var form_textaria = $(form)[0].querySelectorAll('textarea');
                        if (form_textaria.length > 0) {
                          form_textaria[0].value = '';
                        }
                    }
                }
             }
        });
    } 
}