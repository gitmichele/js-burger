// variabile che richiama il bottone calculate
var calcBtn = document.getElementById('calcBtn');

// listener for click on calcBtn
calcBtn.addEventListener('click', function(){

    // variabile che richiama contenuto input burgerName
    var burgerName = document.getElementById('burgerName').value;
    
    // controllo che sia stato inserito del testo nell'input
    if (burgerName == ''){

        alert('Please give your burger a name')
    }

});