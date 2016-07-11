$(document).ready(function() {

	// //Цели для Яндекс.Метрики и Google Analytics
	// $(".count_element").on("click", (function() {
	// 	ga("send", "event", "goal", "goal");
	// 	yaCounterXXXXXXXX.reachGoal("goal");
	// 	return true;
	// }));

	 // var owl = $("#head-carousel");
 
  // owl.owlCarousel({
  //   autoPlay : true,
  //   stopOnHover : true,
  //   navigation : false,
  //   singleItem : true,
  //   transitionStyle : "fade"
  // });

 
	
	  // Cache selectors
    var lastId,
    topMenu = $(".navbar-nav, .navbar-nav.sticky, #responsive-menu"),
    topMenuHeight = 0,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      
      if (item.length) { 
         return item; 
      }
    });

    if($(window).width()<=767){
      topMenuHeight = 0;
    }

    
    // Bind to scroll
    $(window).scroll(function(){
      // Get container scroll position
      var fromTop = $(this).scrollTop()+topMenuHeight;
       
      // Get id of current scroll item
      var cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
          return this;
        
    
    
      });
      
      // Get the id of the current element
      cur = cur[cur.length-1];
      var id = cur && cur.length ? cur[0].id : "";
       
      if (lastId !== id && id != "") {
        lastId = id;
        // Set/remove active class
        menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
      }

      changeNavMenu();
    });

    //mobile menu and desktop menu
    $("#responsive-menu").css({"left":-1500});

    $(".cd-nav-trigger").click(function(){
        $("#responsive-menu").show();
        
        if($("#responsive-menu").css("left") == "-1500px") 
        {
          $("#responsive-menu").animate({ "left":0 }, 400);
          $("header").removeClass("nav-is-visible");


        }
        else
        {
          $("#responsive-menu").animate({ "left":-1500 }, 400);
          $("header").addClass("nav-is-visible");
        }
        
        return false;
    });
    $(window).on("load resize", function(){
        changeNavMenu();
    });

    $("#responsive-menu a").click(function(){
      $("#responsive-menu").animate({ "left":-1500 }, 400);
      $("header").removeClass("nav-is-visible");
    });

});

function changeNavMenu(){
  if($(window).width()>767)
  {
    $("#responsive-menu").css({"left":-1500});
      $("header").removeClass("nav-is-visible");
    if ($(window).scrollTop() > 1)
    {
      $('.navbar-inverse').addClass("sticky");        
    }
    else 
    {
      $('.navbar-inverse').removeClass("sticky");
    } 
  }
  else {
    $('.navbar-inverse').removeClass("sticky");
  }
}

$(document).ready(function() {
  // $('.popup-with-zoom-anim').magnificPopup({
  //   type: 'inline',

  //   fixedContentPos: false,
  //   fixedBgPos: true,

  //   overflowY: 'auto',

  //   closeBtnInside: true,
  //   preloader: false,
    
  //   midClick: true,
  //   removalDelay: 300,
  //   mainClass: 'my-mfp-zoom-in'
  // });

  $('.popup-with-move-anim').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,
    
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-slide-bottom'
  });
});

	// //SVG Fallback
	// if(!Modernizr.svg) {
	// 	$("img[src*='svg']").attr("src", function() {
	// 		return $(this).attr("src").replace(".svg", ".png");
	// 	});
	// };

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	// $(".callback").submit(function() {
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "mail.php",
	// 		data: $(this).serialize()
	// 	}).done(function() {
	// 		alert("Спасибо за заявку!");
	// 		setTimeout(function() {
				
	// 			$(".forms").trigger("reset");
	// 		}, 1000);
	// 	});
	// 	return false;
	// });

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

// var waypointsvg = new Waypoint({

// 		element: $(".third-section"),
// 		handler: function(dir) {
			
// 			if (dir === "down") {

// 				$(".third-section .tc-item").each(function(index) {
// 					var ths = $(this);
// 					setTimeout(function() {
// 						var myAnimation = new DrawFillSVG({
// 							elementId: "tc-svg-" + index
// 						});
// 						ths.children(".tc-content").addClass("tc-content-on");
// 					}, 500*index);
// 				});

// 			};
// 			this.destroy();
// 		},
// 		offset: '35%'
// 	});
 // $(window).scroll(function(){
 
 // $(" #contact").animated("fadeInUp ");
 // $(" #portfolio-grid ").animated("fadeInUp ");
 // $(" .homesect ").animated("fadeInUp ");
 
 // });
(function ($) {
    
    $.fn.equalHeight = function () {
        var tallest = 0;
        this.each(function () {
            var thisHeight = $(this).height();
            if (thisHeight > tallest) {
                tallest = thisHeight;
            }
        });
        
        // allow jQuery chaining
        return this.height(tallest);
    };
}(jQuery));

$( ".services .services-item" ).equalHeight();

jQuery(document).ready(function($){
  //move nav element position according to window width
  moveNavigation();
  $(window).on('resize', function(){
    (!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
  });

  //mobile version - open/close navigation
  $('.cd-nav-trigger').on('click', function(event){
    event.preventDefault();
    if($('header').hasClass('nav-is-visible')) $('.moves-out').removeClass('moves-out');
    
    $('header').toggleClass('nav-is-visible');
    $('.menu-holder').toggleClass('nav-is-visible');
    $('.cd-main-content').toggleClass('nav-is-visible');
  });

  //mobile version - go back to main navigation
  $('.go-back').on('click', function(event){
    event.preventDefault();
    $('.menu-holder').removeClass('moves-out');
  });

  //open sub-navigation
  $('.cd-subnav-trigger').on('click', function(event){
    event.preventDefault();
    $('.menu-holder').toggleClass('moves-out');
  });

  function moveNavigation(){
    var navigation = $('.responsive-menu');
      var screenSize = checkWindowWidth();
        if ( screenSize ) {
          //desktop screen - insert navigation inside header element
      navigation.detach();
      navigation.insertBefore('.cd-nav-trigger');
    } else {
      //mobile screen - insert navigation after .cd-main-content element
      navigation.detach();
      navigation.insertAfter('.cd-main-content');
    }
  }

  function checkWindowWidth() {
    var mq = window.getComputedStyle(document.querySelector('header'), '::before').getPropertyValue('content').replace(/"/g, '');
    return ( mq == 'mobile' ) ? false : true;
  }
});