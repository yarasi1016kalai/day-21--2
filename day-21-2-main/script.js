var division=document.createElement("div")
division.setAttribute("class","container")
document.body.append(division)

var main=document.createElement("h1")
main.innerText="Zoo-Animals"
division.append(main)

var heading=document.createElement("h3")
var line=document.createElement("hr")
division.append(line)
heading.innerHTML=`<p>&nbsp;&nbsp;&emsp;&emsp;zoo,also called zoological garden or zoological park, place where wild animals and, in some instances, domesticated animals are exhibited in captivity. In such an establishment, animals can generally be given more intensive care than is possible in nature reserves or sanctuaries. Most long-established zoos exhibit general collections of animals, but some formed more recently specialize in particular groups—e.g., primates, big cats, tropical birds, or waterfowl. Marine invertebrates, fishes, and marine mammals are often kept in separate establishments known as aquariums. The word zoo was first used in the late 19th century as a popular abbreviation for the zoological gardens in London.</p>`
division.append(heading)



var button=document.createElement("button")
button.addEventListener("click",foo())
button.setAttribute("id","clk")
button.innerText="click"
division.append(button)

var output=document.createElement("div")
output.setAttribute("id","out")
division.append(output)


const btn = document.getElementById("clk");
function foo(){
fetch("https://zoo-animal-api.herokuapp.com/animals/rand")
    .then((res) => res.json())
    .then((data) => {
      out.innerHTML = `
      
        <div class="card-body">
         <img class="img-fluid imagesize" src="${data.image_link}">
        <div class="box">
         <p class="mb-1 fs-5">Name: <span class="text-primary fw-bolder">${data.name}</span></p>
         <p class="mb-1 fs-5">Animal Type: <span class="text-primary fw-bolder">${data.animal_type}</span></p>
         <p class="mb-1 fs-5">Lifespan: <span class="text-primary fw-bolder">${data.lifespan}</span></p>
         <p class="mb-1 fs-5">Min.Length: <span class="text-primary fw-bolder">${data.length_min}</span></p>
         <p class="mb-1 fs-5">Max.Length: <span class="text-primary fw-bolder">${data.length_max}</span></p>
         <p class="mb-1 fs-5">Min.weigth: <span class="text-primary fw-bolder">${data.weight_min}</span></p>
         <p class="mb-1 fs-5">Max.Weight: <span class="text-primary fw-bolder">${data.weight_max}</span></p>
         <p class="mb-1 fs-5">Habitat: <span class="text-primary fw-bolder">${data.habitat}</span></p>
         <p class="mb-1 fs-5">Geo-range: <span class="text-primary fw-bolder">${data.geo_range}</span></p>
         
        
       </div>
        </div>`;
    })
    .catch((error) => {
      console.log(error);
    })
}

 btn.addEventListener("click",foo)