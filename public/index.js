const app = function(){
  const url    = "https://restcountries.eu/rest/v2/all"
  const select = document.getElementById('country-select');

  const getCountriesSelectClicked = function(){
    makeRequest(url,requestComplete)
   }

  select.addEventListener('click', getCountriesSelectClicked);
}

const makeRequest = function (url, callback) {
 const request = new XMLHttpRequest();
 request.open("GET", url);
 request.addEventListener("load", callback);
 request.send(); //sending request to the server
}

const requestComplete = function () {
 if(this.status !== 200) return;  //404 cant find it, 500 server error, 200 everything ok and carries on. this.status same as saying request.status
 const jsonString = this.responseText;
 const countries = JSON.parse(jsonString);
 populateList(countries);
}

const populateList = function(countries){
  const ul = document.getElementById("country-list")

  countries.forEach(function(country){
    const li = document.createElement("li");
    li.innerText = country.name;
    ul.appendChild(li);
  })
}


document.addEventListener("DOMContentLoaded", app);