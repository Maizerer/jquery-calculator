$(document).ready(function(){
    const input = $('#input')
    const error = $('#error')

    $('#clear').click(function() {
        input.val('')
    });
    $('#divider').click(function() {
        let inputValue = input.val()
        if(inputValue.includes('.') || inputValue.length <1){
            return
        }
        input.val(inputValue + '.')
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

    let activeAction = null
    let operand1 = null
    let operand2 = null
    let result = null
    $('#plus').click(function() {
        if(input.val().length < 1){
            return
        }
        activeAction = 1
        operand1 = input.val()
        input.val('')
    });
    $('#subtract').click(function() {
        if(input.val().length < 1){
            return
        }
        activeAction = 2
        operand1 = input.val()
        input.val('')
    });
    $('#multiply').click(function() {
        if(input.val().length < 1){
            return
        }
        activeAction = 3
        operand1 = input.val()
        input.val('')
    });
    $('#remains').click(function() {
        if(input.val().length < 1){
            return
        }
        activeAction = 4
        operand1 = input.val()
        input.val('')
    });
    $('#divide').click(function() {
        if(input.val().length < 1){
            return
        }
        activeAction = 5
        operand1 = input.val()
        input.val('')
    });

    $('#degree').click(function() {
        if(input.val().length < 1){
            return
        }
        activeAction = 6
        operand1 = input.val()
        input.val('')
    });

    $('#root').click(function() {
        if(input.val().length < 1){
            return
        }
        let value = parseFloat(input.val())
        let res = Math.sqrt(value)
        input.val(res)
        clearError()
        clearApp()
    });

    $('#result').click(function() {
        if(input.val().length < 1){
            return
        }
        operand2 = input.val()
        calculate()
    });

    function calculate(){
        clearError()
        if(activeAction === null || operand1 === null || operand2 === null){
            return
        }
        operand1 = parseFloat(operand1)
        operand2 = parseFloat(operand2)
        if(activeAction === 1){
            result = operand1 + operand2
        }
        if(activeAction === 2){
            result = operand1 - operand2
        }
        if(activeAction === 3){
            result = operand1 * operand2
        }
        if(activeAction === 4){
            result = operand1 % operand2
        }
        if(activeAction === 5){
            if(operand2 !== 0){
                result = operand1 / operand2
            }else {
                error.text('Ошибка: деление на ноль')
                clearApp()
            }
        }
        if(activeAction === 6){
            result = Math.pow(operand1, operand2)
        }
        input.val(result)
        clearApp()
    }

    function clearApp(){
        operand2 = null
        operand1 = null
        activeAction = null
        result = null
    }
    function clearError(){
        error.text('')
    }
})
