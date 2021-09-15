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
        document.getElementById('home2Card').style.display = 'none';
        document.getElementById('othersCardForm').style.display = 'none';
        document.getElementById('home1Bank').style.display = 'none';
        document.getElementById('home2Bank').style.display = 'none';
        document.getElementById('othersBankForm').style.display = 'none';
        document.getElementById('PaymentContainer').style.display = 'none';
        document.getElementById('EvidenceInput').style.display = 'none';
    }
    else if (document.getElementById('othersCardButton').checked) {
        console.log('b')
        document.getElementById('home1Card').style.display = 'none';
        document.getElementById('home2Card').style.display = 'none';
        document.getElementById('othersCardForm').style.display = 'block';
        document.getElementById('home1Bank').style.display = 'none';
        document.getElementById('home2Bank').style.display = 'none';
        document.getElementById('othersBankForm').style.display = 'none';
        document.getElementById('PaymentContainer').style.display = 'none';
        document.getElementById('EvidenceInput').style.display = 'none';
    }
    else if(document.getElementById('homeBankButton').checked) {
        console.log('c')
        document.getElementById('home1Card').style.display = 'none';
        document.getElementById('home2Card').style.display = 'none';
        document.getElementById('othersCardForm').style.display = 'none';
        document.getElementById('home1Bank').style.display = 'block';
        document.getElementById('home2Bank').style.display = 'none';
        document.getElementById('othersBankForm').style.display = 'none';
        document.getElementById('PaymentContainer').style.display = 'none';
        document.getElementById('EvidenceInput').style.display = 'none';
    }
    else if(document.getElementById('othersBankButton').checked) {
        console.log('d')
        document.getElementById('home1Card').style.display = 'none';
        document.getElementById('home2Card').style.display = 'none';
        document.getElementById('othersCardForm').style.display = 'none';
        document.getElementById('home1Bank').style.display = 'none';
        document.getElementById('home2Bank').style.display = 'none';
        document.getElementById('othersBankForm').style.display = 'block';
        document.getElementById('PaymentContainer').style.display = 'none';
        document.getElementById('EvidenceInput').style.display = 'none';

    }
    else if(document.getElementById('ewallet').checked){
        console.log('e')
        document.getElementById('home1Card').style.display = 'none';
        document.getElementById('home2Card').style.display = 'none';
        document.getElementById('othersCardForm').style.display = 'none';
        document.getElementById('home1Bank').style.display = 'none';
        document.getElementById('home2Bank').style.display = 'none';
        document.getElementById('othersBankForm').style.display = 'none';
        document.getElementById('PaymentContainer').style.display = 'block';
        document.getElementById('EvidenceInput').style.display = 'block';
    }
    else{
        console.log('f')
        document.getElementById('home1Card').style.display = 'none';
        document.getElementById('home2Card').style.display = 'none';
        document.getElementById('othersCardForm').style.display = 'none';
        document.getElementById('home1Bank').style.display = 'none';
        document.getElementById('home2Bank').style.display = 'none';
        document.getElementById('othersBankForm').style.display = 'none';
        document.getElementById('PaymentContainer').style.display = 'none';
        document.getElementById('EvidenceInput').style.display = 'none';
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
            <button id="card${no}">Choose</button>
            Card ${no+1} Details
            <hr>
        </div>
    `
    document.querySelector('#home1Card').innerHTML  = cardHtml;
}

//Caiwen
for(let no = 0 ; no < cdCard1.length; no ++){
    document.getElementById("card"+no).onclick=function()
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
            date:cdCard.date,
            cvv:cdCard.cvv
        };

        localStorage.setItem('comfirmCard', JSON.stringify(cardDetails))

        let finalCardDetails = {
            finalName:cdCard.name,
            finalNumber:cdCard.number,
            finalDate:cdCard.date,
            finalCvv:cdCard.cvv
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
            localStorage.setItem('paymentCard', JSON.stringify(fullCard0))

            let finalCard = {
                finalName: cardName.value,
                finalNumber: cardNumber.value,
                finalDate: cardDate.value,
                finalCvv: cardCvv.value,
            };

            console.log(finalCard);
            localStorage.setItem('finalCard', JSON.stringify(finalCard))
            console.log('Card is sucessfully added!');
            alert("Card added!");
        };
    };

function resetCard(){
    localStorage.setItem('paymentCard', JSON.stringify(0))
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
            <button id="bank${no}">Choose</button>
            Bank ${no+1} Details
            <hr>
        </div>
    `
    document.querySelector('#home1Bank').innerHTML  = bankHtml;
}

