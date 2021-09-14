const addAddressButton = document.getElementsByClassName('address--saveAddress');

var addressHistory = JSON.parse(localStorage.getItem('addressDetail'));
var Address = addressHistory || [];

for(var i = 0; i < addAddressButton.length; i++){
    let saveAddressButton = addAddressButton[i];
    saveAddressButton.addEventListener('click',() => {
        var addressName = document.querySelector("#addressName").value,
        addressPhone = document.querySelector("#addressPhone").value,
        addressState = document.querySelector("#state").value,
        addressArea = document.querySelector("#area").value,
        addressPostal = document.querySelector("#addressPostal").value,
        addressDetails = document.querySelector("#addressDetails").value;
        var phone = document.getElementById("addressPhone"),
        postal = document.getElementById("addressPostal");

        console.log('button clicked');

        if(addressName == "" || addressPhone == "" || addressState == "" || addressArea == "" || addressPostal == "" || addressDetails == ""){
            alert("Fields cannot be empty!");
            return false;
        }
        else if(phone.validity.patternMismatch){
            alert("Invalid phone number format!");
            return false;
        }
        else if(postal.validity.patternMismatch){
            alert("Invalid postal code format!");
            return false;
        }
        else{
            let fullAddress = {
                ad_name: addressName,
                ad_phone: addressPhone,
                ad_state: addressState,
                ad_area: addressArea,
                ad_postal: addressPostal,
                ad_detail: addressDetails
            };

            console.log(fullAddress);
            addFullAddresstoLocalStorage(fullAddress);
            document.querySelector('.address__addAddress').style.display = 'none';
            document.querySelector('.address__background_overlay').style.display = 'none';
        };
    });
};

function addFullAddresstoLocalStorage(fullAddress){
    Address.push(fullAddress);
    console.log(Address);

    localStorage.setItem('addressDetail',JSON.stringify(Address));
    console.log(fullAddress.name + ' is sucessfully added!');

    displayAddress();
};

function displayAddress(){
    let recycleView = '';
    let address = JSON.parse(localStorage.getItem('addressDetail'));
    address && address.forEach(item => {
        recycleView += 
        `
        <tr>
            <td>${item.ad_name}</td>
            <td>${item.ad_phone}</td>
            <td>
                ${item.ad_detail}<br>
                ${item.ad_postal} ${item.ad_area}<br>
                ${item.ad_state}
            </td>
            <td class="address--delete" data-id="${item.ad_detail}"><i class="fas fa-trash-alt"></i></td>
        </tr>
        `
    });

    document.querySelector('.address--tbody').innerHTML = recycleView;

    document.querySelectorAll('.address--delete').forEach(function(deleteAddress){
        deleteAddress.addEventListener('click',async() => {
            const ad_id = deleteAddress.getAttribute("data-id");

            const ad_deletedArray = await Address.filter(function(ad_data){
                return ad_data.ad_detail !== ad_id;
            });

            Address = ad_deletedArray;
            localStorage.setItem('addressDetail',JSON.stringify(ad_deletedArray));
            displayAddress();
        });
    });
};
displayAddress();