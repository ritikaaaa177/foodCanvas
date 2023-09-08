//fetch api for dish using axios library

console.log("before api call");
const container = document.querySelector(".container");

const fetchapi = async function () {
  try {
    const res = await axios.get(
      "https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"
    );
    // console.log(res.data);

    // console.log(res.data.data.recipe);
    let { recipe } = res.data.data;

    recipes = {
      cookingTime: recipe.cooking_time,
      id: recipe.id,

      imageUrl: recipe.image_url,
      ingredients: recipe.ingredients,
      publisher: recipe.publisher,

      servings: recipe.servings,
      sourceUrl: recipe.source_url,
      title: recipe.title,
    };

    console.log(recipe.imageUrl);

    const markup = ` <div class="card1">

    Hi i am search bar
</div>
<div class="card2">
<div class="subcard1">

    <img src="${recipes.imageUrl}" alt="recipeimage">
</div>
<div class="subcard2">
    <div class="div1">
        Hi, i am division1
    </div>
    <div class="div2">
        Hi, I am division2
    </div>
</div>
</div>`;

    container.insertAdjacentHTML("afterbegin", markup);
  } catch (error) {
    console.log(error);
  }
};

fetchapi();

// console.log("after api call");
