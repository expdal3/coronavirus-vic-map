// {get the current date}
var d = new Date();

var month = d.getMonth() + 1;
var day = d.getDate();

var output =
    (day < 10 ? '0' : '') + day + ' - ' +
    (month < 10 ? '0' : '') + month + ' - ' +
    d.getFullYear();

// {assign the  current date to index.html}
$(".todayDate").text("Data is updated until " + output);

// $(".todayDate").text(function(output) {
//     return output;
// });