const shippingDetails = [
    {
         name: "nothing",
         price: parseInt(0)},
    {
        name: "Basic",
        price: parseInt(5)},
    {
        name: "Standard",
        price: parseInt(10)},

        {
            name: "Premium",
            price: parseInt(15)},
    
    ];

    var radios = document.getElementsByName('price')
    for(var i = 0; i <radios.length; i++) 
        radios[i].onclick = dispOrder;

    var ele= document.getElementsByName("address")
    for(var i = 0; i <ele.length; i++) {
        ele[i].onclick = dispAddress;
    }

function dispAddress(){

    if (document.getElementById('homeB').checked) {
        document.getElementById('home1').style.display = 'block';
        document.getElementById('others1').style.display = 'none';
    }
    else if (document.getElementById('othersB').checked) {
        document.getElementById('others1').style.display = 'block';
        document.getElementById('home2').style.display = 'none';
        document.getElementById('home1').style.display = 'none';
    }
}
dispAddress()

let html = '';
let address1 = JSON.parse(localStorage.getItem('addressDetail'));
if(address1 !== null){
for(let i = 0; i < address1.length; i++) {
    let address1 = JSON.parse(localStorage.getItem('addressDetail'))[i];
    chooseAddress(address1,i);
}
}

function chooseAddress(address1, no){
console.log(address1)
   html += 
    `
        <div>
        <br>
        <button id="${no}">Choose</button>
        Address ${no+1}
        <hr>
        </div>
        `
    
    document.querySelector('#home1').innerHTML  = html;
}
if(address1 !== null){{}
for(let no = 0 ; no < address1.length; no ++){
    document.getElementById(no).onclick=function()

    {
        console.log('c')
            let address = JSON.parse(localStorage.getItem('addressDetail'))[no];
            document.getElementById('home2').style.display = 'block';
            console.log(address)
            getAddress(address);
    }
}
}

function getAddress(address){
    console.log(address);
    let html = '';
    html += 
        `
        <br>
        <div>
            Full Name: ${address.ad_name}<br><br>
            Phone Number: ${address.ad_phone}<br><br>
            Postal Code: ${address.ad_postal}<br><br>
            Area: ${address.ad_area}<br><br>
            State: ${address.ad_state}<br><br>
            Address: ${address.ad_detail}<br><br>
        </div>
        `
      
        document.querySelector('#home2').innerHTML = html;

        let shippingAddress = {
            name:address.ad_name,
            phone:address.ad_phone,
            state:address.ad_state,
            area:address.ad_area,
            postal:address.ad_postal,
            details:address.ad_detail
        };

        localStorage.setItem('comfirmAddress', JSON.stringify(shippingAddress))

        let finalAddress = {
            final_name:address.ad_name,
            final_phone:address.ad_phone,
            final_state:address.ad_state,
            final_area:address.ad_area,
            final_postal:address.ad_postal,
            final_details:address.ad_detail
        };

        localStorage.setItem('finalAddress', JSON.stringify(finalAddress))
}

function storeAddress(){

        var addressName = document.querySelector("#addressNameO"),
        addressPhone = document.querySelector("#addressPhoneO"),
        addressState = document.querySelector("#stateO"),
        addressArea = document.querySelector("#areaO"),
        addressPostal = document.querySelector("#addressPostalO"),
        addressDetails = document.querySelector("#addressDetailsO");

        if(addressName.value == "" || addressPhone.value == "" || addressState.value == "" || addressArea.value == "" || addressPostal.value == "" || addressDetails.value == ""){
            alert("Fields cannot be empty!");
            return false;
        }
        else if(  addressPhone.validity.patternMismatch){
            alert("Invalid phone number format!");
            return false;
        }
        else if(addressPostal.validity.patternMismatch){
            alert("Invalid postal code format!");
            return false;
        }
        else{
            let fullAddress0 = {
                ad_name0: addressName.value,
                ad_phone0: addressPhone.value,
                ad_state0: addressState.value,
                ad_area0: addressArea.value,
                ad_postal0: addressPostal.value,
                ad_detail0: addressDetails.value
            };

            console.log(fullAddress0);
            localStorage.setItem('addressDetailsOrder', JSON.stringify(fullAddress0))

            let finalAddress = {
                final_name: addressName.value,
                final_phone: addressPhone.value,
                final_state: addressState.value,
                final_area: addressArea.value,
                final_postal: addressPostal.value,
                final_details: addressDetails.value
            };
            console.log(finalAddress);
            localStorage.setItem('finalAddress', JSON.stringify(finalAddress))
            console.log('Address is sucessfully added!');
            alert("Address added!");
        };
    };

function resetAddress(){
    localStorage.setItem('addressDetailsOrder', JSON.stringify(0))
    alert("Details reset!");
}



function dispOrder(){

    let html = '';

            if (document.getElementById('basic').checked) {
            console.log(shippingDetails[1])
            localStorage.setItem('fees', JSON.stringify(shippingDetails[1]))

           
          } else if (document.getElementById('standard').checked){
            console.log(shippingDetails[2])
            localStorage.setItem('fees', JSON.stringify(shippingDetails[2]))
  
        } else if (document.getElementById('premium').checked){
            console.log(shippingDetails[3])
            localStorage.setItem('fees', JSON.stringify(shippingDetails[3]))
         
        }
        
        let shippingFee = JSON.parse(localStorage.getItem('fees'))
        let cartProduct = JSON.parse(localStorage.getItem('productInCart'))
        cartProduct && cartProduct.forEach((item) => {
            console.log(cartProduct.totalPrice)
            let gTotal = shippingFee.price + item.totalPrice;
        html += `
      
        <tr class="cart">
        <td class="item-name">${item.name}</td>
        <td class="item-quantity">${item.quantity}</td>
        <td class="item-totalprice">RM${item.totalPrice}</td>
        <tr>
        <tr>
      
      
                `    
                localStorage.setItem('finalAddress', JSON.stringify(gTotal))
                document.querySelector('#Grandtotalvalue').textContent =  gTotal
                

            });
            document.querySelector('#SHIPPING').textContent = shippingFee.price
   document.querySelector('.order-item').innerHTML = html;

}
dispOrder()

