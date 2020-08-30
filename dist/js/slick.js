$(document).ready(function () {
initCarousels();
function initCarousels() {
    $('.carousel1').slick(getCarouselOptions());
}
function getCarouselOptions() {
    return {
        speed: 300,
        slidesToScroll: 1,
    }
}
});