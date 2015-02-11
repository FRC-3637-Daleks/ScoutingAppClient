$(document).ready(function(e) {
    $(this).has('input').addClass('check');
});

$('.check').click(function(e) {
    alert('clicked');
});