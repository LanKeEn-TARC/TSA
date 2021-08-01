const shippingDetails = [
    {
        name: "Basic",
        price: 5},
    {
        name: "Standard",
        price: 10},
    {
       name: "Premium",
        price: 15}
    ]
    window.localStorage.setItem('fees', JSON.stringify(shippingDetails));

        
function dispOrder(){
    var btn = document.getElementsByClassName('price-btn')

    let html = '';
    for(i=0; i<btn.length; i++){
        if (document.getElementById('basic').checked) {
            localStorage.setItem('fees', JSON.stringify(shippingDetails[0]))
          } else if (document.getElementById('standard').checked){
            localStorage.setItem('fees', JSON.stringify(shippingDetails[1]))
        } else{
            localStorage.setItem('fees', JSON.stringify(shippingDetails[2]))
        }
    }
   

    var x = localStorage.getItem('fees', JSON.stringify(shippingDetails))

    
        html += `

                <tfoot style="margin: auto;">
                 
                  <tr>
                    <td>Delivery: </td> 
                    <td>${x.price}</td>
                  </tr>
                
                </tfoot>
   </div>
        `
    ;
   document.querySelector('.order-table').innerHTML = html;
}
dispOrder()

























