$(document).ready(function () {
initCarousels();
function initCarousels() {
    $('.carousel').slick(getCarouselOptions());
}
function getCarouselOptions() {
    return {
        speed: 300,
        slidesToScroll: 1,
    }
}
});