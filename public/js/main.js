// Enter your client-side JavaScript here

$(document).ready(function() {

    var $numInput1 = $('#js-numInput1');
    var $numInput2 = $('#js-numInput2');

    var num1 = $numInput1.val() || 0;
    var num2 = $numInput2.val() || 0;

    var newURI = '';

    $numInput1.on('change', function(e) {
        e.preventDefault();
        num1 = e.target.value || 0;
        newURI = '/?num1=' + num1 + '&num2=' + num2;
    });

    $numInput2.on('change', function(e) {
        e.preventDefault();
        num2 = e.target.value || 0;
        newURI = '/?num1=' + num1 + '&num2=' + num2;
    });

    $('form').submit(function(e) {
        e.preventDefault();

        window.location.href = newURI;
    });

});
