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

// cooking_time
// :
// 45
// id
// :
// "5ed6604591c37cdc054bc886"
// image_url
// :
// "http://forkify-api.herokuapp.com/images/FlatBread21of1a180.jpg"
// ingredients
// :
// (7) [{…}, {…}, {…}, {…}, {…}, {…}, {…}]
// publisher
// :
// "My Baking Addiction"
// servings
// :
// 4
// source_url
// :
// "http://www.mybakingaddiction.com/spicy-chicken-and-pepper-jack-pizza-recipe/"
// title
// :
// "Spicy Chicken and Pepper Jack Pizza"
