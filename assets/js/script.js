(function ($) {

    "use strict";

    /*------------------------------------------
        Nice Select
    -------------------------------------------*/

    $('.select').niceSelect();

    $(function () {
        $("#datepicker").datepicker();
    });


    /*------------------------------------------
        = ALL ESSENTIAL FUNCTIONS
    -------------------------------------------*/

    // Toggle mobile navigation
    function toggleMobileNavigation() {
        var navbar = $(".navigation-holder");
        var openBtn = $(".mobail-menu .open-btn");
        var xbutton = $(".mobail-menu .navbar-toggler");

        openBtn.on("click", function (e) {
            e.stopImmediatePropagation();
            navbar.toggleClass("slideInn");
            xbutton.toggleClass("x-close");
            return false;
        })
    }

    toggleMobileNavigation();

    // Function for toggle class for small menu
    function toggleClassForSmallNav() {
        var windowWidth = window.innerWidth;
        var mainNav = $("#navbar > ul");

        if (windowWidth <= 991) {
            mainNav.addClass("small-nav");
        } else {
            mainNav.removeClass("small-nav");
        }
    }

    toggleClassForSmallNav();

    // Function for small menu
    function smallNavFunctionality() {
        var windowWidth = window.innerWidth;
        var mainNav = $(".navigation-holder");
        var smallNav = $(".navigation-holder > .small-nav");
        var subMenu = smallNav.find(".sub-menu");
        var megamenu = smallNav.find(".mega-menu");
        var menuItemWidthSubMenu = smallNav.find(".menu-item-has-children > a");

        if (windowWidth <= 991) {
            subMenu.hide();
            megamenu.hide();
            menuItemWidthSubMenu.on("click", function (e) {
                var $this = $(this);
                $this.siblings().slideToggle();
                e.preventDefault();
                e.stopImmediatePropagation();
                $this.toggleClass("rotate");
            })
        } else if (windowWidth > 991) {
            mainNav.find(".sub-menu").show();
            mainNav.find(".mega-menu").show();
        }
    }

    smallNavFunctionality();

    // smooth-scrolling
    function smoothScrolling($scrollLinks, $topOffset) {
        var links = $scrollLinks;
        var topGap = $topOffset;

        links.on("click", function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html, body").animate({
                        scrollTop: target.offset().top - topGap
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
            return false;
        });
    }


    $("body").on("click", function () {
        $('.navigation-holder').removeClass('slideInn');
    });
    $(".menu-close").on("click", function () {
        $('.navigation-holder').removeClass('slideInn');
    });
    $(".menu-close").on("click", function () {
        $('.open-btn').removeClass('x-close');
    });


    // toggle1
    $('#toggle1').on("click", function () {
        $('.create-account').slideToggle();
        $('.caupon-wrap.s1').toggleClass('active-border')
    })

    // toggle2
    $('#toggle2').on("click", function () {
        $('#open2').slideToggle();
        $('.caupon-wrap.s2').toggleClass('coupon-2')
    })

    // toggle3
    $('#toggle3').on("click", function () {
        $('#open3').slideToggle();
        $('.caupon-wrap.s2').toggleClass('coupon-2')
    })
    // toggle4
    $('#toggle4').on("click", function () {
        $('#open4').slideToggle();
        $('.caupon-wrap.s3').toggleClass('coupon-2')
    })

    $('.payment-select .addToggle').on('click', function () {
        $('.payment-name').addClass('active')
        $('.payment-option').removeClass('active')
    })


    $('.payment-select .removeToggle').on('click', function () {
        $('.payment-option').addClass('active')
        $('.payment-name').removeClass('active')
    });

    // tooltips

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })

    /*------------------------------------------
       = TEAM SECTION
   -------------------------------------------*/
    var singleMember = $('.social');
    singleMember.on('click', function () {
        $(this).toggleClass('active');
    });

    /*------------------------------------------
        = project-slider
    -------------------------------------------*/
      if ($(".project-slider").length) {
        $(".project-slider").owlCarousel({
            autoplay: true,
            smartSpeed: 1500,
            loop: true,
            margin: 50,
            dots: true,
            nav: false,
            items: 3,
            responsive: {
                0: {
                    items: 1,
                },

                550: {
                    items: 2,
                },

                992: {
                    items: 3,
                },
            }
        });
    }
    /*------------------------------------------
        = PARTNERS SLIDER
    -------------------------------------------*/
    if ($(".portfolio-wrap-s2").length) {
        $(".portfolio-wrap-s2").owlCarousel({
            autoplay: true,
            smartSpeed: 1500,
            loop: true,
            autoplayHoverPause: true,
            dots: true,
            nav: false,
            items: 5,
            responsive: {
                0: {
                    items: 1
                },

                500: {
                    items: 2
                },

                767: {
                    items: 3
                },

                992: {
                    items: 4
                },

                1200: {
                    items: 5
                }
            }
        });
    }

    /*------------------------------------------
        = POST SLIDER
    -------------------------------------------*/
     if ($(".post-slider".length)) {
        $(".post-slider").owlCarousel({
            mouseDrag: false,
            smartSpeed: 500,
            margin: 30,
            loop: true,
            nav: true,
            navText: ['<i class="fi ti-angle-left"></i>', '<i class="fi ti-angle-right"></i>'],
            dots: false,
            items: 1
        });
    }

    /*------------------------------------------
        = gallery-items
    -------------------------------------------*/
   if ($(".portfolio-slide").length > 0) {
        $(".portfolio-slide").owlCarousel({
            autoplay: true,
            smartSpeed: 300,
            margin: 10,
            loop: true,
            autoplayHoverPause: true,
            dots: true,
            nav: false,
            items: 6,
            responsive: {
                0: { items: 1 },
                426: { items: 2 },
                768: { items: 4 },
                1200: { items: 6 },
            }
        });
    }

    /*------------------------------------------
        = Testimonial slider
    -------------------------------------------*/
    if ($(".wpo-testimonial-wrap").length) {
        $('.wpo-testimonial-active').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            focusOnSelect: true,
            arrows: false,
            dots: true,
        });
    }

      /*------------------------------------------
        = PARTNERS SLIDER
    -------------------------------------------*/
    if ($(".partners-slider").length) {
        $(".partners-slider").owlCarousel({
            autoplay: true,
            smartSpeed: 300,
            margin: 0,
            loop: true,
            autoplayHoverPause: true,
            dots: false,
            arrows: false,
            nav: false,
            responsive: {
                0: {
                    items: 2
                },

                550: {
                    items: 3
                },

                992: {
                    items: 4
                },

                1200: {
                    items: 5
                }
            }
        });
    }



  // HERO SLIDER
    var menu = [];
    jQuery('.swiper-slide').each(function (index) {
        menu.push(jQuery(this).find('.slide-inner').attr("data-text"));
    });
    var interleaveOffset = 0.5;
    var swiperOptions = {
        loop: true,
        speed: 1000,
        parallax: true,
        autoplay: {
            delay: 6500,
            disableOnInteraction: false,
        },
        watchSlidesProgress: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        on: {
            progress: function () {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    var slideProgress = swiper.slides[i].progress;
                    var innerOffset = swiper.width * interleaveOffset;
                    var innerTranslate = slideProgress * innerOffset;
                    swiper.slides[i].querySelector(".slide-inner").style.transform =
                        "translate3d(" + innerTranslate + "px, 0, 0)";
                }
            },

            touchStart: function () {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = "";
                }
            },

            setTransition: function (speed) {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".slide-inner").style.transition =
                        speed + "ms";
                }
            }
        }
    };

    var swiper = new Swiper(".swiper-container", swiperOptions);

    // DATA BACKGROUND IMAGE
    var sliderBgSetting = $(".slide-bg-image");
    sliderBgSetting.each(function (indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

    /* hero-slider */
    $('.hero-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        speed: 1000,
        autoplay: true,
        fade: true,
        responsive: [{
            breakpoint: 599,
            settings: {
                arrows: false,
            }
        }

        ]
    });

    /*------------------------------------------
        = HIDE PRELOADER
    -------------------------------------------*/
    function preloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(100).fadeOut(500, function () {

                //active wow
                wow.init();

            });
        }
    }

    /*------------------------------------------
        = COUNTDOWN CLOCK
    -------------------------------------------*/
    if ($("#clock").length) {
        $('#clock').countdown('2026-12-30 20:30:00', function (event) {
            var $this = $(this).html(event.strftime(''
                // + '<div class="box"><div><div class="time">%m</div> <span>Month</span> </div></div>'
                + '<div class="box"><div><div class="time">%D</div> <span>Days</span> </div></div>'
                + '<div class="box"><div><div class="time">%H</div> <span>Hours</span> </div></div>'
                + '<div class="box"><div><div class="time">%M</div> <span>Mins</span> </div></div>'
                + '<div class="box"><div><div class="time">%S</div> <span>Secs</span> </div></div>'));
        });
    }

    /*------------------------------------------
        = WOW ANIMATION SETTING
    -------------------------------------------*/
    var wow = new WOW({
        boxClass: 'wow',      // default
        animateClass: 'animated', // default
        offset: 0,          // default
        mobile: true,       // default
        live: true        // default
    });


    /*------------------------------------------
        = ACTIVE POPUP IMAGE
    -------------------------------------------*/
    if ($(".fancybox").length) {
        $(".fancybox").fancybox({
            openEffect: "elastic",
            closeEffect: "elastic",
            wrapCSS: "project-fancybox-title-style"
        });
    }

    /*------------------------------------------
        = POPUP VIDEO
    -------------------------------------------*/
    if ($(".video-btn").length) {
        $(".video-btn").on("click", function () {
            $.fancybox({
                href: this.href,
                aspectRatio: true,
                type: $(this).data("type"),
                'title': this.title,
                helpers: {
                    title: { type: 'inside' },
                    media: {}
                },

                beforeShow: function () {
                    $(".fancybox-wrap").addClass("gallery-fancybox");
                }
            });
            return false
        });
    }

    /*------------------------------------------
        = ACTIVE GALLERY POPUP IMAGE
    -------------------------------------------*/
    if ($(".popup-gallery").length) {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',

            gallery: {
                enabled: true
            },

            zoom: {
                enabled: true,

                duration: 300,
                easing: 'ease-in-out',
                opener: function (openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    }

     /*------------------------------------------
        = POPUP YOUTUBE, VIMEO, GMAPS
    -------------------------------------------*/
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    /*------------------------------------------
        = FUNCTION FORM SORTING GALLERY
    -------------------------------------------*/
    function sortingGallery() {
        if ($(".sortable-gallery .gallery-filters").length) {
            var $container = $('.gallery-container');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });

            $(".gallery-filters li a").on("click", function () {
                $('.gallery-filters li .current').removeClass('current');
                $(this).addClass('current');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
        }
    }

    sortingGallery();

    /*------------------------------------------
        = MASONRY GALLERY SETTING
    -------------------------------------------*/
    function masonryGridSetting() {
        if ($('.masonry-gallery').length) {
            var $grid = $('.masonry-gallery').masonry({
                itemSelector: '.grid-item',
                columnWidth: '.grid-item',
                percentPosition: true
            });

            $grid.imagesLoaded().progress(function () {
                $grid.masonry('layout');
            });
        }
    }

    /* comment from js */
       document.addEventListener('DOMContentLoaded', function () {
        let form = document.getElementById('commentForm');
    
         if (form) {
            form.addEventListener('submit', function (event) {
    
                clearErrors();
    
                let isValid = true;
    
                if (!form.name.value.trim()) {
                    showError('nameError', 'Name is required.');
                    isValid = false;
                }
    
                if (!form.email.validity.valid) {
                    showError('emailError', 'Please enter a valid email address.');
                    isValid = false;
                }
    
                if (!form.phone.validity.valid) {
                    showError('phoneError', 'Phone number must be 10 digits.');
                    isValid = false;
                }
    
                if (!form.website.validity.valid) {
                    showError('websiteError', 'Please enter a valid URL.');
                    isValid = false;
                }
    
                if (!form.comment.value.trim()) {
                    showError('commentError', 'Message is required.');
                    isValid = false;
                }
    
                if (!isValid) {
                    event.preventDefault();
                } else {
                    document.getElementById('submit').disabled = true;
                    document.getElementById('loading').style.display = 'block';
    
                    setTimeout(function () {
                        document.getElementById('loading').style.display = 'none';
                        document.getElementById('submit').disabled = false; n
    
    
                        alert('Form submitted successfully!');
                    }, 3000);
                }
            });
        } else {
    
        }
    
        function showError(fieldId, message) {
            document.getElementById(fieldId).textContent = message;
        }
    
        function clearErrors() {
            const errorFields = document.querySelectorAll('.error-message');
            errorFields.forEach(function (errorField) {
                errorField.textContent = '';
            });
        }
       });

    /*------------------------------------------
      = FUNFACT
    -------------------------------------------*/
     if ($(".odometer").length) {
        $('.odometer').appear();
        $(document.body).on('appear', '.odometer', function (e) {
            var odo = $(".odometer");
            odo.each(function () {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        });
    }

    /*------------------------------------------
        = STICKY HEADER
    -------------------------------------------*/

    // ====== Clone Function ======
function cloneNavForSticky($ele, $newElmClass) {
    $ele.addClass('original')
        .clone()
        .insertAfter($ele)
        .addClass($newElmClass)
        .removeClass('original');
}

// ====== Clone Headers ======
if ($('.wpo-site-header .navigation').length && !$('.header-bottom-style').length) {
    // Normal header
    cloneNavForSticky($('.wpo-site-header .navigation'), "sticky-header");
}

if ($('.header-bottom-style .wpo-site-header .navigation').length) {
    // Bottom-style header
    cloneNavForSticky($('.header-bottom-style .wpo-site-header .navigation'), "sticky-header-bottom");
}

// ====== Sticky Functions ======
var lastScrollTop = 0;

// Normal sticky (show on scroll up, hide on scroll down)
function stickyMenu($targetMenu, $toggleClass) {
    var st = $(window).scrollTop();

    if (st > 900) {
        if (st > lastScrollTop) {
            // scrolling down -> hide
            $targetMenu.removeClass($toggleClass);
        } else {
            // scrolling up -> show
            $targetMenu.addClass($toggleClass);
        }
    } else {
        $targetMenu.removeClass($toggleClass);
    }

    lastScrollTop = st;
  }

    // Bottom-style sticky (always show after 900px)
    function stickyMenuBottom($targetMenu, $toggleClass) {
    var st = $(window).scrollTop();

    if (st > 900) {
        $targetMenu.addClass($toggleClass);
      } else {
        $targetMenu.removeClass($toggleClass);
      }

      lastScrollTop = st;
    }

        /*------------------------------------------
        = Header shopping cart toggle
    -------------------------------------------*/
    if ($(".mini-cart").length) {
        var cartToggleBtn = $(".cart-toggle-btn");
        var cartContent = $(".mini-cart-content");
        var cartCloseBtn = $(".mini-cart-close");
        var body = $("body");

        cartToggleBtn.on("click", function (e) {
            cartContent.toggleClass("mini-cart-content-toggle");
            e.stopPropagation();
        });

        cartCloseBtn.on("click", function (e) {
            cartContent.removeClass("mini-cart-content-toggle");
            e.stopPropagation();
        });

        body.on("click", function () {
            cartContent.removeClass("mini-cart-content-toggle");
        }).find(cartContent).on("click", function (e) {
            e.stopPropagation();
        });
    }

    /*------------------------------------------
            = Header search toggle
     -------------------------------------------*/
    if ($(".header-search-form-wrapper").length) {
        var searchToggleBtn = $(".search-toggle-btn");
        var searchToggleBtnIcon = $(".search-toggle-btn i");
        var searchContent = $(".header-search-form");
        var body = $("body");

        searchToggleBtn.on("click", function (e) {
            searchContent.toggleClass("header-search-content-toggle");
            searchToggleBtnIcon.toggleClass("fi flaticon-magnifying-glass fi ti-close");
            e.stopPropagation();
        });

        body.on("click", function () {
            searchContent.removeClass("header-search-content-toggle");
        }).find(searchContent).on("click", function (e) {
            e.stopPropagation();
        });
    }

    /*------------------------------------------
        = SHOP DETAILS PAGE PRODUCT SLIDER
    -------------------------------------------*/
    if ($(".shop-single-slider").length) {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav',
        });
        $('.slider-nav').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            vertical: true,
            verticalSwiping: true,
            focusOnSelect: true,
            arrows: false,

            responsive: [
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 5,
                        infinite: true
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 5
                    }
                }
            ]

        });
    }

    /*----------------------------
        = SHOP PRICE SLIDER
    ------------------------------ */
    if ($("#slider-range").length) {
        $("#slider-range").slider({
            range: true,
            min: 12,
            max: 200,
            values: [0, 100],
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });

        $("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));
    }

    /*------------------------------------------
        = TOUCHSPIN FOR PRODUCT SINGLE PAGE
    -------------------------------------------*/
    if ($("input[name='product-count']").length) {
        $("input[name='product-count']").TouchSpin({
            verticalbuttons: true
        });
    }

    /*-----------------------
       cart-plus-minus-button 
    -------------------------*/
    $(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
    $(".qtybutton").on("click", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find("input").val(newVal);
    });

    /*------------------------------------------
       = BACK TO TOP BTN SETTING
   -------------------------------------------*/
    $("body").append("<a href='#' class='back-to-top'><i class='ti-arrow-up'></i></a>");

    function toggleBackToTopBtn() {
        var amountScrolled = 1000;
        if ($(window).scrollTop() > amountScrolled) {
            $("a.back-to-top").fadeIn("slow");
        } else {
            $("a.back-to-top").fadeOut("slow");
        }
    }

    $(".back-to-top").on("click", function () {
        $("html,body").animate({
            scrollTop: 0
        }, 700);
        return false;
    })

    /*------------------------------------------
        = CONTACT FORM SUBMISSION
    -------------------------------------------*/
    if ($("#contact-form-main").length) {
        $("#contact-form-main").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },

                email: "required",

                phone: "required",

                adress: "required",

                guest: "required",

                meal: "required",

                date: "required",

                what: "required",

                service: "required",
            },

            messages: {
                name: "Please enter your name",
                email: "Please enter your email address",
                phone: "Please enter your phone number",
                adress: "Please enter your adress",
                guest: "Please select your guest Number",
                meal: "Please select your Meal Name",
                date: "Please select your Date",
                what: "Please select your Reason",
                service: "Please select your Service"
            },

            submitHandler: function (form) {
                $.ajax({
                    type: "POST",
                    url: "mail-contact.php",
                    data: $(form).serialize(),
                    success: function () {
                        $("#loader").hide();
                        $("#success").slideDown("slow");
                        setTimeout(function () {
                            $("#success").slideUp("slow");
                        }, 3000);
                        form.reset();
                    },
                    error: function () {
                        $("#loader").hide();
                        $("#error").slideDown("slow");
                        setTimeout(function () {
                            $("#error").slideUp("slow");
                        }, 3000);
                    }
                });
                return false; // required to block normal submit since you used ajax
            }
        });
    }

    /*------------------------------------------
        = CONTACT FORM SUBMISSION2
    -------------------------------------------*/
    if ($("#contact-form").length) {
        $("#contact-form").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },

                email: "required",

                phone: "required",

                address: "required",

                subject: {
                    required: true
                }
            },

            messages: {
                name: "Please enter your name",
                email: "Please enter your email address",
                phone: "Please enter your phone number",
                subject: "Please select your contact subject",
                address: "Please select your address"
            },

            submitHandler: function (form) {
                $.ajax({
                    type: "POST",
                    url: "mail-contact.php",
                    data: $(form).serialize(),
                    success: function () {
                        $("#loader").hide();
                        $("#success").slideDown("slow");
                        setTimeout(function () {
                            $("#success").slideUp("slow");
                        }, 3000);
                        form.reset();
                    },
                    error: function () {
                        $("#loader").hide();
                        $("#error").slideDown("slow");
                        setTimeout(function () {
                            $("#error").slideUp("slow");
                        }, 3000);
                    }
                });
                return false; // required to block normal submit since you used ajax
            }
        });
    }

    // login

    $(".reveal6").on('click', function () {
        var $pwd = $(".pwd6");
        if ($pwd.attr('type') === 'text') {
            $pwd.attr('type', 'password');
        } else {
            $pwd.attr('type', 'text');
        }
    });


    $(".reveal3").on('click', function () {
        var $pwd = $(".pwd2");
        if ($pwd.attr('type') === 'text') {
            $pwd.attr('type', 'password');
        } else {
            $pwd.attr('type', 'text');
        }
    });

    $(".reveal2").on('click', function () {
        var $pwd = $(".pwd3");
        if ($pwd.attr('type') === 'text') {
            $pwd.attr('type', 'password');
        } else {
            $pwd.attr('type', 'text');
        }
    });

    /*==========================================================================
        WHEN DOCUMENT LOADING
    ==========================================================================*/
    $(window).on('load', function () {

        preloader();
        masonryGridSetting();
        sortingGallery();

        toggleMobileNavigation();

        smallNavFunctionality();

        smoothScrolling($("#navbar > ul > li > a[href^='#'], .preview-middle-text a.scrool[href^='#'] "), $(".wpo-site-header .navigation, .site-header .nav").innerHeight());
    });

    /*==========================================================================
        WHEN WINDOW SCROLL
    ==========================================================================*/
    $(window).on("scroll", function () {

     // Default header sticky
    if ($(".sticky-header").length) {
        stickyMenu($('.sticky-header'), "sticky-on");
    }

    // Bottom-style sticky
    if ($(".sticky-header-bottom").length) {
        stickyMenuBottom($('.sticky-header-bottom'), "sticky-on");
    }
        toggleBackToTopBtn();

    });

    /*==========================================================================
        WHEN WINDOW RESIZE
    ==========================================================================*/
    $(window).on("resize", function () {
        toggleClassForSmallNav();
        //smallNavFunctionality();

        clearTimeout($.data(this, 'resizeTimer'));
        $.data(this, 'resizeTimer', setTimeout(function () {
            smallNavFunctionality();
        }, 200));
    });

})(window.jQuery);


/* accordion js */
document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', function () {
            const item = this.parentElement;
            const isActive = item.classList.contains('active');

            document.querySelectorAll('.accordion-item').forEach(i => {
                i.classList.remove('active');
            });

            // Toggle the current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});








