

// categoris
const categorisContainer = document.getElementById('categoris_container')


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
        (e.target.id);
    };
  })
}

const plantCategoris = (category) => {
  console.log(category);
  fetch('https://openapi.programming-hero.com/api/category/${id}')
    .then(res => res.json)
    .then(data => { 
           
    })
}




loadCategoris()