const dogCard = document.getElementById('dogCard');

const fetchDog = async () => {
    const url = 'https://dog.ceo/api/breeds/list/all';
    const res = await fetch(url);
    const data = await res.json();
    const dog = data.results.map((data, index) => ({
        name: data.name,
        //id: index + 1,
        image: `https://dog.ceo/api/breed/${index + 1}/images/random`
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