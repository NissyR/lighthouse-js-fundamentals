const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let allIngredients = [bakeryA, bakeryB];
  let validRecipe = '';
  recipes.forEach(function(recipe) {
      for (let i = 0; i < recipes.ingredients.length; i++) {
          let firstIngredient = recipes.ingredients[i];
          let secondIngredient = recipes.ingredients[i+1];
          if(allIngredients.includes(firstIngredient) && allIngredients.includes(secondIngredient)) {
            validRecipe = recipes.name ;     
  }  
      }
  });
  return validRecipe;
};

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));