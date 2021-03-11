// variabile che richiama il bottone calculate
var calcBtn = document.getElementById('calcBtn');

// listener for click on calcBtn
calcBtn.addEventListener('click', function(){

    // variabile che richiama contenuto input burgerName
    var burgerName = document.getElementById('burgerName').value;
    // costo base panino
    var totalPrice = 10;
    
    // controllo che sia stato inserito del testo nell'input
    if (burgerName == ''){

        alert('Please give your burger a name')
    }

    // variabile che richiama tutti i checkbox
    var checkboxList = document.getElementsByClassName('whichIngr');


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

    // array coupon sconto
    var couponList = [
        'ASDC123D23',
        'FINF23F323',
        '394FRE90RI'
    ]
    // var coupon input
    var couponInput = document.getElementById('couponInput').value;

    // controllo se input coupon corrisponde a uno dei coupon della lista
    for (i=0; i<couponList.length; i++){

        if (couponInput == couponList[i]){

            // sconto del 20%
            var discount = totalPrice * .2;
            // tolgo lo sconto dal prezzo final
            totalPrice -= discount;
        }
    }

    // stampo il nome del panino nel footer
    var changeFooterWrite = document.getElementById('changeFooterWrite');
    var burgerNameFooter = document.getElementById('burgerNameFooter');
    changeFooterWrite.innerHTML = 'Your price for ';
    burgerNameFooter.innerHTML = burgerName;
    burgerNameFooter.style.textTransform = 'uppercase'

    // stampo il prezzo finale nel footer
    var yourPrice = document.getElementById('yourPrice');
    yourPrice.innerHTML = totalPrice;
});

// checkbox si attivano/disattivano cliccando su qualsiasi componente dei vari li#
var listObj = document.getElementsByTagName('li');

for (var i=0; i<listObj.length; i++){

    listObj[i].addEventListener('click', function() {

        // this mi posiziona all'interno del li su cui clicco
        // .children seleziona i tag figli
        // [1] seleziona il tag figlio al secondo posto cioe il checkbox
        var clickCheck = this.children[1];
        
        // on click, se il checkbox.checked ha la spunta allora la toglie
        // e viceversa
        clickCheck.checked = !clickCheck.checked;
    });
}
