// console.log("Hello");
let bag = [];
let arr = [];

let url = "https://636b4c05ad62451f9fada157.mockapi.io/products";

async function getData(){
       let response = await fetch(url);
       let data = await response.json();
       bag = data;
       console.log(bag);
       displayData(data);
}

getData();

function displayData(data){
    //    document.querySelector("#container").innerHTML = "";

       data.forEach((items) => {
         let card = document.createElement("div");
        
         let productImage = document.createElement("img");
         productImage.setAttribute("src",items.avatar);
         
         let title = document.createElement("h3");
         title.innerText = items.title;

         let price = document.createElement("h1");
         price.innerText = items.price;

         let category = document.createElement("p");
         category.innerText = items.category;

         let description = document.createElement("p");
         description.innerText = items.description;

         card.append(productImage,title,price,category,description);

         document.querySelector("#container").append(card);

       })
}