$(document).ready(function() {

	var elem = document.querySelector(".promo")
	var h = elem.offsetHeight;

	$(window).scroll(function() {
       	if ($(this).scrollTop() > h) {
           $('.header_fixed').addClass('fixed');
       		} else {
	           $('.header_fixed').removeClass('fixed');
	       }
	});

	var ev_menu = document.querySelector(".everest_menu a")
	var ev_popup = document.querySelector(".everest_popap")



	if ($(".everest_menu a").length > 0) {

		ev_menu.addEventListener("click", function(event) {
	    event.preventDefault(); //отмена стандартного дейстивия
	    ev_popup.classList.toggle("ev_popup_show"); //добавляем класс 
	    ev_menu.classList.toggle("selected")
	})

	}


	var button_left = document.querySelector(".open_left_menu")
	var left_mnu = document.querySelector(".menu_left")
	var text_ul = document.querySelector(".full_left_bg")
	var text_p = document.querySelector(".menu_left_p")

 	if ($(".open_left_menu").length > 0) {

		button_left.addEventListener("click", function(event) {
	    event.preventDefault(); //отмена стандартного дейстивия
	    left_mnu.classList.toggle("menu_left_scroll"); //добавляем класс 
	    text_ul.classList.toggle("menu_left_show");
	    button_left.classList.toggle("menu_left_show_a");
	    text_p.classList.toggle("menu_left_show");
		})

	}


	/*toggle_mnu*/
	var toggle_mnu = document.querySelector(".toggle_mnu");
	var menu = document.querySelector(".header_popup")
	// var link = document.querySelectorAll(".link");

	if ($(".toggle_mnu").length > 0) {

		toggle_mnu.addEventListener("click", function(event) {
	    event.preventDefault(); //отмена стандартного дейстивия
	    menu.classList.toggle("header_popup_show"); //добавляем класс  
	    toggle_mnu.classList.toggle("on");
		})

	}
	// for (var j = 0; j < link.length; j++) {
 //    link[j].addEventListener("click", function(event) {
            
 //    menu.classList.remove("menu_show");
 //    toggle_mnu.classList.remove("on");
	// })
	// }



	// Помощь анимации
	new WOW().init();


	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));


	/*                      */
	//     modal_popup
	/*                     */
	$('a.open_popup').on('click', function(event) { //link
	    event.preventDefault();
	    $( ".modal_content" ).fadeIn( "1500", function() {});//popup
	   $( ".modal_overlay" ).fadeIn( "1500", function() {});//overlay
	});

	$('.modal_content_close').on('click', function(event) {
	    event.preventDefault();
	   $( ".modal_content" ).fadeOut( "1500", function() {});
	   $( ".modal_overlay" ).fadeOut( "1500", function() {});
	});

	$('.modal_overlay').on('click', function() {
	   $( ".modal_content" ).fadeOut( "1500", function() {});
	   $( ".modal_overlay" ).fadeOut( "1500", function() {});
	});


	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox({
		padding: 0
	});


	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});


	//Плавный скролл до блока .div по клику на .scroll
	$(function(){

	$('a[data-target="anchor"]').bind('click.smoothscroll', function(){
		var target = $(this).attr('href'),
			bl_top = $(target).offset().top;
		$('body, html').animate({scrollTop: bl_top}, 700);
		return false;
	});


	});


	// Маска для формы телефона

    $(".number").mask("+7 (999) 999-99-99");

    //slick

	$('.responsive').slick({
	  dots: true,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

	//Карусель
	// class="owl-carousel owl-theme"
	//Документация: http://owlgraphic.com/owlcarousel/
	$('.steps_slider.owl-carousel').owlCarousel({
		items: 4, //Количество слайдов
		dotsEach: false, //Точки под слайдером
        loop: true, //Зацикливаем слайдер
        margin: 28, //Отступ от элемента справа в 50px
        nav: false, //Отключение навигации
        autoplay: true, //Автозапуск слайдера
        smartSpeed: 2000, //Время движения слайда
        autoplayTimeout: 3500, //Время смены слайда
        navText:false, //текст наведения
        responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0:{
                items:1,
                dotsEach: true,
            },
            750:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

	/*FLOOR Carousel*/
	$('.versions_slider.owl-carousel').owlCarousel({
		items: 3, //Количество слайдов
		dotsEach: false, //Точки под слайдером
        loop: true, //Зацикливаем слайдер
        margin: 28, //Отступ от элемента справа в 50px
        nav: false, //Отключение навигации
        autoplay: true, //Автозапуск слайдера
        smartSpeed: 1500, //Время движения слайда
        autoplayTimeout: 2000, //Время смены слайда
        navText:false, //текст наведения
        responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0:{
                // items:1
            },
            750:{
                items:3
            },
            1000:{
                items:3
            }
        }
    });

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$(document).ready(function () {
    $("#form").submit(function () {
        $.ajax({
            type: "POST"
            , url: "mail.php"
            , data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $("#form").trigger("reset");
            $.fancybox.open($("#pop"));
            setTimeout(function () {
                $.fancybox.close();
            }, 1500);
        });
        return false;
    });
	});

	// Скрыть - раскрыть блок

	$('.menuToggle').on('click', function() {

       $('.menu').slideToggle(300, function(){
           
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }

       });

    });

	// Скрыть - раскрыть блок(множество)

	$(".closed-block").click(function () { 
		if ($(this).hasClass("active")) {  
		$(this).parents().children(".open-block").slideUp("slow"); 
		$(this).removeClass("active"); 
		} 
		else {  
		$(this).parents().children(".open-block").slideDown("slow"); 
		$(this).addClass("active"); 

		} 
	});


// Меню для сайта

	  $('a').on('click', function(e){
	    e.preventDefault();
	  });
	    
	  $('#ddmenu li').hover(function () {
	     clearTimeout($.data(this,'timer'));
	     $('.ul_none',this).stop(true,true).fadeIn(600);
	  }, function () {
	    $.data(this,'timer', setTimeout($.proxy(function() {
	      $('.ul_none',this).stop(true,true).fadeOut(600);
	    }, this), 100));
	  });

// переключение с красивым появлением  

  	$('.num-link a').click(function(e) {
        e.preventDefault();
        $('.num-link .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.inf_lk').not(tab).css({'display':'none'});
        $(tab).fadeIn(400);
    });


});




