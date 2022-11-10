// console.log("Hello");
let bag = [];
let arr = [];
let manItem = JSON.parse(localStorage.getItem("menCartProduct"))||[];
let womenItem = JSON.parse(localStorage.getItem("womenCartProduct"))||[];
let kidsItem = JSON.parse(localStorage.getItem("kidsCartProduct"))||[];
let homeLivingItem = JSON.parse(localStorage.getItem("homeLivingCartProduct"))||[];
let beautyItem = JSON.parse(localStorage.getItem("beautyProducts"))||[];

let url = "https://636b4c05ad62451f9fada157.mockapi.io/products";

async function getData(){
       let response = await fetch(url);
       let data = await response.json();
       bag = data;
       // console.log(bag);
       displayData(data);
}

getData();

function displayData(data){
    //    document.querySelector("#container").innerHTML = "";
    manItem = [];
    womenItem = [];
    kidsItem = [];
    homeLivingItem = [];
    beautyItem = [];

       data.forEach((items) => {
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

         if(category.innerText=="Men"){
              manItem.push(items);
              localStorage.setItem("menCartProduct",JSON.stringify(manItem));
         }

         if(category.innerText=="Women"){
              womenItem.push(items);
              localStorage.setItem("womenCartProduct",JSON.stringify(womenItem));
         }

         if(category.innerText=="Kids"){
              kidsItem.push(items);
              localStorage.setItem("kidsCartProduct",JSON.stringify(kidsItem));
         }

         if(category.innerText=="Home & Living"){
            homeLivingItem.push(items);
              localStorage.setItem("homeLivingCartProduct",JSON.stringify(homeLivingItem));
         }

         if(category.innerText=="Beauty"){
              beautyItem.push(items);
                localStorage.setItem("beautyProducts",JSON.stringify(beautyItem));
           }

         card.append(productImage,title,price,category,description,detail);

         document.querySelector("#container").append(card);

       })
}