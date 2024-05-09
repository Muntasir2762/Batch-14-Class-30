function sum(){
    event.preventDefault();
    let x = document.getElementById('number1').value; //'60'
    let y = document.getElementById('number2').value; //'65'

    let result = parseFloat(x)+parseFloat(y);
    document.getElementById('result').innerHTML = 'The result is='+result;
    console.log('The result is='+result);
}

console.log('hzdgfd'+'ksjdhdsj');