var total_price=0;
var itd=1;
var order=[];
function onClick(){
   document.location.reload();
}
function Message(){
   var cost="";
   if(total_price>=3000) cost+="With 10% cashback total cost will be "+total_price*0.9+"tg";
   else if(total_price>=2000) cost+="With 5% cashback total cost will be "+total_price*0.95+"tg";
   else if(total_price>=1000) cost+="With 3% cashback total cost will be "+total_price*0.97+"tg";
   else cost+="Total cost will be "+total_price+"tg";
   $(".form").fadeOut();
   document.getElementById("price").innerHTML=cost;
   $(".letter").fadeIn();
   removeAllChildNodes(document.getElementById("payment-content"));
   document.getElementById("adhome").style.display="none";
   document.getElementById("basket").innerHTML="Your Basket is empty.";
   total_price=0;
   itd=1;
   document.querySelector(".order").disabled=true;
}

function removeAllChildNodes(parent) {
   while (parent.firstChild) {
       parent.removeChild(parent.firstChild);
   }
}
function Added(arg){
   arg.innerHTML="Added!";
}
function mouseover(arg){
   arg.innerHTML="Add to Basket";
}
function AddToBasket(arg1,arg2){
   var d=document.createElement("div");
   var e=document.createElement("img");
   d.id=itd+".z";
   e.src="close.png";
   d.innerHTML=arg1+" and the price is "+arg2+"";
   d.appendChild(e);
   d.style.fontSize="large";
   d.style.padding="10px";
   e.style.width="15px";
   e.style.height="15px";
   e.style.float="right";  
   d.style.maxWidth="100%";
   d.style.borderBottom="dotted";
   document.getElementById("payment-content").appendChild(d);
   document.getElementById("adhome").style.display="block";
   document.getElementById("basket").innerHTML="In Your Basket:";

   document.querySelector(".order").disabled=false;
   
   var price=arg2.split(" ")[0];
   order[itd]=parseInt(price);
   
   itd++;
   total_price+=parseInt(price);

   e.setAttribute('onclick','removeOrder(this)');
   document.getElementById("totalMark").innerHTML=total_price+"tg";

}
function removeOrder(arg){
   var price=order[parseInt(arg.parentElement.id.split(".")[0])];
   total_price-=price;
   document.getElementById("totalMark").innerHTML=total_price+"tg";
   arg.parentElement.remove();
   if(!document.getElementById("payment-content").hasChildNodes()){ 
      document.querySelector(".order").disabled=true;
      document.getElementById("adhome").style.display="none";
      document.getElementById("basket").innerHTML="Your Basket is empty.";
   }
}
function Menu(arg){
      switch(arg.textContent){
         case "Fast-Food":
            document.getElementById("top").style.display="none";
            document.getElementById("top").innerHTML="FAST-FOODS";
            $("#top").fadeIn("slow");
            $(".menubar").fadeOut("slow");
            $("#fastfood").fadeIn("slow");
         break;
         case "Meat":
            document.getElementById("top").style.display="none";
            document.getElementById("top").innerHTML="MEAT";
            $("#top").fadeIn("slow");
            $(".menubar").fadeOut("slow");
            $("#meat").fadeIn("slow");  
         break;
         case "Fruits":
            document.getElementById("top").style.display="none";
            document.getElementById("top").innerHTML="FRUITS";
            $("#top").fadeIn("slow");
            $(".menubar").fadeOut("slow");
            $("#fruit").fadeIn("slow");
         break;
         case "Drinks":
            document.getElementById("top").style.display="none";
            document.getElementById("top").innerHTML="DRINKS";
            $("#top").fadeIn("slow");
            $(".menubar").fadeOut("slow");
            $("#drinks").fadeIn("slow");
         break;
         case "Salad":
            document.getElementById("top").style.display="none";
            document.getElementById("top").innerHTML="SALADS";
            $("#top").fadeIn("slow");
            $(".menubar").fadeOut("slow");
            $("#salad").fadeIn("slow");
         break;
         case "Dairy foods":
            document.getElementById("top").style.display="none";
            document.getElementById("top").innerHTML="DAIRY FOODS";
            $("#top").fadeIn("slow");
            $(".menubar").fadeOut("slow");
            $("#dairyfood").fadeIn("slow");
         break;
         case "Fish and Seafood":
            document.getElementById("top").style.display="none";
            document.getElementById("top").innerHTML="FISH & SEAFOOD";
            $("#top").fadeIn("slow");
            $(".menubar").fadeOut("slow");
            $("#FishSeafood").fadeIn("slow");
         break;
         default:
            document.getElementById("top").style.display="none";
            document.getElementById("top").innerHTML="PIZZA";
            $("#top").fadeIn("slow");
            $(".menubar").fadeOut("slow");
            $("#pizza").fadeIn("slow");            
   }
}
function load(){
   $("body").animate({opacity: '1'},"slow");
}
function logIn(){
   document.querySelector(".form").style.display="flex";
   $(".form").animate({opacity:'1'},"slow");
   $(".main").fadeOut();
}
function Close(){
   document.querySelector(".letter").style.display="none";
   $(".form").fadeOut(); 
   $(".main").fadeIn();
}