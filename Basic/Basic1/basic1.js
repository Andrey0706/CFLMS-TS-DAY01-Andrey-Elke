var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var body = document.getElementById("container");
for (var i = 0; i < numbers.length; i++) {
    var toAppend = "";
    for (var j = 0; j < numbers.length; j++) {
        toAppend = toAppend + ("<p>" + numbers[j] + " X " + numbers[i] + "</p>");
    }
    body.innerHTML = body.innerHTML + "<hr>" + toAppend;
}
