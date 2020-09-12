// from data.js
var tableData = data;

var button = d3.select("#filter-btn");
var form = d3.select("#datetime");
var body = d3.select("tbody");

button.on("click",runEnter);
form.on("submit",runEnter);

function runEnter(){
    var bodyrows = d3.selectAll("td");
    bodyrows.remove();
    d3.event.preventDefault();
    var userinput = d3.select("#datetime");
    var inputvalues = userinput.property("value");
    var filtereddata = tableData.filter(sight => sight.datetime === inputvalues);
    filtereddata.forEach(function(thelot){
        var row = body.append("tr");
        Object.entries(thelot).forEach(function([key,value]){
            var insert = row.append("td");
            insert.text(value);
            
        });
    
    });
    
};