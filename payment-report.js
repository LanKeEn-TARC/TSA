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
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.totalPrice}</td>
        <td>${item.quantity}</td>
        </tr>
        `
    })

document.querySelector('.report-table-product').innerHTML = productReport;

// let customerReport = "";
// let customerDetailsGet = JSON.parse(localStorage.getItem("finalAddress"));
//     customerReport += `
//     <ul>
//         <li>${customerDetailsGet.final_name}</li>
//         <li>${customerDetailsGet.final_phone}</li>
//         <li>${customerDetailsGet.final_detail}</li>
//         <li>${customerDetailsGet.final_postal}</li>
//         <li>${customerDetailsGet.final_area}</li>
//         <li>${customerDetailsGet.final_state}</li>
//     </u;>
//     `

// document.querySelector('.report-table-customerDetails').innerHTML = customerReport;

