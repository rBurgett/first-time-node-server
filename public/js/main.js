// Enter your client-side JavaScript here

$(document).ready(function() {
    var num1 = 0;
    var num2 = 0;

    var newURI = '';

    $('#js-numInput1').on('change', function(e) {
        e.preventDefault();
        num1 = e.target.value || 0;
        newURI = '/?num1=' + num1 + '&num2=' + num2;
    });

    $('#js-numInput2').on('change', function(e) {
        e.preventDefault();
        num2 = e.target.value || 0;
        newURI = '/?num1=' + num1 + '&num2=' + num2;
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        window.location.href = newURI;
    });

});
