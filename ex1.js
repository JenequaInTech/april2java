let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];

function findWords() {
    let found = false; // flag to track if we have found any matches
    for (let name of dog_names) {
        if (dog_string.toLowerCase().includes(name.toLowerCase())) {
            console.log(`Matched ${name}`);
            found = true;
        }
    }
    if (!found) {
        console.log("No Matches");
    }
}


findWords();