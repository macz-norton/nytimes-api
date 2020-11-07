//DECLARE DOM objects

//DECLARE global variables


var APIKey = "";
// Here we are building the URL we need to query the database
var queryURL = "" + APIKey;



// We then created an AJAX call
$.ajax({
url: queryURL,
method: "GET"
}).then(function(response) {
console.log(response)
}