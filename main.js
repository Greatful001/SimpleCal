
let buttons = document.querySelectorAll('.btn');
let screen = document.querySelector('.screen');
let equal = document.querySelector('.equal-btn');
let clear = document.querySelector('.clear-btn');
let del = document.querySelector('.del-btn');

buttons.forEach(function(button) {
    button.addEventListener('click', function(e){
    let number = e.target.value;
    screen.value += number;

    })
});


equal.addEventListener('click', function (e) {
    if (screen.value === '') {
        alert("Enter any value to calculate");
    }else{
        screen.value = eval(screen.value);
   
    }
    
    });


    clear.addEventListener('click', function (e) {
        screen.value = "";
    });
    

    del.addEventListener('click',function (e) {
        screen.value = screen.value.slice(0,-1);
    })
