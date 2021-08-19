console.log('Welcome to shoping cart TSA');

//Declare variable
const button = document.getElementsByClassName('addToCart')
console.log(button);//check how many button available in document (debug propose)
const products = []


for(var i = 0 ; i < button.length; i++){
    let addToCartButton = button[i]
    addToCartButton.addEventListener('click', () =>{
        //decalre variable (Separate Rm and number)
        var price_Rm = event.target.parentElement.parentElement.children[2].textContent;
        var price_Number = price_Rm.slice(2,price_Rm.length);
        //debug
        console.log('Add to cart button have been clicked');
        console.log('name :' + event.target.parentElement.parentElement.children[0].children[0].textContent);
        console.log('price :' + event.target.parentElement.parentElement.children[2].textContent);
        console.log('total price:' + parseInt(price_Number));

        //declare list of the item to display in shoping cart
        let product = {
            name:event.target.parentElement.parentElement.children[0].children[0].textContent,
            price:event.target.parentElement.parentElement.children[2].textContent,
            totalPrice: parseInt(price_Number),
            quantity:1
        }
        console.log(product);
        addProductToLocalStorage(product)
    })
}

//add Product to Local Storage
function addProductToLocalStorage(product){
    console.log(product) //debug purpose
    let cartProduct = JSON.parse(localStorage.getItem('productInCart'))
    if(cartProduct === null){
        products.push(product) //add data into products array
        localStorage.setItem('productInCart', JSON.stringify(products))
        console.log(product.name + ' successfull add in local storage')
    }
    else{
        //data array
        cartProduct.forEach(item => {
            if(product.name == item.name){
                product.quantity = item.quantity += 1; 
                product.totalPrice = item.totalPrice += product.totalPrice;
                console.log(product.totalPrice + '= ' + item.totalPrice + '= ' + item.totalPrice + "+" + product.totalPrice)
                console.log( 'Quantity ' + product.name + ' successfull increase in local storage')
            }
            else{
                products.push(item)
                console.log(product.name + ' successfull add in local storage because did not have previous item')
            }
        });
        products.push(product)
    }
    localStorage.setItem('productInCart', JSON.stringify(products))
    window.location.reload()
}

function displayCartItem(){
    let recycleView = '';
    let cartProduct = JSON.parse(localStorage.getItem('productInCart'))
    cartProduct.forEach(item => {
        recycleView += 
        `
        <div class="cart">
            <div class="name"><p>${item.name}</p></div>
            <div class="quantity"><p>${item.quantity}</p></div>
            <div class="price"><p>${item.price}</p></div>
            <div class="total"><p>RM${item.totalPrice}</div>

            <div class="remove"><button>Remove</button></div>
        </div>
        <hr>
        `
    })
    document.querySelector('.productDisplay').innerHTML = recycleView;
}
displayCartItem()


const removeProduct = document.getElementsByClassName('remove')
for(var i = 0; i < removeProduct.length; i++){
    let removeButton = removeProduct[i]
    removeButton.addEventListener('click', () =>{
        let cartProduct = JSON.parse(localStorage.getItem('productInCart'))
        console.log(event.target.parentElement.parentElement.children[0].children[0].textContent);
        cartProduct.forEach(item => {
            if(item.name != event.target.parentElement.parentElement.children[0].children[0].textContent){
                products.push(item) 
            }
        });
        localStorage.setItem('productInCart', JSON.stringify(products))
        window.location.reload()
    })
}

function cartTotalPrice(){
    let total = 0;
    let cartProduct = JSON.parse(localStorage.getItem('productInCart'))
    cartProduct.map(item =>{
        total = item.totalPrice += total;
    })
    console.log('Your cart total price is ' + total);
    document.querySelector('.cartPayment #totalPrice h3 span').textContent = total
}
cartTotalPrice()
