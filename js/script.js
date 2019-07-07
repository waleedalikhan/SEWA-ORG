// Preloader
$(window).on('load', function() {
    $('#status').fadeOut('slow')
    $('#preloader').delay(450).fadeOut('slow')
});
// Team
$(function(){
    $('#team-members').owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"> </i>', '<i class="fa fa-angle-right"></i>']
    })
});
// Progress Bar
$(function() {

    $('#progress-elements').waypoint(function(){
        $('.progress-bar').each(function() {

            $(this).animate({width: $(this).attr('aria-valuenow') + '%'}, 2000)
        })
        this.destroy()
    }, { 
        offset: 'bottom-in-view'
        })
})
// Progress Bar Ends
// Responsive Tabs
$(function() {
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    })
})
// Responsive Tab Ends
// Filters
$(window).on('load', function() {
    // Initializing Isotope
    $('#isotope-container').isotope({
    });
    // Filtering buttons
    $('#isotope-filters').on('click', 'button', function() {
       var filterValue = $(this).attr('data-filter');
       $('#isotope-container').isotope({
          filter: filterValue
        });
        $('#isotope-filters').find('.active').removeClass('active')
        $(this).addClass('active');
    });
});
// Magnifier
$(function() {
    $('#portfolio-wrapper').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
      });
})
// Testimonial Slider
$(function(){
    $('#testimonial-slider').owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"> </i>', '<i class="fa fa-angle-right"></i>']
    })
});
// CounterUp Effect
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    })
})
// Client logo slider
$(function(){
    $('#client-list').owlCarousel({
        items: 5,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"> </i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 5
            }
        }
    })
});
// Google Map
$(window).on('load', function() {

    // Map variables
    var addressString = '230 Broadway, NY, New York 10007, USA';
    var myLatlng = {lat: 40.712685, lng: -74.005920};

    // 1. Render Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatlng
    });

       var marker = new google.maps.Marker({
        position: myLatlng,
        map: map
    })

       var infowindow = new google.maps.InfoWindow({
        content: addressString
    })
    marker.addListener('click', function () {
        infowindow.open(map, marker)
    })
});
// Navigation
$(function() {
    $(window).scroll(function() {
        if($(window).scrollTop() > 50) {
            $('nav').addClass('white-nav-top')
            $('.navbar-brand img').attr('src', 'img/logo/logo-dark.png')
            $('#back-to-top').fadeIn()
        } else{
            $('nav').removeClass('white-nav-top')
            $('.navbar-brand img').attr('src', 'img/logo/logo.png')
            $('#back-to-top').fadeOut()
        }
    })
})
// Smooth Scrolling
$(function() {
    $("a.smooth-scroll").click(function(event) {
        event.preventDefault()
        // get section id
        var section_id = $(this).attr('href')
        $('html, body').animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1300, 'easeInOutExpo')
    })
})
// Mobile Menu
$(function () {
    // Show nav
    $('#mobile-nav-btn').click(function() {
        $('#mobile-nav').css('height', '100%')
    })
    // Hide nav
    $('#mobile-nav-close-btn, #mobile-nav a').click(function() {
        $('#mobile-nav').css('height', '0%')
    })
})
// Wow js
$(function() {
    new WOW().init()
})
$(window).on('load', function() {
    $('#home-heading-1').addClass('animated fadeInDown')
    $('#home-heading-2').addClass('animated fadeInLeft')
    $('#home-text').addClass('animated zoomIn')
    $('#home-btn').addClass('animated zoomIn')
    $('#arrow-down i').addClass('animated fadeInDown infinite')
})






