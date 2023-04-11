// const fruits = ["apple", "banana", "cherry", "kiwi", "orange", "melon"];
// console.log(fruits);

// const moreThanFiveLetters = fruits.filter((v, i) => {
//     return v.length >= 5;
// });

// console.log(moreThanFiveLetters);

const food = [
    { type: "fruits", name: "apple" },
    { type: "vegetable", name: "carrot" },
    { type: "fruits", name: "banana" },
    { type: "vegetable", name: "potato" },
    { type: "fruits", name: "akiwi" },
    { type: "vegetable", name: "tomato" },
    { type: "fruits", name: "orange" },
];

const onlyFruits = food.filter((v, i) => {
    return v.type === "fruits";
});

const onlyFruits2 = food.map((v, i) => {
    if (v.type === "fruits") {
        return v;
    }
});

console.log(onlyFruits);
console.log(onlyFruits2);
