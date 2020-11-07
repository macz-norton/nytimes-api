//DECLARE DOM objects
var searchTermEl = $("#searchTerm")
    console.log(searchTermEl)
var numberRecordsEl = $("#numberRecords")
    console.log(numberRecordsEl)
var startYearEl = $("#startYear")
    console.log(startYearEl)
var endYearEl = $("#endYear")
    console.log(endYearEl)
var submitButtonEl = $("#submitButton")
    console.log(submitButtonEl)
var clearButtonEl = $("#clearButton")
    console.log(clearButtonEl)

//DECLARE global variables
var searchTermElVal = searchTermEl.val()
    console.log(searchTermElVal)
var numberRecordsElVal = numberRecordsEl.val()
    console.log(numberRecordsElVal)
var startYearElVal = startYearEl.val()
    console.log(startYearElVal)
var endYearElVal = endYearEl.val()
    console.log(endYearElVal)


var APIKey = "";
// Here we are building the URL we need to query the database
var queryURL = "" + APIKey;



// We then created an AJAX call
// $.ajax({
// url: queryURL,
// method: "GET"
// }).then(function(response) {
// console.log(response)
// }



submitButtonEl.on("click", function() {
    preventDefault();
    // console.log(event)   
    // console.log(event.target)
    console.log(this)

  });


