
let cart = [];
let total = 0;
const loadCatagory = () => {
  const url = 'https://openapi.programming-hero.com/api/categories'

  fetch(url)
    .then(res => res.json())
    .then(data => DisplayloadCatagory(data.categories)
    )
}

const loadPlants = (id) => {

  document.getElementById("card-container").classList.add("hidden")
  document.getElementById("loading-spinner").classList.remove("hidden")


  const url = `https://openapi.programming-hero.com/api/category/${id}`



  const allButton = document.querySelectorAll(".btn-loadcatagory")
  allButton.forEach(btn => btn.classList.remove("Box"))


  const clickBtn = document.getElementById(`loadBtn-${id}`)
  clickBtn.classList.add("Box")




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
         <div class="font-bold card-price"><i class="fa-solid fa-bangladeshi-taka-sign "></i>
         ${plant.price}</div>
      </div>

      <button onclick="addtoCart(this)" class="btn btn-wide  font-bold rounded-full bg-[#15803D] text-white mx-auto">Add To Cart</button>
    </div>

   </div>
    
    `
    cardContainer.appendChild(div)
  })

  document.getElementById("card-container").classList.remove("hidden")
  document.getElementById("loading-spinner").classList.add("hidden")


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
         <div class="font-bold card-price"><i class="fa-solid fa-bangladeshi-taka-sign"></i>
         ${plant.price}</div>
      </div>

      <button onclick="addtoCart(this)" class="btn btn-wide  font-bold rounded-full bg-[#15803D] text-white mx-auto  ">Add To Cart</button>
    </div>

   </div>
    
    `
    cardContainer.appendChild(div)
  })


}


loadCatagory()
loadAllPlant()


const addtoCart = (btn) => {
  const card = btn.parentNode.parentNode;
  const cartTittle = card.querySelector(".card-title").innerText;



  const cardPrice = card.querySelector(".card-price").innerText;
  const cardPriceNumber = parseFloat(cardPrice.replace(/[^\d.]/g, ""));
  console.log(cartTittle, cardPriceNumber);

  const selectAllItems = {
    title: cartTittle,
    price: cardPriceNumber
  };


  cart.push(selectAllItems)
  total = total + 0;
  Displaytotal(total)
  DisplayaddtoCart(cart);






}

Displaytotal = (val => {
  const totalCard = document.getElementById("total-card")
  total.innerText = val;

})


const DisplayaddtoCart = (carts) => {
  const cartContainer = document.getElementById("cart-container");
  cartContainer.innerHTML = "";

  let total = 0;

  for (const cartItem of carts) {
    total += cartItem.price;

    const div = document.createElement("div");
    div.className =
      "Box p-3 my-2 relative w-64 bg-white rounded-lg shadow-md flex justify-between items-center";

    div.innerHTML = `
       
      <div class="absolute top-5 -right-1 w-6 h-6 bg-red-100 flex items-center justify-center rounded-full cursor-pointer" onclick="removeCart(this)">
        <i class="fa-solid fa-xmark text-red-600 text-sm"></i>
      </div>

      <div>
        <p class="font-bold text-sm truncate cartTittle">${cartItem.title}</p>
        <p class="font-bold text-sm text-green-700 flex items-center gap-1">
          <i class="fa-solid fa-bangladeshi-taka-sign"></i>
          ${cartItem.price}
        </p>
      </div>
    `;

    cartContainer.appendChild(div);
  }

  const totalDiv = document.createElement("div");
  totalDiv.className =
    "w-64 mt-4 flex justify-between font-bold border-t pt-2";

  totalDiv.innerHTML = `
    <span>Total:</span>
    <span>৳ ${total}</span>
  `;

  cartContainer.appendChild(totalDiv);
};




const removeCart = (btn) => {
  const item = btn.parentNode;
  const cartTittle = item.querySelector(".cartTittle").innerText;


  cart = cart.filter((lk) => lk.title !== cartTittle);


  item.remove();


  DisplayaddtoCart(cart);
};








