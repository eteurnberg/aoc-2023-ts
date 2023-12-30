const favoriteFruits = ['apple', 'strawberry', 'orange'];

function addFruit(fruit: string) {
  favoriteFruits.push(fruit);
}

addFruit('banana');

console.log(`fruits: ${favoriteFruits}`);
