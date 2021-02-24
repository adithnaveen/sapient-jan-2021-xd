var animal = {
    name: "Jackey",
    species: "Dog",
    age: 5,
    speak: function () {
        console.log("Woof... woof... ");
    }
};
// speak makes sense but not with walk as it is missing in animal object 
function makeTheAnimalAndSpeak(ani) {
    // ani.speak(); 
    ani.walk();
}
makeTheAnimalAndSpeak(animal);
