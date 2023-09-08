//fetch api for dish using axios library

console.log("before api call");

const fetchapi = async function () {
  try {
    const res = await axios.get(
      "https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"
    );
    // console.log(res.data);
    console.log(res.data.data.recipe);
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
    console.log(recipes);
  } catch (error) {
    alert(error);
  }
};

fetchapi();

console.log("after api call");
