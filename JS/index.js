//assigning a varaible to our html elements
const loginDetails =document.getElementById("login-details")
const signupDetails =document.getElementById("sign-up-details")
const loginForm= document.getElementById("login-form")
const signUpForm =document.getElementById("sign-up form")
const mainDetails= document.getElementById("weather-html")
const locationForm= document.getElementById("location-form")
const mainDiv= document.getElementById("weather-container")
const signupDiv=document.getElementById("btn-signup")
const signUpButton = document.getElementById("sign-up btn")
const dataTemp= document.getElementById("temp")
const dataWind=document.getElementById("wind")
const datadescription=document.getElementById("description")
const recommendationbtn= document.getElementById("recommend-btn")
const textrecomm= document.getElementById("recomm")
const hometag= document.getElementById("home-tag")
const inputtag= document.getElementById("logtitle")
const returnMessage=document.getElementById("alert")
const textmess= document.getElementById("feedback-review")
const locName= document.getElementById("inputname")
const datareseter= document.getElementById("reset")

//this function hides some of our pages until whenthey are required
function hideEl() {
    loginDetails.style.display= "none";
    signupDetails.style.display= "none";
    signupDiv.style.display= "none";
    inputtag.style.display= "none";
}

//This function submits our login form
loginForm.addEventListener("submit", function onsubmit(e) {
    e.preventDefault()

    hideEl();
    mainDetails.style.display= "block";
    loginForm.reset()
})

//This function submits our sign-up form
signUpForm.addEventListener("submit", function onsubmit(e) {
    e.preventDefault()

    hideEl();
    mainDetails.style.display= "block";
    signUpForm.reset()
})

//This code explains what should happen when the sign-up button on our login page is clicked.
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
    //creating our image icon for our weather output.
    const img= document.createElement("img")
    img.className="icon"
    mainDiv.appendChild(img)
    const input= document.getElementById("search")
    
    //fetching our data based on the location input.
    fetch(`https://api.weatherapi.com/v1/current.json?key=abfd839798f54c37bb6122417221712&q=${input.value}`)
    .then((response)=> response.json())
    .then((data => renderweatherDetails(data)));

    //this function displays our fetched results in our browser.
    function renderweatherDetails(data) {
        
        locName.textContent= `${data.location.name}`
        dataTemp.innerText= `Temperature: ${data.current.temp_c}`+'\u00B0 C'
        dataWind.innerText=`Wind: ${data.current.wind_kph}kph`
        datadescription.innerText=`Description: ${data.current.condition.text}`
        img.src=`${data.current.condition.icon}`
    }
    //function containing our reset location button's purpose.
    datareseter.addEventListener("click", (e)=> {
        e.preventDefault()

        locName.textContent=""
        dataTemp.innerText="Temperature: "
        dataWind.innerText="Wind: "
        datadescription.innerText="Description: "
        img.style.display= "none"
        textrecomm.innerText=""
        locationForm.reset()
    })

    //This function explains what should happen when the recommendation button is clicked.
    recommendationbtn.addEventListener("click", function onclick(e) {
        e.preventDefault()

        //fetching the results of the input location's weather in order to create a recommendation
        fetch(`https://api.weatherapi.com/v1/current.json?key=abfd839798f54c37bb6122417221712&q=${input.value}`)
        .then((response)=> response.json())
        .then((data => recommendationCreater(data)));

        //Our recommendation text based on the fetched results
        function recommendationCreater(data) {
            let descr= data.current.condition.text
        if(descr === "Cloudy" || descr === "Heavy rain" || descr === "Moderate rain") {
            return textrecomm.textContent=`Wear heavy clothing remember to carry an umbrella`
        } 
        else if (descr === "Partly cloudy") {
            return textrecomm.textContent=`Carry a jacket and umbrella just in case`
        }
        else if (descr === "Sunny" || descr === "Clear") {
            return textrecomm.textContent=`Wear light clothing and hydrate regularly.`
        }
        else {
            return textrecomm.textContent=`Wear warm clothing.`
        }
        }
    })
})



//This code assures us that the DOM has loaded before any functionality is applied.
document.addEventListener("DOMContentLoaded", () => {
    console.log("The DOM has loaded")
    locationForm.onsubmit
    recommendationbtn.onclick


})