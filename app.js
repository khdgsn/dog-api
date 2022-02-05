const dogCard = document.getElementById('dogCard');

const fetchDog = async () => {
    const url = 'https://dog.ceo/api/breeds/image/random';
    const res = await fetch(url);
    const data = await res.json();
    const dog = data.results.map((data) => ({
        name: data.name,
        image: 'https://dog.ceo/api/breeds/image/random'
    }));

    displayDog(dog);
}

const displayDog = (dog) => {
    const dogHTMLString = dog
        .map(
            (doggo) =>
            `
            <img class="card-image" src="${doggo.image}"/>
            <p class="card-name">${doggo.name}</p>
            `
            )
            .join('');
        dogCard.innerHTML = dogHTMLString;
}

fetchDog();