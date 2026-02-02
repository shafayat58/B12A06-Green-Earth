

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








loadCatagory()
