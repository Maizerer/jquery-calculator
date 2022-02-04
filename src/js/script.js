$(document).ready(function(){

    const input = $('#input')

    $('#clear').click(function() {
        input.val('')
    });

    $('#divider').click(function() {
        let inputValue = input.val()
        input.val(inputValue + ',')
    });

    $('#one').click(function() {
        let inputValue = input.val()
        input.val(inputValue + '1')
    });
    $('#two').click(function() {
        let inputValue = input.val()
        input.val(inputValue + '2')
    });
    $('#three').click(function() {
        let inputValue = input.val()
        input.val(inputValue + '3')
    });
    $('#four').click(function() {
        let inputValue = input.val()
        input.val(inputValue + '4')
    });
    $('#five').click(function() {
        let inputValue = input.val()
        input.val(inputValue + '5')
    });
    $('#six').click(function() {
        let inputValue = input.val()
        input.val(inputValue + '6')
    });
    $('#seven').click(function() {
        let inputValue = input.val()
        input.val(inputValue + '7')
    });
    $('#eight').click(function() {
        let inputValue = input.val()
        input.val(inputValue + '8')
    });
    $('#nine').click(function() {
        let inputValue = input.val()
        input.val(inputValue + '9')
    });
    $('#zero').click(function() {
        let inputValue = input.val()
        input.val(inputValue + '0')
    });
})
