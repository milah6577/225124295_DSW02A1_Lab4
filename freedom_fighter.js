document.getElementById("img-click"),addEventListener("click",function(){
let images = document.getElementById("image");
let favimg = document.getElementById("favourite image");

let count = 0;
let total = images.length;

//favimg.appendChild();

for(let i = 0; i< total;i++){
    let img = images[i];
     
   
       let action = document.getElementById("action");
       let li = document.createElement("li");
       li.textContent =  "Moved " + img + " to favourites"
       action.appendChild(li);

       
    images.click = function(){

        if(images.parentElement.id === "favourite image"){
            favimg.appendChild();
             images.style.border = "3px solid green";

        }
    }
    let msg = document.getElementById("message");
        msg.textContent = "Image " + (count) + " selected as favourite number " + count;
        
    }
    

});


