var arrayDessert = [[
        {
            "title": "Pancakes",
            "description": "The best dessert!",
            "img": "img/pancakes.webp",
            "price": 5.50
        },
        {
            "title": "Chocolate Cake",
            "description": "The best dessert!",
            "img": "img/chocolatecake.webp",
            "price": 4.50
        },
        {
            "title": "Churros",
            "description": "The best dessert!",
            "img": "img/churros.jpg",
            "price": 4.50
        },
        {
            "title": "Crepes",
            "description": "The best dessert!",
            "img": "img/crepes.webp",
            "price": 5.50
        },
        {
            "title": "Croissants",
            "description": "The best dessert!",
            "img": "img/crepes.webp",
            "price": 2.50
        },
        {
            "title": "Cupcakes",
            "description": "The best dessert!",
            "img": "img/cupcakes.webp",
            "price": 3.50
        },
        {
            "title": "Eclairs",
            "description": "The best dessert!",
            "img": "img/eclairs.webp",
            "price": 5.50
        },
        {
            "title": "Icecream",
            "description": "The best dessert!",
            "img": "img/ice-cream.webp",
            "price": 3.50
        },
    ],
    [
        {
            "title": "Coffee",
            "description": "The best breakfast!",
            "img": "img/coffee.webp",
            "price": 3.50
        },
        {
            "title": "Croissants",
            "description": "The best breakfast!",
            "img": "img/croissants.webp",
            "price": 4.50
        },
        {
            "title": "Breakfast Special",
            "description": "The special breakfast!",
            "img": "img/breakfastspecial.webp",
            "price": 9.50
        },
        {
            "title": "Eclairs",
            "description": "The best breakfast!",
            "img": "img/eclairs.webp",
            "price": 5.50
        },
        {
            "title": "Cupcakes",
            "description": "The best breakfast!",
            "img": "img/cupcakes.webp",
            "price": 3.50
        },
        {
            "title": "Pancakes",
            "description": "The best breakfast!",
            "img": "img/pancakes.webp",
            "price": 5.50
        },
        {
            "title": "Chocolate Cake",
            "description": "The best breakfast!",
            "img": "img/chocolatecake.webp",
            "price": 4.50
        },
        {
            "title": "Churros",
            "description": "The best breakfast!",
            "img": "img/churros.jpg",
            "price": 4.50
        }
    ],
    [
        {
            "title": "Chicken Wings",
            "description": "The best lunch!",
            "img": "img/chickenwings.webp",
            "price": 8.50
        },
        {
            "title": "Fig Salad",
            "description": "The best lunch!",
            "img": "img/figsalad.webp",
            "price": 7.50
        },
        {
            "title": "Hamburger",
            "description": "The best lunch!",
            "img": "img/hamburger.webp",
            "price": 7.50
        },
        {
            "title": "Lasagna",
            "description": "The best lunch!",
            "img": "img/lasagna.webp",
            "price": 9.50
        },
        {
            "title": "Pizza",
            "description": "The best lunch!",
            "img": "img/pizza.jpg",
            "price": 8.50
        },
        {
            "title": "Rice",
            "description": "The best lunch!",
            "img": "img/rice.webp",
            "price": 7.50
        },
        {
            "title": "Salmon",
            "description": "The best lunch!",
            "img": "img/salmon.webp",
            "price": 11.50
        },
        {
            "title": "Seabream",
            "description": "The best lunch!",
            "img": "img/seabream.jpg",
            "price": 12.50
        }
    ]
];
var nodes = document.getElementsByClassName("ourNode");
for (var i in nodes) {
    for (var j = 0; j < 6; j++) {
        var img = arrayDessert[i][j].img;
        var title = arrayDessert[i][j].title;
        var desc = arrayDessert[i][j].description;
        var price = arrayDessert[i][j].price;
        console.log(img);
        nodes[i].innerHTML += " \n\t<div class=\"elementNode col col-12 col-md-4 col-lg-3 border border-light\" id=" + i + j + ">\n            <img class=\"img-fluid\" src=\"" + img + "\" alt=\"\" />\n            <ul class=\"list-group list-group-flush\">\n              <li class=\"list-group-item\">&#9656;" + title + "</li>\n              <li class=\"list-group-item\">&#9656;" + desc + "</li>\n              <li class=\"list-group-item price\">$" + price + "0</li>\n            </ul>\n          </div>\n          ";
    }
}
//var elementNodes = document.getElementsByClassName("elementNode");
//console.log(elementNodes);
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 6; j++) {
        var new_item = document.getElementById("" + i + j);
        console.log(new_item);
        var node3 = "<input type=\"text\">";
        var text = document.createTextNode(node3);
        new_item.appendChild(text);
        //new_item.addEventListener("click", function(){
        //		this.
        //})
        // Typescript is typesafe. So the document.getElementById() returns the type HTMLElement which does not contain a valueproperty. The subtype HTMLInputElement does however contain the value property.
        var newdiv = document.createElement("p");
        // create a <p> element
        var text = document.createTextNode(new_item);
        // create a text node
        //  newdiv.appendChild(text);
        // Append the text to <p>    
        //document.body.appendChild(newdiv);
        // Append <p> to the body tag
    }
}
