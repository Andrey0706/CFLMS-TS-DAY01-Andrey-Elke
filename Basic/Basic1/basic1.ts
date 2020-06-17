var numbers : Array<number> = [1,2,3,4,5,6,7,8,9,10];


var body = document.getElementById("container");

for(let i=0; i<numbers.length; i++){
	var toAppend = ""
 for(let j=0; j<numbers.length; j++){
 	toAppend = toAppend +`<p>${numbers[j]} X ${numbers[i]}</p>`;
 
 }

 	body.innerHTML = body.innerHTML + "<hr>" + toAppend;
}