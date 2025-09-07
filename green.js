

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
           <div class="space-y-4 ">
              <img src="${iteam.image}" alt="" class="rounded-md h-[250px] object-cover w-full bg-gray-200 p-2">
              <h1 class="font-bold text-[1.25rem]">${iteam.name}</h1>
              <p>${iteam.description.slice(0, 90)}</p>
              <div class="flex justify-between">
                <button class="bg-[#DCFCE7] px-5 py-2 rounded-full">Fruit Tree</button>
                <button class="font-semibold ">৳<span>${iteam.price}</span></button>
              </div>
              <button id="${iteam.id}" class="bg-[#15803d] w-full rounded-full px-5 py-2 text-[#fff] shadow-md "> Add To Cart </button>
            </div>     
    `
    cardContainer.appendChild(divItem)

  })

}

let addToCard = []

document.getElementById('card_container').addEventListener('click', (e) => {
  if (e.target.tagName == 'BUTTON') {
    const name = e.target.parentNode.children[1].innerText
    const price = e.target.parentNode.children[3].children[1].children[0].innerText
    const id = e.target.id
    let object = {
      name, price, id, quintity: 1
    }
    alert(`${name} Add to cart 🛍️`)
    addToCard.push(object)
    showCart(addToCard)
  }
})

const showCart = (crtArr) => {
  const infoCard = document.getElementById('card_info')
  const totalPrice = document.getElementById('total_price')
  let total = 0;

  infoCard.innerHTML = ''
  crtArr.forEach(iteam => {
    const div = document.createElement('div')
    div.innerHTML = `
         <div class="bg-[#DCFCE7] p-2 rounded-md mt-5">
              <h1 class="font-semibold">${iteam.name}</h1>
              <div class="flex justify-between text-gray-500">                
                <p>$<span id="card_price">${iteam.price}</span></p>
                <button onclick='deletCart(${iteam.id})'><i class="fa-solid fa-xmark"></i></button>
              </div>
          </div>
    `
    infoCard.append(div)
    total += Number(iteam.price * iteam.quintity)
  })
  totalPrice.innerText = total;
}

const deletCart = (id) => {
  addToCard.map((iteam, index) => {
    if (iteam.id == id) {
      addToCard.splice(index, 1)
      showCart(addToCard)
    }
  })
}

allCategory()
loadCategoris()