// // import {async} from regenerator-runtime;

// export const state = {
//   recipe: {},
// };

// export const loadRecipe = async function (id) {
//   try {
//     const res = await axios.get(
//       `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
//       // "https://forkify-api.herokuapp.com/api/v2/recipes/45e62102-7d79-43e8-84d6-8d160bd6ac34"
//     );
//     // console.log(res.data);
//     if (!id) return;
//     // console.log(res.data.data.recipe);
//     const { recipe } = res.data.data;

//     state.recipe = {
//       cookingTime: recipe.cooking_time,
//       id: recipe.id,

//       imageUrl: recipe.image_url,
//       ingredients: recipe.ingredients,
//       publisher: recipe.publisher,

//       servings: recipe.servings,
//       sourceUrl: recipe.source_url,
//       title: recipe.title,
//     };

//     console.log(state.recipe);
//   } catch (error) {
//     alert(error);
//   }
// };
