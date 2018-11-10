//onscroll

window.onscroll = function () {
    myFunction()
};

function myFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("myNav").className = "active";
    } else {
        document.getElementById("myNav").className = "";
    }
}

// Menu For Xs Mobile Screens

if ($(window).height() < 500) {
    $('#slide_out_menu').addClass('xs-screen');
}

$(window).on('resize', function () {
    if ($(window).height() < 500) {
        $('#slide_out_menu').addClass('xs-screen');
    } else {
        $('#slide_out_menu').removeClass('xs-screen');
    }
});

//wow

new WOW().init();

//dropdown menu

function togglemenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

//bxSlider

$(document).ready(function () {
    $('.slider').bxSlider({
        auto: true,
        // pager: false,
        pagerCustom: '.bx-custom-pager'
    });
});

// Price Table

var individual_price_table = $('#price_tables').find('.individual');
var company_price_table = $('#price_tables').find('.company');


$('.switch-toggles').find('.individual').addClass('active');
$('#price_tables').find('.individual').addClass('active');

$('.switch-toggles').find('.individual').on('click', function () {
    $(this).addClass('active');
    $(this).closest('.switch-toggles').removeClass('active');
    $(this).siblings().removeClass('active');
    individual_price_table.addClass('active');
    company_price_table.removeClass('active');
});

$('.switch-toggles').find('.company').on('click', function () {
    $(this).addClass('active');
    $(this).closest('.switch-toggles').addClass('active');
    $(this).siblings().removeClass('active');
    company_price_table.addClass('active');
    individual_price_table.removeClass('active');
});