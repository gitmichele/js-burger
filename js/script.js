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

    // variabile che richiama tutti i checkbox
    var checkboxList = document.getElementsByClassName('whichIngr');
    // costo panino di partenza
    var totalPrice = 10;

    // vado a cercare i checbox attivi
    for (var i=0; i<checkboxList.length; i++){

        // variabile per i checkbox attvi/non attivi
        var isChecked = checkboxList[i].checked;
        //  var per il costo di ogni ingediente
        var ingrCost = parseInt(checkboxList[i].dataset.cost);

        // se checkbox attivo aggiungo al prezzo di base il costo dell'ingrediente
        if (isChecked){
            totalPrice += ingrCost;
        }
    }

    // stampo il prezzo nel footer
    var yourPrice = document.getElementById('yourPrice');
    yourPrice.innerHTML = totalPrice;


});