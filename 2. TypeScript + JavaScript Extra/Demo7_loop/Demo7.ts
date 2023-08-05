let myFoods = ["Fish", "Meet", "Fruits"];
//For:
for (let i = 0; i < myFoods.length; i++) {
  console.log(myFoods[i]);
}
//For Each:
myFoods.forEach((food) => {
  console.log(food);
});
//For in
for (const index in myFoods) {
  console.log(index);
  console.log(myFoods[index]);
}
//For of
for (const iterator of myFoods) {
  console.log(iterator);
}