//Caiwen
for(let no = 0 ; no < bank1.length; no ++){
    document.getElementById("bank"+no).onclick=function()
    {
        console.log('c')
            let bank = JSON.parse(localStorage.getItem('accounts'))[no];
            document.getElementById('home2Bank').style.display = 'block';
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
            Bank account holder: ${bank.a_name} <br><br>
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
function storeBank(){
    var bankHolder = document.querySelector("#bankHolder0"),
    bankNumber = document.querySelector("#bankNumber0"),
    bankName = document.querySelector("#bankName0");

    if(bankHolder.value == "" || bankNumber.value == "" || bankName.value == "" ){
        alert("Fields cannot be empty!");
        return false;
    }
    else{
        let fullBank0 = {
            bank_Name0: bankHolder.value,
            bank_Account0: bankNumber.value,
            bank_bankName0: bankName.value,
        };

        console.log(fullBank0);
        localStorage.setItem('paymentBank', JSON.stringify(fullBank0))

        let finalBank = {
            finalbank_Name0: bankHolder.value,
            finalbank_Account0: bankNumber.value,
            finalbank_bankName0: bankName.value,
        };

        console.log(finalBank);
        localStorage.setItem('finalBank', JSON.stringify(finalBank))
        console.log('Bank is sucessfully added!');
        alert("Bank added!");
    };
};

function resetBank(){
    localStorage.setItem('paymentBank', JSON.stringify(0))
    alert("Details reset!");
}
//End Bank

//Qr
let qrHtml = '';
function displayQr(){
    console.log("Qr print out")
    qrHtml =
        `
    <div id="paymentBox">
        <h1>Below are PaymentMethod. Qr can be click.</h1>
    <div class="PaymentMethod">
        <img class="paymentType"src="images/tng_logo.png"  alt="Touch 'N Go logo">
    <div class="paymentDetails">
        <a href="images/fullqr_tng.jpeg" target="_top"><img class="paymentQr" src="images/qr_tng.jpeg" alt="Qr Code for payment"></a>
        <h1>Account ID</h1>
        <p><br>011-2822-7757</p>
    </div>
    </div>
    <div class="PaymentMethod">
        <img class="paymentType"src="images/duitnow.png"  alt="Duitnow logo">
        <div class="paymentDetails">
        <a href="images/fullqr_duitnow.jpeg" target="_top"><img class="paymentQr" src="images/qr_dn.jpeg" alt="Qr Code for payment"></a>
        <h1>Account ID</h1>
        <p><br>011-2822-7757</p>
    </div>
    </div>
    <div class="PaymentMethod">
        <img class="paymentType"src="images/wechat_logo.png"  alt="Wechat logo">
        
        <div class="paymentDetails">
            <a href="images/fullqr_wechat.jpeg" target="_top"><img class="paymentQr" src="images/qr_wechat.jpeg" alt="Qr Code for payment"></a>
            <h1>Account ID</h1>
            <p><br>011-2822-7757</p>
        </div>
    </div> 
        `

    document.querySelector('#PaymentContainer').innerHTML  = qrHtml;
}
displayQr()

let qrFormHtml = '';
function displayQrForm(){
    console.log('Qr form print out')
    qrFormHtml =
    `
    <input type="file" name="evidence" id="qrEvidence"><br><br>
    <button onclick="storeQr()">Save</button>
    <input  onclick="resetQr()" type="reset" value="Reset" id="cancelDelivery" />
    `
    document.querySelector('#EvidenceInput').innerHTML  = qrFormHtml;

} 
displayQrForm()


function storeQr(){
    var qrPic = document.querySelector("#qrEvidence");
    
    if(qrPic.value == ""){
        alert("Remember upload evidence!");
        return false;
    }
    else{
        let fullQr0 = {
            qr_Pic0: qrPic.value,
        };

        console.log(fullQr0);
        localStorage.setItem('paymentQr', JSON.stringify(fullQr0))

        let finalQr = {
            finalqr_Pic0: qrPic.value
        };

       console.log(finalQr);
        localStorage.setItem('finalQr', JSON.stringify(finalQr))
        console.log('Qr picture is sucessfully added!');
        alert("picture already added!");
    };
};

function resetQr(){
    localStorage.setItem('paymentQr', JSON.stringify(0))
    alert("Details reset!");
}
//End Qr