const G = require("glob");

// create variable to grab element to change
const dogCard = document.getElementById('dogCard');

// create variable to grab data from an API
// use async & await to make javascript wait until program is ready
const fetchDog = async () => {
    // assigning varible
    const url = 'https://dog.ceo/api/breeds/image/random';
    // making js wait until all data us fetched using above variable
    const res = await fetch(url);
    // tells us that the data is a response stream
    // assining variable to res so that json can turn it to a JS object
    const data = await res.json();
    console.log(data);
    
    const dog = data.message
    console.log(dog)
    displayDog(dog);

    var result = url.slice(-1)
    console.log(result)
}

const displayDog = (dog) => {
    const dogHTMLString = `<img class="card-image" src=${dog} />`
    dogCard.innerHTML = dogHTMLString;
}

fetchDog();

/*
how to check last element in string 
if it doesnt not equal G, remove it
*/
