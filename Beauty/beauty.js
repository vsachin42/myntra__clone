
let beautyItem = JSON.parse(localStorage.getItem("beautyProducts"));

function displayData(beautyItem){
    //    document.querySelector("#container").innerHTML = "";

       beautyItem.forEach((items) => {
         let card = document.createElement("div");
        
         let productImage = document.createElement("img");
         productImage.setAttribute("src",items.avatar);
         
         let title = document.createElement("h3");
         title.innerText = items.title;

         let price = document.createElement("h1");
         price.innerText = "Rs: "+items.price;

         let category = document.createElement("p");
         category.innerText = items.category;

         let description = document.createElement("p");
         description.innerText = items.description;

         let detail = document.createElement("button");
         detail.innerText = "View Details";

         card.append(productImage,title,price,category,description,detail);

         document.querySelector("#container").append(card);

       })
}

displayData(beautyItem);