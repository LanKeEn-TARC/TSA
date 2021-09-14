//delivery name and price get and show
let deliveryType = JSON.parse(localStorage.getItem('fees'));
console.log(deliveryType.price);
console.log(deliveryType.name);

let deliveryTypeFeeReport = "";
deliveryTypeFeeReport += `

    <td>${deliveryType.name}</td>
    <td>${deliveryType.price}</td>

`
document.querySelector('.report-table-delivery').innerHTML = deliveryTypeFeeReport;

//product details get and show
let productReport = "";
let productReportGet = JSON.parse(localStorage.getItem("productInCart"));
    productReportGet && productReportGet.forEach((item) =>{
        console.log(item.name)
        console.log(item.price)
        productReport += `
        <tr>
            <td class="product-name">${item.name}</td>
            <td class="product-quantity">${item.quantity}</td>
            <td class="product-price">${item.price}</td>
            <td class="product-totalPrice">${item.totalPrice}</td>
        </tr>
        `
    })

document.querySelector('.report-table-product').innerHTML = productReport;

document.getElementsByClassName(".rate").onclick = function() {rate()};
function rate(){
    console.log('C')
    alert('Thanks For Reviewing Our Services');
}

let customerReport = "";
let customerDetailsGet = JSON.parse(localStorage.getItem("finalAddress"));
     customerReport += `
     <ul>
        <li>${customerDetailsGet.final_name}</li><br>
        <li>${customerDetailsGet.final_phone}</li><br>
        <li>${customerDetailsGet.final_details}</li><br>
        <li>${customerDetailsGet.final_postal}</li><br>
        <li>${customerDetailsGet.final_area}</li><br>
        <li>${customerDetailsGet.final_state}</li><br>
    </ul>
     `

document.querySelector('.report-table-customerDetails').innerHTML = customerReport;

function playSound() {
    var sound = document.getElementById("audio");
    sound.play();
  }