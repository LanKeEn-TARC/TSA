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
address1.forEach(chooseAddress);
    console.log(address1);
function chooseAddress(address1, no){
   html += 
    `
        <div>
        <br>
        <button id="get${no}" name="getA">Button</button>
        Address ${no+1}
        <hr>
        </div>
        `
        document.querySelector('#home1').innerHTML = html;
}

if(document.getElementById("get0").onclick=function()
{
    console.log('c')
        let address = JSON.parse(localStorage.getItem('addressDetail'))[0];
        document.getElementById('home2').style.display = 'block';
        getAddress(address);
    })

    if(document.getElementById("get1").onclick=function()
    {
        console.log('c')

            let address = JSON.parse(localStorage.getItem('addressDetail'))[1];
            document.getElementById('home2').style.display = 'block';
            getAddress(address);
        })

        if(document.getElementById("get2").onclick=function()
        {
            console.log('c')
                let address = JSON.parse(localStorage.getItem('addressDetail'))[2];
                document.getElementById('home2').style.display = 'block';
                getAddress(address);
            })

function getAddress(address){
    var addressName = document.querySelector("#addressName"),
        addressPhone = document.querySelector("#addressPhone"),
        addressState = document.querySelector("#state"),
        addressArea = document.querySelector("#area"),
        addressPostal = document.querySelector("#addressPostal"),
        addressDetails = document.querySelector("#addressDetails");
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
            ad_name: addressName,
                ad_phone: addressPhone,
                ad_state: addressState,
                ad_area: addressArea,
                ad_postal: addressPostal,
                ad_detail: addressDetails
        };
        localStorage.setItem('comfirmAddress', JSON.stringify(shippingAddress))
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
            console.log('Address is sucessfully added!');
            alert("Address added!");
        };
    };

function resetAddress(){

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
        html += `
        <tfoot style="margin: auto;">
        <tr>
          <td>Delivery: RM</td> 
          <td>${shippingFee.price}</td>
        </tr>
        </tfoot>
                `    
    
   document.querySelector('.order-table').innerHTML = html;
}
dispOrder()

//displaying the delivery in payment report page
function reportDelivery(){
    let reportDeliveryHtml = '';
    let deliveryReportFee = JSON.parse(localStorage.getItem('fees'))

    reportDeliveryHtml += `
    <tr>
        <td>Delivery: RM</td> 
        <td>${deliveryReportFee.price}</td>
    </tr>
    `
}
reportDelivery();
























