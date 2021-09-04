//debug
console.log('Bank Account Page');

const accountButton = document.getElementsByClassName('bnc--saveAccount');
//debug
console.log('Button clicked');
var accountHistory = JSON.parse(localStorage.getItem('accounts'));
var Account = accountHistory || [];

for(var i = 0; i < accountButton.length; i++){
    let saveAccountButton = accountButton[i];
    saveAccountButton.addEventListener('click',() => {
        var accountNumber = document.querySelector("#accountNumber").value,
        accountName = document.querySelector("#accountName").value,
        accountBank = document.querySelector("#accountBank").value;

        if(accountNumber == "" || accountName == "" || accountBank == ""){
            alert("Fields cannot be empty!");
            return false;
        } else {
            let accountDetails = {
                a_name: accountName,
                a_number: accountNumber,
                a_bank: accountBank
            };
    
            //debug
            console.log(accountDetails);
            addAccountDetailsToLocalStorage(accountDetails);
            alert("Account added sucessfully!")
            document.querySelector('.bnc__addAccount').style.display = 'none';
            document.querySelector('.bnc__background_overlay').style.display = 'none';
        };
    });
};

function addAccountDetailsToLocalStorage(accountDetails){
    //debug
    console.log(accountDetails);

    Account.push(accountDetails);
    //debug
    console.log(Account);

    localStorage.setItem('accounts', JSON.stringify(Account));

    //debug
    console.log(accountDetails.a_name + ' is sucessfully added!');
    displayAccount();
};

function displayAccount(){
    let recycleView = '';
    // let details = localStorage.cardDetails;
    let a_details = JSON.parse(localStorage.getItem('accounts'));
    //debug
    console.log(a_details);
    a_details.forEach(item => {
        recycleView += 
        `
        <tr>
            <td>${item.a_name}</td>
            <td>${item.a_number}</td>
            <td>${item.a_bank}</td>
            <td class="bnc__bank--delete" data-id="${item.a_number}"><i class="fas fa-trash-alt"></i></td>
        </tr>
        `
    });
    
    document.querySelector('.bnc__bank--tbody').innerHTML = recycleView;

    document.querySelectorAll('.bnc__bank--delete').forEach(function(deleteAccount){
        deleteAccount.addEventListener('click',async() => {

            const a_id = deleteAccount.getAttribute("data-id");

            const a_deletedArray = await Account.filter(function(a_data){
                return a_data.a_number !== a_id;
            });

            Account = a_deletedArray;
            localStorage.setItem('accounts', JSON.stringify(a_deletedArray));
            displayAccount();
        });
    });
};
displayAccount();