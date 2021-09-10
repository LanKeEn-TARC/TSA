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
    if (document.getElementById('othersB').checked) {
        document.getElementById('others1').style.display = 'block';
        document.getElementById('home1').style.display = 'none';
    }
    let html = '';
    
    let address = JSON.parse(localStorage.getItem('addressDetail'));
        html += 
        `
        <br>
        <div>
            Full Name:${address.ad_name}<br>
            Phone:${address.ad_phone}<br>
            Address:${address.ad_detail}<br>
            Postal: ${address.ad_postal}<br>
            Area: ${address.ad_area}<br>
            State:  ${address.ad_state}<br>
            <br>
        </div>
        `
        document.querySelector('#home1').innerHTML = html;
}
dispAddress()

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

function deliveryDetails(){

}






















