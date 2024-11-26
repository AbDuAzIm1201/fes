let input = document.querySelector(".input")
let wrapper = document.querySelector(".wrapper")
  


fetch("https://raw.githubusercontent.com/diyor011/apibest/master/api.json")
.then((res => res.json()))
.then((data) => {
console.log(data);
data.map((product) => {
    let card = document.createElement("div")
    card.classList.add("card")
    let h2 = document.createElement("h2")
    let img = document.createElement("img")
    let p1 = document.createElement("p1")
    let p2 = document.createElement("p2")


       img.src = product.pic;
       h2.innerHTML = product.name;
       p1.innerHTML = product.price;
       p2.innerHTML = product.fulldesc;


       
card.append(img,h2,p1,p2)
wrapper.appendChild(card)

});

input.addEventListener("change", function(){
    wrapper.innerHTML = ""
    let new_arr = data.filter(product => product.name.toLowerCase().includes(input.value))
    console.log(new_arr);
    new_arr.map((product) => {
    let card = document.createElement("h2");
    let img = document.createElement("img");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    
    img.src =product.pic;
    h2.innerHTML = product.name
    p1.innerHTML = product.price
    p2.innerHTML = product.fulldesc
    
    card.append(img,h2,p1,p2)
    wrapper.appendChild(card)
    
    });
    
    })

})























