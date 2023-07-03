let element = document.createElement("div")
element.class = "container";
element.class = "row";
element.class = "col-lg-4 col-sm-12"
element.class = "card"
element.class = "text-white text-center"

// document.body.appendChild(element);
fetch("https://restcountries.com/v3.1/all")
.then((data)=> data.json())
.then((res)=>
       res.forEach((value, i) => {
        createCountry(value, i);
        
       })
);


function createCountry(value, i){
   
let x = document.createElement("div")
let t = document.createElement("h3")
t.innerText =value.name.common;

let z = document.createElement("img")
z.src = value.flags.png;

let a = document.createElement("p")
a.innerText = `Capital : ${value.capital} \n Region : ${value.region} \n Country Code : ${value.cioc}`;

let b = document.createElement("button")
b.innerText = "click for weather"

x.appendChild(t)
x.appendChild(z)
x.appendChild(a)
x.appendChild(b)

    
    b.addEventListener("click", () =>{
        // console.log(value)
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${value.latlng[0]}&lon=${value.latlng[1]}&appid=ec971d0ba596e458307433de95ee3391`)
       .then((data1)=> data1.json())
    //    .then((result)=> console.log(result));
       
    //    .then((result)=> console.log(result.coord));
        .then((result)=>
        alert(`
        For ${value.name.common}  
Current Humidity is ${result.coord.lat}
Current Humidity is ${result.coord.lon}
`))    
    }) 
    document.body.appendChild(x)

 }


