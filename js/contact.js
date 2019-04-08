console.log("can i see this?")

$(document).ready(function(){
    $('.submit').click(function(event){
        event.preventDefault();
        console.log('testing')

        var email = $(".emailAddy").val();
        var message = $(".emailBody").val();

        if (email.length == null || !email.includes("@") || !email.includes(".")) {
            alert("Please enter a valid email address.")
        };

        if (message.length == null) {
            alert ("Please enter a full message. I will respond as soon as possible.")
        }
    })
})
