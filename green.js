

// categoris
const categorisContainer = document.getElementById('categoris_container')
const cardContainer = document.getElementById('card_container')


const loadCategoris = () => {
  fetch('https://openapi.programming-hero.com/api/categories')
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
}

const displayCategories = (categories) => {
  categorisContainer.innerHTML = ''
  categories.forEach(catagory => {
    categorisContainer.innerHTML += `
    <li id="${catagory.id}" class="hover:bg-[#15803d] hover:text-[#fff] px-2 py-2 rounded-md">${catagory.category_name}</li>
    `
  })
  categorisContainer.addEventListener('click', (e) => {
    const allLi = document.querySelectorAll('li')
    allLi.forEach(li => {
      li.classList.remove('bg-[#15803d]')
    })

    if (e.target.localName === 'li') {
      e.target.classList.add('bg-[#15803d]')
      plantCategoris(e.target.id);
    }
  })
}

const allCategory = (all) => {
  fetch('https://openapi.programming-hero.com/api/plants')
    .then(res => res.json())
    .then(data => showCard(data.plants))
}

const plantCategoris = (category) => {
  console.log(category);
  fetch(`https://openapi.programming-hero.com/api/category/${category}`)
    .then(res => res.json())
    .then(data => {
      showCard(data.plants);
    })
}

const showCard = (cata) => {
  cardContainer.innerHTML = '';
  cata.forEach(iteam => {
    const divItem = document.createElement('div')
    divItem.innerHTML = `       
           <div class="space-y-4 shadow-md">
              <img src="${iteam.image}" alt="" class="rounded-md h-[250px] object-cover w-full bg-gray-200 p-2">
              <h1 class="font-bold text-[1.25rem]">${iteam.name}</h1>
              <p>${iteam.description.slice(0, 90)}</p>
              <div class="flex justify-between">
                <button class="bg-[#DCFCE7] px-5 py-2 rounded-full">Fruit Tree</button>
                <button class="font-semibold ">$<span>1200</span></button>
              </div>
              <button class="bg-[#15803d] w-full rounded-md px-5 py-2 text-[#fff]"> Add to card </button>
            </div>     
    `

    cardContainer.appendChild(divItem)
  })
}
allCategory()
loadCategoris()