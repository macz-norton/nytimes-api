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
var cardEl = $(".card")

//DECLARE global variables



submitButtonEl.on("click", function(event) {
        event.preventDefault();
        // console.log(event)   
        // console.log(event.target)
        console.log(this)

        var searchTermElVal = $(searchTermEl).val().trim()
        console.log(searchTermElVal)
        var numberRecordsElVal = $(numberRecordsEl).val().trim()
        console.log(numberRecordsElVal)
        var startYearElVal = $(startYearEl).val().trim()
        console.log(startYearElVal)
        var endYearElVal = $(endYearEl).val().trim()
        console.log(endYearElVal)

    var APIKey = "EPfyF9nDGNZAqUO4ekwuINsGeFdJVfwA";
// Here we are building the URL we need to query the database
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "pubyear=&api-key=" + APIKey;



// We then created an AJAX call
// $.ajax({
// url: queryURL,
// method: "GET"
// }).then(function(response) {
// console.log(response)
// }





  });


