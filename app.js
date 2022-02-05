// create variable to grab element to change
const dogCard = document.getElementById('dogCard');

// create variable to grab data from an API
// use async & await to make javascript wait until program is ready
const fetchDog = async () => {
    const url = 'https://dog.ceo/api/breeds/list/all';
    const res = await fetch(url);
    const data = await res.json();
    /*
    const dog = data.results.map((data, index) => ({
        name: data.name,
        //id: index + 1,
        image: `https://dog.ceo/api/breed/${index + 1}/images/random`*/
    }));

    displayDog(dog);
}

const displayDog = (dog) => {
    const dogHTMLString = dog
        // creates a new array populated with the results of calling dog on every element in the calling array.
        .map(
            (doggo) =>
            `
            <img class="card-image" src="${doggo.image}"/>
            <p class="card-name">${doggo.name}</p>
            `
            )
            // joins populated array together as a string
            .join('');
        dogCard.innerHTML = dogHTMLString;
}

fetchDog();