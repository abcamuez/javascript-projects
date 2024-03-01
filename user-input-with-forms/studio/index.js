let button = document.getElementById("searchForm")
button.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let formData = {
        name: name,
        email: email,
        message: message,
    };

    submitForm(formData)

});

function submitForm(formData){
    fetch("https://r31jbh92tk.execute-api.us-east-1.amazonaws.com/dev/submit_message", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
    .then( curr => console.log("Successfully got the message", curr, formData))
.catch( err => console.log("failed to get the message", err))
}

    

