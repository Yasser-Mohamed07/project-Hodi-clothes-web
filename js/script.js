var allproducts = document.querySelectorAll(".product li")

var div = document.querySelector("#basket")

 var btn = document.querySelector("#btn")
 var totalprice = 0
 var div1 = document.querySelector("#mony")

 allproducts.forEach(function(item){
    item.onclick = function code1(){
        div.innerHTML += item.textContent + item.getAttribute("price") +" "
        if (div.innerHTML !=" "|| totalprice>0 ){
            totalprice += +(item.getAttribute("price"))
        }
    }



 })

 btn.onclick= function (){
     div1.innerHTML += totalprice +" "
 }

 