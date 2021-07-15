// from data.js
var tableData = data;

console.log(tableData);
// YOUR CODE HERE!


var tbody = d3.select("tbody");
console.log(data);

//loops data for console.log
tableData.forEach(function(ufo){
    console.log(ufo);
    var row = tbody.append("tr");

    Object.entries(ufo).forEach(function([key, value]) {
        console.log(key,value);
        var cell = row.append("td")
        cell.text(value);
      });
    });
//Filters
// Select the form 
var form = d3.select(".form-group");
button.on("click", runEnter);
form.on("submit",runEnter);
// Create an eventlistener to filter the table.
function runEnter() {
    //Clear out existing table
    tbody.html("");
    // Prevent the page from refreshing
    d3.event.preventDefault();
//location field
    var inputElement = d3.select("#datetime"); 
    var inputValue = inputElement.property("value");
//filter data 
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    filteredData.forEach(function(dateData){
        var row=tbody.append("tr");
    
        Object.entries(dateData).forEach(function([key,value]){
            var cell=tbody.append("td");
            cell.text(value);
        });
    });

};
