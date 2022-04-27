$(document).ready(function () {

    $(".menu").on("click", () => {
        $(".navigation-items").toggleClass("navigation-items-show");
    });

    $(".ctlBtn").on("click", () => {
        $(".ctl").slideToggle();
    });

    $(".ctlBtn2").on("click", () => {
        $(".ctl2").slideToggle();
    });

});

window.addEventListener('DOMContentLoaded', function() {
    const add = document.querySelector('#add');
    const closeadd = document.querySelector('.closeAdd');

    closeadd.addEventListener("click",function () {
        add.style.opacity = '0'
        add.style.visibility = 'hidden' 
    });

    setTimeout( function () {
        add.style.opacity = '1'
        add.style.visibility = 'visible'
    }, 15000);

    setTimeout( function () {
        add.style.opacity = '0'
        add.style.visibility = 'hidden'
    }, 70000);
});
