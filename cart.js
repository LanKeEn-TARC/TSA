
console.log('Welcome to shoping cart TSA');

//Declare variable
const button = document.getElementsByClassName('addToCart')
// const productPic = document.getElementsByClassName('product-pic')
//console.log(productPic)
console.log(button);//check how many button available in document (debug propose)
const products = []

for(var i = 0 ; i < button.length; i++){
        // let addToCartPic = productPic[i]
        let addToCartButton = button[i]
        addToCartButton.addEventListener('click', () =>{
            alert('Product added to cart');
            console.log('debug');
            console.log(event.target.parentElement.parentElement.children[0].children[0].textContent);
            //display product name and price
            var productInfo = addToCartButton.parentNode.parentNode.parentNode.parentNode;
            console.log(productInfo.querySelector('.product-description h1').textContent);
            console.log(productInfo.querySelector('.product-price span').textContent);
            console.log((productInfo.querySelector('.product-pic img')).getAttribute('src'));
            console.log(productInfo);
            
            //find the product pic url
            
            //declare the variable for product name and price
            var productName = productInfo.querySelector('.product-description h1').textContent;
            var productPrice = productInfo.querySelector('.product-price span').textContent;
            var productPic = (productInfo.querySelector('.product-pic img')).getAttribute('src');
            //var imgData = getBase64Image(bannerImage);
            //decalre variable (Separate Rm and number
            var price_Number = productPrice.slice(2,productPrice.length);
            //debug
            console.log('Add to cart button have been clicked'); 
            console.log('name: ' + productName);  
            console.log('price: ' + productPrice)
            console.log('total price:' + parseInt(price_Number));

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
}

//add Product to Local Storage
function addProductToLocalStorage(product) {
    console.log(product); //debug purpose
    let cartProduct = JSON.parse(localStorage.getItem("productInCart"));
    if (cartProduct === null) {
        products.push(product); //add data into products array
        localStorage.setItem("productInCart", JSON.stringify(products));
        console.log(product.name + " successfull add in local storage");
    } else {
        //data array
        cartProduct && cartProduct.forEach((item) => {
            if (product.name == item.name && product.pic == item.pic ) {
                product.quantity = item.quantity += 1;
                product.totalPrice = item.totalPrice += product.totalPrice;
                console.log(product.totalPrice + "= " + item.totalPrice + "= " + item.totalPrice + "+" + product.totalPrice);
                console.log("Quantity " + product.name + " successfull increase in local storage");
            } else {
                products.push(item);
                console.log(product.name + " successfull add in local storage because did not have previous item");
            }
        });
        products.push(product);
    }
    localStorage.setItem("productInCart", JSON.stringify(products));
    window.location.reload();
}
// <div class="pictures"><img src="${item.pic}" alt=""></div>
function displayCartItem(){
    let recycleView = '';
    let cartProduct = JSON.parse(localStorage.getItem('productInCart'))
    cartProduct && cartProduct.forEach((item) => {
        recycleView += 
        `
        <div class="cart">
            <div class="pictures"><img src="${item.pic}" alt=""></div>
            <div class="name"><p>${item.name}</p></div>
            <div class="quantity"><p>${item.quantity}</p></div>
            <div class="price"><p>${item.price}</p></div>
            <div class="total"><p>RM${item.totalPrice}</div>

            <div class="remove"><button>Remove</button></div>
        </div>
        <hr>
        `;
    });
    document.querySelector('.productDisplay').innerHTML = recycleView;
}
displayCartItem();


const removeProduct = document.getElementsByClassName('remove')
for(var i = 0; i < removeProduct.length; i++){
    let removeButton = removeProduct[i]
    removeButton.addEventListener('click', () =>{
        let cartProduct = JSON.parse(localStorage.getItem('productInCart'))
        console.log(event.target.parentElement.parentElement.children[0].children[0].getAttribute("src"));
        cartProduct.forEach(item => {
            if(item.pic != event.target.parentElement.parentElement.children[0].children[0].getAttribute("src")){
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
cartTotalPrice();

