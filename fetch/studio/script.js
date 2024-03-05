//TODO: Add Your Code Below

window.addEventListener("load", function() {
    let container = this.document.getElementById("container")
  let data = fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(res) {
    if(res.ok) {
        return res.json()
    }})
  // res.json().then(function(json) {
    //   console.log(json)
    // })
    .then(function(res) {
        res.forEach(current => {
            container.innerHTML += `
            <h3>${current.firstName} ${current.lastName}</h3>
            <ul>
            <li>Hours in Space: ${current.hoursInSpace}</li>
            <li>Active: ${current.active}</li>
            <h1>Skills: ${current.skills}</li>
            <img src=${current.picture}/>`
        });
    })
  })


