// Hide items
$('.content-of-uls').hide(); // Hide ULs

// Download CV

function changeUrl(url) {
    window.location.href = url;

}
$('.download').click(function () {
    window.location.href = 'path';
});

// Toggle xBox list
$('.xbox h4').click(function () {
    $(this).next('.content-of-uls').slideToggle(800);
    if ($(this).children('.open').hasClass('fa-chevron-down')) {
        $(this).children('.open').removeClass('fa-chevron-down');
        $(this).children('.open').addClass('fa-chevron-up');
    }
    else {
        $(this).children('.open').removeClass('fa-chevron-up');
        $(this).children('.open').addClass('fa-chevron-down');
    }
});