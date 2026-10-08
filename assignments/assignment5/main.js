// ========================================================
// Assignment 5: JavaScript Post and Reply
// ========================================================

window.onload = setupFunction;

var postCount = 0;

function setupFunction() {
    var topHeading = document.getElementById("top");
    if (topHeading) {
        topHeading.innerHTML = "Welcome to the Forum";
    }

    var buttons = document.getElementsByTagName("button"); {
        buttons[0].onclick = postFunction;   
        buttons[1].onclick = clearFunction;  
    }
}

function postFunction() {
    var messageInput = document.getElementById("message");
    var text = messageInput.value;

    if (postCount === 0) {
        document.getElementById("topic").innerHTML = text;
        postCount++;
    } else if (postCount === 1) {
        document.getElementById("reply1").innerHTML = text;
        postCount++;
    } else if (postCount === 2) {
        document.getElementById("reply2").innerHTML = text;
        postCount++;
    } 

    else if (postCount > 2) {
       alert("Full please refill again");
        document.getElementById("topic").innerHTML = text;
    document.getElementById("reply1").innerHTML = "";
    document.getElementById("reply2").innerHTML = "";
        postCount = 1;
    }



    messageInput.value = "";
}
function clearFunction() {
    document.getElementById("topic").innerHTML = "";
    document.getElementById("reply1").innerHTML = "";
    document.getElementById("reply2").innerHTML = "";

    document.getElementById("message").value = "";


    postCount = 0;
}