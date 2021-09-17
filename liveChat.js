//to expand and collapse the chatbox
var box = document.getElementsByClassName('collapsible');

for (var i = 0; i < box.length; i++) {
    box[i].addEventListener('click', function () {
        this.classList.toggle('active');

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            //must put null or else it only expands for the first time (cannot 0)
            content.style.maxHeight = null;
        }
        else {
            //scrollHeight returns the entire height of the element, including not viewable parts (overflow)
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
}

function getTime() {
    var today = new Date();
    hours = today.getHours();
    mins = today.getMinutes();

    if (hours < 10) {
        //display 05 if hour is 5, instead of displaying 5 (to look more neat)
        hours = '0' + hours;
    }

    if (mins < 10) {
        //display 05 if mins is 5, instead of displaying 5 (to look more neat)
        mins = '0' + mins;
    }

    //concatenate to display 05:10
    var time = hours + ':' + mins;
    return time;
}

//let the bot send an initialized message
function firstMsg () {
    var msg = 'Hey ~ How can I help you?';
    var msg2 = 'You can ask me regarding payment, cart etc!';
    document.getElementById('botStartMsg').innerHTML = '<p class="botText"><span>' + msg + '</span></p>';

    var botStart2 = '<p class="botText"><span>' + msg2 + '</span></p>';
    $(".chatbox").append(botStart2);



    //to display time
    var time = getTime();
    var displayTime = document.getElementById('chat-timeStamp');
    displayTime.style.color = 'black';
    displayTime.style.marginBottom = '2em';
    displayTime.style.fontSize = '1em';
    displayTime.insertAdjacentHTML('beforeend', time);

    //set scrollIntoView to false will set the bottom of the element to be aligned to the bottom of the visible area of the scrollable ancestor
    //show the bottom part
    document.getElementById("userInput").scrollIntoView(false);
}


// Retrieves the response
function getResponse(userText) {
    let botresponse = botResponse(userText);
    let botHtml = '<p class="botText"><span>' + botresponse + '</span></p>';
    $(".chatbox").append(botHtml);

    document.getElementById("chatBar-btm").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getInputVal() {
    //retrive the value from input
    let userText = $("#textInput").val();

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    //reset chatbox
    $("#textInput").val("");
    $(".chatbox").append(userHtml);
    document.getElementById("chatBar-btm").scrollIntoView(true);

    getResponse(userText);
}


function buttonSend(sampleText) {
    var userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';
    if (sampleText === '&#10084;') {
       userHtml = '<p class="userText"><span style="color:red;">' + sampleText + '</span></p>';
    } 

    $("#textInput").val("");
    $(".chatbox").append(userHtml);
    document.getElementById("chatBar-btm").scrollIntoView(true);

}

function sendBtn(event) {
    //prevent the page to refresh (submit form)
    event.preventDefault();
    getInputVal();
}

function heartBtn() {
    buttonSend('&#10084;');
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getInputVal();
    }
});

firstMsg();

