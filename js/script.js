$(function() {
    $('body').removeClass('fade-out');
});

// scroll down script - ?
$(function down() {
    window.scrollY - 300;
});

$('.collapse').on('hidden.bs.collapse', function() {
    var defaultDiv = $($(this).data("parent")).data("default");
    $('.collapse').eq(defaultDiv - 1).collapse('show');
});

function submit() {
    alert("test");
}