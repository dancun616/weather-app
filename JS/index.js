const loginDetails =document.getElementById("login-details")
const signupDetails =document.getElementById("sign-up-details")
const loginForm= document.getElementById("login-form")
const signUpForm =document.getElementById("sign-up form")
const mainDetails= document.getElementById("weather-html")
const locationForm= document.getElementById("location-form")
const mainDiv= document.getAnimations("weather-container")
const signupDiv=document.getElementById("btn-signup")
const signUpButton = document.getElementById("sign-up btn")
const dataTemp= document.getElementById("temp")
const dataWind=document.getElementById("wind")
const datadescription=document.getElementById("description")
const recommendationbtn= document.getElementById("recommend-btn")
const textrecomm= document.getElementById("recomm")
const fdbcktag = document.getElementById("feddbacktag")
const abouttag = document.getElementById("abttag")
const fdbckEl= document.getElementById("Feedbackinfo")
const abtEl= document.getElementById("Aboutinfo")

//hides login page until required 
function hideEl() {
    loginDetails.style.display= "none";
    signupDetails.style.display= "none";
    signupDiv.style.display= "none";
}

//submits login page 
loginForm.addEventListener("submit", function onsubmit(e) {
    e.preventDefault()

    hideEl();
    mainDetails.style.display= "block";
})

//submits sign-up form
signUpForm.addEventListener("click", function onsubmit(e) {
    e.preventDefault()

    hideEl();
    mainDetails.style.display= "block";
})

//This code explains what happens when a sign-up button is clicked
signUpButton.addEventListener("click", function onclick(e) {
    e.preventDefault()

    loginDetails.style.display= "none";
    signupDetails.style.display= "block";
    signupDiv.style.display= "none";
})

//This function submits our location form and outputs our fetched results
locationForm.addEventListener("submit", function onsubmit(event) {
    event.preventDefault()
 
    hideEl();
    const input= document.getElementById("search")
    

    fetch(`https://goweather.herokuapp.com/weather/${input.value}`)
    .then((response)=> response.json())
    .then((data => renderweatherDetails(data)));


    function renderweatherDetails(data) {
        dataTemp.innerText= `Temperature: ${data.temperature}`
        dataWind,innerText=`Wind: ${data.wind_kph}Kph`
        datadescription.innerText=`Description: ${data.description}`
    }

    recommendationbtn.addEventListener("click", function onclick(e) {
        e.preventDefault()

        fetch(`https://goweather.herokuapp.com/weather/${input.value}`)
        .then((response)=> response.json())
        .then((data => recommendationCreater(data)));


        function recommendationCreater(data) {
            let descr= data.description
        if(descr === "Cloudy" || descr === "Partly cloudy") {
            return textrecomm.textContent=`Description: Wear heavy clothing and remember to carry an umbrella`
        } 
        else if (descr !== "Cloudy" || descr !== "Partly cloudy") {
            return textrecomm.textContent=`Description: Wear light clothing and remember to hydrate`
        }
        }
    })
})


function liked(){
    var element = document.getElementById("like");
    element.classList.toggle("liked");
  }

// about tag event listener
abouttag.addEventListener("click", () => {
    abtEl.style.display= "block"
    mainDetails.style.display= "none";
    fdbckEl.style.display= "none";
    hideEl();
})


document.addEventListener("DOMContentLoaded", () => {
    console.log("The DOM has loaded")
    locationForm.onsubmit
    recommendationbtn.onclick


})