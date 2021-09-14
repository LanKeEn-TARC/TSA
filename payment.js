//Get the radio button nasme
var ele= document.getElementsByName("paymentMethod")
    for(var i = 0; i <ele.length; i++) {
        ele[i].onclick = dispCard;
    }

function dispCard(){
    //Which button press to expand
    if (document.getElementById('homeCardButton').checked) {
        console.log('a')
        document.getElementById('home1Card').style.display = 'block';
        document.getElementById('othersCardForm').style.display = 'none';
        document.getElementById('home1Bank').style.display = 'none';
        document.getElementById('othersBankForm').style.display = 'none';
        //qr none
    }
    else if (document.getElementById('othersCardButton').checked) {
        console.log('b')
        document.getElementById('othersCardForm').style.display = 'block';
        document.getElementById('home1Card').style.display = 'none';
        document.getElementById('home2Card').style.display = 'none';
        document.getElementById('home1Bank').style.display = 'none';
        document.getElementById('home2Bank').style.display = 'none';
        document.getElementById('othersBankForm').style.display = 'none';
        //qr none
    }
    else if(document.getElementById('homeBankButton').checked) {
        console.log('c')
        document.getElementById('home1Card').style.display = 'none';
        document.getElementById('othersCardForm').style.display = 'none';
        document.getElementById('home1Bank').style.display = 'block';
        document.getElementById('othersBankForm').style.display = 'none';
        //qr none
    }
    else if(document.getElementById('othersBankButton').checked) {
        console.log('d')
        document.getElementById('othersCardForm').style.display = 'none';
        document.getElementById('home1Card').style.display = 'none';
        document.getElementById('home2Card').style.display = 'none';
        document.getElementById('home1Bank').style.display = 'none';
        document.getElementById('home2Bank').style.display = 'none';
        document.getElementById('othersBankForm').style.display = 'block';
        //qr none

    }
    else if(document.getElementById('ewallet').checked){
        console.log('e')
        document.getElementById('othersCardForm').style.display = 'none';
        document.getElementById('home1Card').style.display = 'none';
        document.getElementById('home2Card').style.display = 'none';
        document.getElementById('home1Bank').style.display = 'none';
        document.getElementById('home2Bank').style.display = 'none';
        document.getElementById('othersBankForm').style.display = 'none';
    }
}
dispCard()

//Card
let cardHtml = '';
let cdCard1 = JSON.parse(localStorage.getItem('details'));
    for(let i = 0; i < cdCard1.length; i++) {
        let cdCard1 = JSON.parse(localStorage.getItem('details'))[i];
        chooseCdCard(cdCard1,i);
    }

function chooseCdCard(cdCard1, no){
//debug
console.log(cdCard1)
    cardHtml += 
    `
        <div>
            <br>
            <button id="${no}">Choose</button>
            Card ${no+1} Details
            <hr>
        </div>
    `
    document.querySelector('#home1Card').innerHTML  = cardHtml;
}

//Caiwen
for(let no = 0 ; no < cdCard1.length; no ++){
    document.getElementById(no).onclick=function()
    {
        console.log('c')
            let cdCard = JSON.parse(localStorage.getItem('details'))[no];
            document.getElementById('home2Card').style.display = 'block';
            console.log(cdCard)
            getCard(cdCard);
    }
}

function getCard(cdCard){
    console.log(cdCard);
    let cardHtml = '';
    cardHtml += 
        `
        <br>
        <div>
            Name of the card: ${cdCard.name}<br><br>
            Card of the number: ${cdCard.number}<br><br>
            Expiry Dated: ${cdCard.date}<br><br>
            Cvv: ***<br><br>
        </div>
        `
      
        document.querySelector('#home2Card').innerHTML = cardHtml;

        let cardDetails = {
            name:cdCard.name,
            number:cdCard.number,
            date:cdCard.date
        };

        localStorage.setItem('comfirmCard', JSON.stringify(cardDetails))

        let finalCardDetails = {
            final_name:cdCard.name,
            final_number:cdCard.number,
            final_date:cdCard.date
        };

        localStorage.setItem('finalCard', JSON.stringify(finalCardDetails))
}

//Caiwen breakpoint
function storeCard(){
        var cardName = document.querySelector("#cardName0"),
        cardNumber = document.querySelector("#cardNumber0"),
        cardDate = document.querySelector("#cardDate0"),
        cardCvv = document.querySelector("#cardCvv0");

        if(cardName.value == "" || cardNumber.value == "" || cardDate.value == "" || cardCvv.value == "" ){
            alert("Fields cannot be empty!");
            return false;
        }
        else if(cardNumber.validity.patternMismatch){
            alert("Invalid card number format!");
            return false;
        }
        else if(cardDate.validity.patternMismatch){
            alert("Invalid card date format!");
            return false;
        }
        else if(cardCvv.validity.patternMismatch){
            alert("Invalid card cvv format!");
            return false;
        }
        else{
            let fullCard0 = {
                card_Name0: cardName.value,
                card_Number0: cardNumber.value,
                card_Date0: cardDate.value,
                card_Cvv0: cardCvv.value,
            };

            console.log(fullCard0);
            localStorage.setItem('paymentDetails', JSON.stringify(fullCard0))

            let finalCard = {
                final_Card_Name0: cardName.value,
                final_Card_Number0: cardNumber.value,
                final_Card_Date0: cardDate.value,
                final_Card_Cvv0: cardCvv.value,
            };

            console.log(finalCard);
            localStorage.setItem('finalCard', JSON.stringify(finalCard))
            console.log('Card is sucessfully added!');
            alert("Card added!");
        };
    };

function resetCard(){
    localStorage.setItem('addressDetailsOrder', JSON.stringify(0))
    alert("Details reset!");
}
//End card


//Bank
let bankHtml = '';
let bank1 = JSON.parse(localStorage.getItem('accounts'));
for(let i = 0; i < bank1.length; i++) {
    let bank1 = JSON.parse(localStorage.getItem('accounts'))[i];
    chooseBank(bank1,i);
}

function chooseBank(bank1, no){
    //debug
    console.log("debug")
    console.log(bank1)
    bankHtml += 
    `
        <div>
            <br>
            <button id="${no}">Choose</button>
            Bank ${no+1} Details
            <hr>
        </div>
    `
    document.querySelector('#home1Bank').innerHTML  = bankHtml;
}

//Caiwen
for(let no = 0 ; no < bank1.length; no ++){
    document.getElementById(no).onclick=function()
    {
        console.log('c')
            let bank = JSON.parse(localStorage.getItem('accounts'))[no];
            document.getElementById('home2Card').style.display = 'block';
            console.log(bank)
            getBank(bank);
    }
}

function getBank(bank){
    console.log(bank);
    let bankHtml = '';
    bankHtml +=
        `
        <br>
        <div>
            Name of the bank accont: ${bank.a_name} <br><br>
            Bank account no: ${bank.a_number} <br><br>
            Bank name: ${bank.a_bank} <br><br>
        </div>
        `
        document.querySelector('#home2Bank').innerHTML = bankHtml;

        let bankDetails = {
            name:bank.a_name,
            account:bank.a_number,
            bankName:bank.a_bank
        };

        localStorage.setItem('comfirmBank', JSON.stringify(bankDetails))

        let finalBankDetails = {
            final_name:bank.a_name,
            final_account:bank.a_number,
            final_bankName:bank.a_bank
        };

        localStorage.setItem('finalBank', JSON.stringify(finalBankDetails))
}
//fix button id maybe / sleep
//Caiwen breakpoint
//End Bank






