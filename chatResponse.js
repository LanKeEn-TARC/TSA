function botResponse(input) {
    const triggerList = 
    [
        "good morning", 
        "where is the store located?",
        "where is the store located",
        "how can i contact you?",
        "how can i contact you",
        "never gonna give you up",
        "location",
        "product",
        "products",
        "price range",
        "price",
        "hi",
        "sup"
    ];

    const replyList =
    [
        "Morning. How are you?",
        "We are located at 6, Jalan Sunway 5/5 Bandar Sunway Semenyih, 43500 Semenyih, Selangor. Come find us!",
        "We are located at 6, Jalan Sunway 5/5 Bandar Sunway Semenyih, 43500 Semenyih, Selangor. Come find us!",
        "This is our Facebook! https://www.facebook.com/TSA-Gaming-224639346204698 <br/> This is our Instagram! https://www.instagram.com/tsagaming_0917/ <br/> This is our Twitter! </br> Feel free to contact us for enquiries :>",
        "This is our Facebook! https://www.facebook.com/TSA-Gaming-224639346204698 <br/> This is our Instagram! https://www.instagram.com/tsagaming_0917/ <br/> This is our Twitter! https://twitter.com/tsagaming_0917 </br> Feel free to contact us for enquiries :>",
       "Never gonna let you down &#128521;",
       "We are located at 6, Jalan Sunway 5/5 Bandar Sunway Semenyih, 43500 Semenyih, Selangor. Come find us!",
       "We are selling keyboards, consoles, mouse, controllers and other gaming accessories ~ Feel free to check them out ~",
       "We are selling keyboards, consoles, mouse, controllers and other gaming accessories ~ Feel free to check them out ~",
       "We TSA has the BEST products with SUPER GOOD price. Definitely worth a penny~",
       "We TSA has the BEST products with SUPER GOOD price. Definitely worth a penny~",
       "Hey there",
       "Yooo"
    ];

    input.toLowerCase();

    for (var i = 0; i < triggerList.length; i++) {
        console.log(input == triggerList[i]);
        if (input == triggerList[i]) {
            return replyList[i];
        } 
    }
    return "I don't get what you mean. You may consider to contact our customer service at tsagaming0917@gmail.com or call us at 03-87235967(7253)";
}
