const apiKey="fce0d9ea29a241cf86dd3e19e5ad60b2"
const baseUrl="http://api.spoonacular.com"
const container = document.querySelector('.container') 

const recipeUrl = `${baseUrl}/recipes/random?limitLicense=true&number=10&apiKey=${apiKey}`;

function fetchRandomRecipes(url) {
  fetch(url)
   .then((res) => res.json())
   .then((data) => {
    data.recipes.map((recipes)=>{
      const mealCard = `<div class="meal-card">
      <img src=${recipes.image} alt=${recipes.title}/>
      <h1 class="title">${recipes.title}</h1>
  
     </div>`;

     container.insertAdjacentHTML('beforeend',mealCard);

    })
  })
}

fetchRandomRecipes(recipeUrl); 