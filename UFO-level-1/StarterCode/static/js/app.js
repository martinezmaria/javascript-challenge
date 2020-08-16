// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select element where to display data:
var tbody = d3.select("tbody");

// Display original data in 'tbody' section, and use function to display filtered results
function displayData(data){ 
  data.forEach(function(sighting){
    new_tr = tbody.append("tr")
      Object.entries(sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
  });
})
};

displayData(tableData);

// Clear the existing output
function clearBody() {
  d3.select("tbody")
    .selectAll("tr").remove()
    .selectAll("td").remove();
};

// Select 'Filter Table' button on 'click' and 'Form' on 'submit' to handle changes
var filterButton = d3.select("#filter-btn");
var form = d3.selectAll("form");

// Select search field element
var searchElem = d3.select("#datetime");

// Create function to filter the data on user input and display results
function handleChange(event) {
  // avoid refreshing page
  d3.event.preventDefault();
  // call 'Clear' function to clear existing output
  clearBody();

// @Get the 'value' property of the search field element
  var inputValue = searchElem.property("value");
// TESTING = Print the value to the console (yay it works!)
  console.log(inputValue);
  
// Create condition to return results
  if (searchElem.property('value') === "" ) {
    // display original data if search field empty
    var results = tableData;
  } else {
    // otherwise, display the filtered results  
    var results = tableData.filter(dateSearch => 
      dateSearch.datetime === searchElem.property('value'));
  };

  console.log(results);
  displayData(results);
};


// Create event handlers
filterButton.on("click", handleChange);
form.on("submit", handleChange);




// TESTING FILTER
// var results = tableData.filter(function(date) {
//     return date.datetime === "1/13/2010";
// });
// TESTING RESULTS TO CONSOLE
// console.log(results);