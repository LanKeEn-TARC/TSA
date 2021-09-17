Brief instructions for implementing and running our website:
1. When you first use our website, start with the login and signup html and start with register section
2. Recommended to run our website followed by the sequence of login, homepage, profile, product, cart, payment, delivery and finally report
3. All information that added in payment section such as other card, other bank and other address will not be saved as these information are designed to use one time only

Command that triggered the live chat bot:
1. good morning
2. where is the store located?
3. where is the store located
4. how can i contact you?
5. how can i contact you
6. never gonna give you up
7. location
8. product
9. products
10. price range
11. price
12. hi
13. sup

Login and Signup Page
Signup Email: localStorage.su_email
Signup Password: localStorage.su_password
Signup Username: localStorage.su_username

Profile Page
Profile Name: localStorage.pname
Profile Date: localStorage.pdate
Profile Phone: localStorage.pphone
Profile Gender: localStorage.pgender

Bank and Card Page
Bank Card Detail: localStorage.details
Bank Card Name: localStorage.details.name
Bank Card Number: localStorage.details.number
Bank Card Date: localStorage.details.date
Bank Card Cvv: localStorage.details.cvv

Bank Account Detail: localStorage.accounts
Bank Account Name: localStorage.accounts.a_name
Bank Account Number: localStorage.accounts.a_number
Bank Account Bank: localStorage.accounts.a_bank

Delivery and Address Page
Full Address: localStorage.addressDetail
Address Name: localStorage.addressDetail.ad_name
Address Phone Number: localStorage.addressDetail.ad_phone
Address State: localStorage.addressDetail.ad_state
Address Area: localStorage.addressDetail.ad_area
Address Postal Code: localStorage.addressDetail.ad_postal
Address Detail: localStorage.addressDetail.ad_detail

cart
product pictures: localstorage.productInCart.pic
product name: localstorage.productInCart.name
product price: localstorage.productInCart.price
product quantity: localstorage.productInCart.quantity
product total price: product price: localstorage.productInCart.totalPrice
product cart total: localstorage.finalCartTotal.total


payment
QR payment: localsotrage.paymentQr.qr_pic0
bank account name: localstorage.confirmBank.name
bank account number: localstorage.confirmBank.account
bank name: localstorage.confirmBank.bankName
payment way: localstorage.finalCard.finalName
credit card owner name: localsotrage.confirmCard.name
credit card cvv: localsotrage.confirmCard.cvv
credit card date: localsotrage.confirmCard.date
credit card number: localsotrage.confirmCard.number

shipping address
address name: localstorage.confirmAddress.name
address area: localstorage.confirmAddress.area
address details: localstorage.confirmAddress.details
address phone: localstorage.confirmAddress.phone
address postal: localstorage.confirmAddress.postal
address state: localstorage.confirmAddress.state

store the address
store name: localstorage.finalAddress.final_name
store details: localstorage.finalAddress.final_details
store area: localstorage.finalAddress.final_area
store phone: localstorage.finalAddress.final_phone
store postal: localstorage.finalAddress.final_postal
store state: localstorage.finalAddress.final_state

other address
other name: localstorage.addressDetailsOrder.ad_name0
other area: localstorage.addressDetailsOrder.ad_area0
other detail: localstorage.addressDetailsOrder.ad_detail0
other phone: localstorage.addressDetailsOrder.ad_phone0
other postal: localstorage.addressDetailsOrder.ad_postal0
other state: localstorage.addressDetailsOrder.ad_state0