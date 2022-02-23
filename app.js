// create variable to grab element to change
const dogCard = document.getElementById('dogCard');
// create variable to grab data from an API
// use async & await to make javascript wait until program is ready
const fetchDog = async () => {
    // assigning varible
    const url = 'https://dog.ceo/api/breeds/image/random/';
    // g = globally replace - DO NOT WANT REPLACES ALL /
    // / = what is being replaced however \ = is an escape to make it viable otherwise // is a comment
    let newUrl = url.replace(/\/$/, '');
    console.log(newUrl)

    // making js wait until all data us fetched using above variable
    const res = await fetch(newUrl);
    
    // tells us that the data is a response stream
    // assinging variable to res so that json can turn it to a JS object
    const data = await res.json();
    console.log(data);
    
    const dog = data.message
    console.log(dog)
    displayDog(dog);
}

const displayDog = (dog) => {
    const dogHTMLString = `<img class="card-image" src=${dog} />`
    dogCard.innerHTML = dogHTMLString;
}

fetchDog();


