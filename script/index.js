

const loadCatagory = () => {
  const url = 'https://openapi.programming-hero.com/api/categories'
  fetch(url)
    .then(res => res.json())
    .then(data => DisplayloadCatagory(data.categories)
  )
}

const loadPlants = (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`


  document.querySelectorAll(".btn-loadcatagory")
    .forEach(btn => btn.classList.remove("Box"));

  document.getElementById(`loadBtn-${id}`).classList.add("Box")
  
  

  fetch(url)
    .then(res => res.json())
    .then(data => {

      


      DisplayloadPlants(data.plants)
    }
  )
  
}


const plantDetails = (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`
  console.log(url);
  fetch(url)
    .then(res => res.json())
    .then(data => DisplayplantDetails(data.plants)
  )
  
  
}





const DisplayplantDetails = (plants) => {
  const DetailsContainer = document.getElementById("details-container")
  DetailsContainer.innerHTML = `
     <div class="bg-white rounded-lg shadow-lg p-4 space-y-3">

      <h2 class="text-xl font-bold">${plants.name}</h2>

      <figure>
        <img class="plant-img" src="${plants.image}" alt="${plants.name}"
          class="w-full h-48 object-cover rounded-md" />
      </figure>

      <div>
        <h3><span class="font-bold">Category:</span> ${plants.category}</h3>
      </div>

      <h3>
        <span class="font-bold">Price:</span>
        <i class="fa-solid fa-bangladeshi-taka-sign"></i> ${plants.price}
      </h3>

      <div>
        <p><span class="font-bold">Description:</span> ${plants.description}</p>
      </div>

      <div class="modal-action">
        <form method="dialog">
          <button class="btn">Close</button>
        </form>
      </div>
  `
  document.getElementById("word_modal").showModal()
}






const DisplayloadPlants = (plants) => {

  const cardContainer = document.getElementById("card-container")
  cardContainer.innerHTML = "";


  plants.forEach(plant => {

    const div = document.createElement("div")
    div.innerHTML =
      `
    <div class="card bg-base-100 w-96 shadow-sm ">
    <div class="card-body ">
      <figure>
        <img src="${plant.image}" alt="${plant.name}" class="plant-img"  />
       </figure>
      <h2 onclick="plantDetails(${plant.id})" class="card-title">${plant.name}</h2>
      <p>${plant.description}</p>
      <div class="flex justify-between items-center">
       <div class="rounded-full bg-[#DCFCE7]">${plant.category}</div>
         <div class="font-bold"><i class="fa-solid fa-bangladeshi-taka-sign"></i>
         ${plant.price}</div>
      </div>

      <button class="btn btn-wide  font-bold rounded-full bg-[#15803D] text-white mx-auto  ">Add To Cart</button>
    </div>

   </div>
    
    `
    cardContainer.appendChild(div)
  })

  
}


const DisplayloadCatagory = (categories) => {
  const catagoryContainer = document.getElementById("catagory")
  catagoryContainer.innerHTML = "";
  for (let categorie of categories) {
    console.log(categorie);
    const div = document.createElement("div")
    div.innerHTML =
      `
<button id="loadBtn-${categorie.id}" onclick="loadPlants(${categorie.id})" class=" btn-loadcatagory btn-wide text-2xl font-bold hover:bg-green-500 rounded  text-black px-4 py-2">${categorie.category_name}</button>

      `
    catagoryContainer.appendChild(div)
  }



  
}


const loadAllPlant = () => {
  const url = 'https://openapi.programming-hero.com/api/plants'
  fetch(url)
    .then(res => res.json())
    .then(data => DisplayloadAllPlant(data.plants
    ))
}




 const DisplayloadAllPlant = (plants) => {
   const cardContainer = document.getElementById("card-container")
  cardContainer.innerHTML = "";
  

   plants.forEach(plant => {
    
     const div = document.createElement("div")
     div.innerHTML =
       `
    <div class="card bg-base-100 w-96 shadow-sm ">
    <div class="card-body ">
      <figure>
        <img src="${plant.image}" alt="${plant.name}" class="plant-img"  />
       </figure>
      <h2 class="card-title">${plant.name}</h2>
      <p>${plant.description}</p>
      <div class="flex justify-between items-center">
       <div class="rounded-full bg-[#DCFCE7]">${plant.category}</div>
         <div class="font-bold"><i class="fa-solid fa-bangladeshi-taka-sign"></i>
         ${plant.price}</div>
      </div>

      <button class="btn btn-wide  font-bold rounded-full bg-[#15803D] text-white mx-auto  ">Add To Cart</button>
    </div>

   </div>
    
    `
     cardContainer.appendChild(div)
  })
   
    
 }


loadCatagory()
loadAllPlant()


