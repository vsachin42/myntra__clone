
let cartItem = JSON.parse(localStorage.getItem("cartProducts"));
let paymentItem = JSON.parse(localStorage.getItem("paymentProducts"))||[];

let totalPrice = 0;

function displayData(cartItem){
       document.querySelector("#container").innerHTML = "";

       cartItem.forEach((items,index) => {
         let card = document.createElement("div");
        
         let productImage = document.createElement("img");
         productImage.setAttribute("src",items.avatar);
         
         let title = document.createElement("h3");
         title.innerText = items.title;

         let price = document.createElement("h1");
         price.innerText = "Rs: "+items.price;

        totalPrice += items.price;
         
         let category = document.createElement("p");
         category.innerText = items.category;
         
         let description = document.createElement("p");
         description.innerText = items.description;
         
         let remove = document.createElement("button");
         remove.innerText = "Remove";
         
         remove.addEventListener("click",function(){
             deleteItem(cartItem,index);
             location.reload();
             totalPrice = totalPrice-items.price;
            })

            let payment = document.createElement("button");
            payment.innerText = "Confirm Order";

            payment.addEventListener("click",()=>{
                paymentItem.push(items);
                localStorage.setItem("paymentProducts",JSON.stringify(paymentItem));

            })
            
            card.append(productImage,title,price,category,description,remove,payment);
            
            document.querySelector("#container").append(card);
            
        })
        document.querySelector("#price").innerText = "Total Price: "+totalPrice;
    }
    
    displayData(cartItem);


function deleteItem(data,index){
         data.splice(index,1);
         localStorage.setItem("cartProducts",JSON.stringify(data));
         displayData(data);
}