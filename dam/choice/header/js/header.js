// window.onscroll = function () { myFunction() };

// var navbar = document.getElementById("myHeader");
// var sticky = navbar.offsetTop;

// function myFunction() {
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("sticky")
//     } else {
//         navbar.classList.remove("sticky");
//     }
// }

$(document).ready(function () {

    if (window.matchMedia("(min-width: 767px)").matches) {

        (function ($) {
            $.fn.tab = function (options) {
                var opts = $.extend({}, $.fn.tab.defaults, options);
                return this.each(function () {
                    var obj = $(this);

                    $(obj).find('.tab_header_links li').on(opts.trigger_event_type, function () {
                        $(obj).find('.tab_header_links li').removeClass('active');
                        $(this).addClass('active');

                        $(obj).find('.tabContent .tabItem').hide();
                        $(obj).find('.tabContent .tabItem').eq($(this).index()).show();
                    })
                });
            }
            $.fn.tab.defaults = {
                trigger_event_type: 'mouseover'
            };
        })(jQuery);

    }

    // $(".searchBtn").click(function () {
    //     $(".search_container").toggleClass("open");
    // });

    // if (window.matchMedia("(max-width: 767px)").matches) {

    //     $(".hamburger").click(function () {
    //         $(".hamburger").toggleClass("active");
    //         $(".navigation").toggleClass("active");
    //         $(".dropdown_nav").removeClass("active");
    //     });

    //     $('.m_nav').click(function () {
    //         $(this).next().addClass("active");
    //     });

    //     $('.back_btn').click(function () {
    //         $(".dropdown_nav").removeClass("active");
    //     });

    //     $('header .navigation nav ul li .dropdown_nav .sub_nav h3').click(function () {
    //         $(this).next().slideToggle();
    //         $(this).toggleClass("arrowRotate");
    //     });

    // }

    // $('.m_header_links').click(function () {
    //     $(this).next().slideToggle();
    //     $(this).toggleClass("active");
    // });

    $('.headerTabsLifeInsurance, .headerTabsTaxUniversity, .headerTabsBlog, .headerTabsCustomerService, .headerTabsCalc, .headerTabsAboutUs').tab();
});