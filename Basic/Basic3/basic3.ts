var names : Array<string> = ["Anna","Mana","Banana","Hanna","Tralalana","Shoshana"];

var container = document.getElementById("container");
for (let index in names) {
	container.innerHTML += index + "<br>";
}

for (let index of names) {
	container.innerHTML += index + "<br>";
}

for (let index in names) {
	container.innerHTML += index + `: ${names[index]}` + "<br>";
}
