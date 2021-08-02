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

























