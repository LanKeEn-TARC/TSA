const addCardButton = document.getElementsByClassName('bnc--saveCard');

var cardHistory = JSON.parse(localStorage.getItem('details'));
var Card = cardHistory || [];

for(var i = 0; i < addCardButton.length; i++){
    let saveCardButton = addCardButton[i];
    saveCardButton.addEventListener('click',() => {
        var cardNumber = document.querySelector("#cardNumber").value,
        cardName = document.querySelector("#cardName").value,
        cardDate = document.querySelector("#cardDate").value,
        cardCvv = document.querySelector("#cardCvv").value;
        var number = document.getElementById("cardNumber"),
        date = document.getElementById("cardDate"),
        cvv = document.getElementById("cardCvv");
    
        if(cardNumber == "" || cardName == "" || cardDate == "" || cardCvv == ""){
            alert("Fields cannot be empty!");
            return false;
        }
        else if(number.validity.patternMismatch){
            alert("Invalid card number format!");
            return false;
        }
        else if(date.validity.patternMismatch){
            alert("Invalid expired date format!");
            return false;
        }
        else if(cvv.validity.patternMismatch){
            alert("CVV value must be a number!");
            return false;
        }
        else {
            let cardDetails = {
                name: cardName,
                number: cardNumber,
                date: cardDate,
                cvv: cardCvv
            };
    
            //debug
            console.log(cardDetails);
            addCardDetailsToLocalStorage(cardDetails);
            alert("Card added sucessfully!")
            document.querySelector('.bnc__addCard').style.display = 'none';
            document.querySelector('.bnc__background_overlay').style.display = 'none';
        };
    });
};

function addCardDetailsToLocalStorage(cardDetails){
    //debug
    console.log(cardDetails);

    Card.push(cardDetails);
    //debug
    console.log(Card);

    localStorage.setItem('details', JSON.stringify(Card));

    //debug
    console.log(cardDetails.name + ' is sucessfully added!');
    displayCard();
};

function displayCard(){
    let recycleView = '';
    // let details = localStorage.cardDetails;
    let details = JSON.parse(localStorage.getItem('details'));
    //debug
    console.log(details);
    details && details.forEach(item => {
        recycleView += 
        `
        <tr>
            <td>${item.name}</td>
            <td>${item.number}</td>
            <td>${item.date}</td>
            <td class="bnc__card--delete" data-id="${item.number}"><i class="fas fa-trash-alt"></i></td>
        </tr>
        `
    });
    
    document.querySelector('.bnc__card--tbody').innerHTML = recycleView;

    document.querySelectorAll('.bnc__card--delete').forEach(function(deleteCard){
        deleteCard.addEventListener('click',async() => {

            const id = deleteCard.getAttribute("data-id");

            const deletedArray = await Card.filter(function(data){
                return data.number !== id;
            });

            Card = deletedArray;
            localStorage.setItem('details', JSON.stringify(deletedArray));
            displayCard();
        });
    });
};
displayCard();