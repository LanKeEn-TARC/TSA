//You must load the html element then can load this javascript.
document.addEventListener("DOMContentLoaded", function () {
console.log('Welcome to shoping cart TSA');

//Declare variable
const addToCartButtons = document.querySelectorAll(".addToCart");
var increaseQuantityButton; 
var decreaseQuantityButton;
var quantityInput; //text field for input

//console.log(addToCartButtons); //check how many button available in document (debug propose)'
//Declare array
const products = []

//addToCartButtons = array
//button = item array
addToCartButtons.forEach((button) => {
    button.addEventListener('click', () =>{
        alert('Product added to cart');
        //display product info
        var productInfo = button.parentNode.parentNode.parentNode.parentNode;
        console.log(productInfo.querySelector('.product-description h1').textContent);
        console.log(productInfo.querySelector('.product-price span').textContent);
        //find the product pic url
        console.log((productInfo.querySelector('.product-pic img')).getAttribute('src'));
        console.log(productInfo);
        
        //declare the variable for product name and price
        var productName = productInfo.querySelector('.product-description h1').textContent;
        var productPrice = productInfo.querySelector('.product-price span').textContent;
        var productPic = (productInfo.querySelector('.product-pic img')).getAttribute('src');
        //decalre variable (Separate Rm and number
        var price_Number = productPrice.slice(2,productPrice.length);
        //debug
        console.log('Add to cart button have been clicked'); 
        console.log('name: ' + productName);  
        console.log('price: ' + productPrice)
        console.log('total price:' + parseInt(price_Number))
        //declare list of the item to display in shoping cart
        let product = {
            pic: productPic,
            name: productName,     
            price: productPrice,
            totalPrice: parseInt(price_Number),
            quantity:1
        } 
        console.log(product);
        addProductToLocalStorage(product)
    })
})


//add Product to Local Storage
function addProductToLocalStorage(product) {
    console.log(product); //debug purpose
    let cartProduct = JSON.parse(localStorage.getItem("productInCart")); //local storage names
    if (cartProduct === null) {
        products.push(product); //add data into products array
        localStorage.setItem("productInCart", JSON.stringify(products)); // add produt to local storage
        console.log(product.name + " successfull add in local storage");
    } else {
        //data array
        // if cartProduct is an empty array, it will return false and the code after && will not be execute
        cartProduct && cartProduct.forEach((item) => { 
            //if the item already inslide in the local storage, then just add the quantity and price
            if (product.name == item.name && product.pic == item.pic ) {
                product.quantity = item.quantity += 1;
                product.totalPrice = item.totalPrice += product.totalPrice;
                console.log(product.totalPrice + "= " + item.totalPrice + "= " + item.totalPrice + "+" + product.totalPrice);
                console.log("Quantity " + product.name + " successfull increase in local storage");
            } 
            //if the local storage did not have this item, then add this
            else {
                products.push(item);
                console.log(product.name + " successfull add in local storage because did not have previous item");
            }
        });
        products.push(product);
    }
    localStorage.setItem("productInCart", JSON.stringify(products));
    window.location.reload();
}

function displayCartItem(){
    let recycleView = '';
    let cartProduct = JSON.parse(localStorage.getItem('productInCart')) //local storage names
    //add the product content in the cart pages.
    cartProduct && cartProduct.forEach((item) => {
        recycleView += 
        `
        <tr class="cart">
            <td class="cartProductImg"><img src="${item.pic}" alt="Product Picture"></td>
            <td class="name"><p>${item.name}</p></td>
            <td class="quantity">
                <button class="plusButton" type="button" name="plusButton">
                    <img src="Svg/plus.svg" alt="">
                </button>
            <input type="text" name="quantityValue" class ="quantityValue" value="${item.quantity}">
            <button class="minusButton" type="button" name="minusButton">
                <img src="Svg/minus.svg" alt="">
            </button>
            </td>  
            <td class="price"><p>${item.price}</p></td>
            <td class="total"><p>RM${item.totalPrice}</td>
            <td class="remove"><button>Remove</button></td>
        </tr>
        `;
    });
    document.querySelector('.productDisplay').innerHTML = recycleView;
    //Initilise the button 
    increaseQuantityButton = document.querySelectorAll('.plusButton');
    decreaseQuantityButton = document.querySelectorAll('.minusButton');
    quantityInput = document.querySelectorAll('.quantityValue')

    quantityController();
    
    //Remove product from cart function
    const removeProduct = document.querySelectorAll('.remove')
    // for(var i = 0; i < removeProduct.length; i++){
    // let removeButton = removeProduct[i]
    removeProduct.forEach(removeButton => {
        removeButton.addEventListener('click', () =>{
            let cartProduct = JSON.parse(localStorage.getItem('productInCart'))
            //debug , print picture
            console.log(event.target.parentElement.parentElement.children[0].children[0]);
            cartProduct.forEach(item => {
                // delete b
                // [a, b, c, d]
                // [a]
                // [a]
                // [a, c]
                // [a, c, d]
                // Recreate new array with this algorithm
                if(item.pic != event.target.parentElement.parentElement.children[0].children[0].getAttribute("src")){
                    products.push(item) 
                }
            });
            localStorage.setItem('productInCart', JSON.stringify(products))
            window.location.reload()
        })
    });
    
    cartTotalPrice();
}
displayCartItem();




function cartTotalPrice(){
    let total = 0;
    let cartProduct = JSON.parse(localStorage.getItem('productInCart'))
    cartProduct.forEach(item =>{
        total += item.totalPrice;
    })
    console.log('Your cart total price is ' + total);

    let totalCartPrice = {
        total: total
    }
    localStorage.setItem('finalCartTotal', JSON.stringify(totalCartPrice));
    document.querySelector('.cartPayment #totalPrice h3 span').textContent = total
}




function quantityController()  {

    increaseQuantityButton.forEach((increaseButton) => {
        increaseButton.addEventListener("click", function(){
            let cartProduct = JSON.parse(localStorage.getItem('productInCart'))
            //
            var productDetail = increaseButton.parentNode.parentNode;
            var productImage = productDetail.querySelector(".cartProductImg img").getAttribute("src");
            var productName = productDetail.querySelector(".name p").innerHTML;
            
            cartProduct.forEach(item => {
                if(item.pic === productImage && item.name === productName) {
                    item.quantity++;
                    item.totalPrice = item.price.replace("RM", "") * item.quantity;
                    
                }
            })

            
            localStorage.setItem('productInCart', JSON.stringify(cartProduct))
            displayCartItem()
        })
        
    })

    decreaseQuantityButton.forEach((decreaseButton) => {
        decreaseButton.addEventListener("click", function(){
            let cartProduct = JSON.parse(localStorage.getItem('productInCart'))
            var productDetail = decreaseButton.parentNode.parentNode;// Go back to find parents
            var productImage = productDetail.querySelector(".cartProductImg img").getAttribute("src");
            var productName = productDetail.querySelector(".name p").innerHTML;

            cartProduct && cartProduct.forEach(item => {
                if(item.pic === productImage && item.name === productName && item.quantity <= 1 ){
                    alert("You have reached minimum purchase quantity.")
                }
                if(item.pic === productImage && item.name === productName && item.quantity > 1 ){
                    item.quantity--;
                    item.totalPrice = item.price.replace("RM", "") * item.quantity; 
                }
                
            })
            localStorage.setItem('productInCart', JSON.stringify(cartProduct))
            displayCartItem()
        })
    })

    quantityInput.forEach((input) =>{
        input.addEventListener("change",function(){
            let cartProduct = JSON.parse(localStorage.getItem('productInCart'))
            var productDetail = input.parentNode.parentNode;
            var productImage = productDetail.querySelector(".cartProductImg img").getAttribute("src");
            var productName = productDetail.querySelector(".name p").innerHTML;
            var quantity = input.value;

            if(quantity < 1) {
                alert("invalid Quantity")
            } 
            else {
                cartProduct.forEach(item => {
                    if(item.pic === productImage && item.name === productName){
                        item.totalPrice = item.price.replace("RM", "") * quantity; 
                        item.quantity = quantity
                    }
                }) 
                localStorage.setItem('productInCart', JSON.stringify(cartProduct))
            }
            displayCartItem()
        })
    })
}
})
