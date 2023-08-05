var myFoods = ["Fish", "Meet", "Fruits"];
//For:
for (var i = 0; i < myFoods.length; i++) {
    console.log(myFoods[i]);
}
//For Each:
myFoods.forEach(function (food) {
    console.log(food);
});
for (var index in myFoods) {
    console.log(index);
    console.log(myFoods[index]);
}
for (var _i = 0, myFoods_1 = myFoods; _i < myFoods_1.length; _i++) {
    var iterator = myFoods_1[_i];
    console.log(iterator);
}
