

const loadCatagory = () => {
  const url = 'https://openapi.programming-hero.com/api/categories'
  fetch(url)
    .then(res => res.json())
    .then(data => DisplayloadCatagory(data.categories)
  )
}


const DisplayloadCatagory = (categories) => {
  const catagoryContainer = document.getElementById("catagory")
  catagoryContainer.innerHTML = "";
  for (let categorie of categories) {
    console.log(categorie);
    const div = document.createElement("div")
    div.innerHTML =
      `
<button class="btn btn-wide text-2xl font-bold hover:bg-green-500 rounded bg-[#15803D] text-white px-4 py-2">${categorie.category_name}</button>

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

// "plants": [
//   {
//     "id": 1,
//     "image": "https://i.ibb.co.com/cSQdg7tf/mango-min.jpg",
//     "name": "Mango Tree",
//     "description": "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green canopy offers shade, while its sweet fruits are rich in vitamins and minerals.",
//     "category": "Fruit Tree",
//     "price": 500
//   },



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


