var names = ["Anna", "Mana", "Banana", "Hanna", "Tralalana", "Shoshana"];
var container = document.getElementById("container");
for (var index in names) {
    container.innerHTML += index + "<br>";
}
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var index = names_1[_i];
    container.innerHTML += index + "<br>";
}
for (var index in names) {
    container.innerHTML += index + (": " + names[index]) + "<br>";
}
