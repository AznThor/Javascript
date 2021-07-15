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

    Object.entries(sighting).forEach(function([key, value]) {
        console.log(key,value);
        var cell = row.append("td")
        cell.text(value);
      });
    });
//Filters
var button = d3.select("#filter-btn");
button.on("click", function(event){
    d3.event.preventDefault();
    tbody.html("");
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
    });