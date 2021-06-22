$(".hamburgerIcon").click(function() {
    $(".navlinks__mobile").toggleClass("hidden");
    $("body").toggleClass("lock");
})

$(".navlinks__mobile__link").click(function() {
    $("body").toggleClass("lock");
    $(".navlinks__mobile").toggleClass("hidden");
})

$(".exit").click(function() {
    $(".navlinks__mobile").toggleClass("hidden");
    $("body").toggleClass("lock");
})