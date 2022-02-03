const dogCard = document.getElementById('dogCard');

const fetchDog = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
    const res = await fetch(url);
    const data = await res.json();
        
    const dog = data.results.map((data, index) => ({
        name: data.name,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
        1}.png`
    }));
    
    displayDog(dog); 
};

/*

const displayDog = (dog) => {
    const dogHTMLString = dog
        .map(
            (dog) =>
                `
                <li class="card" ${dog.id}">
                <img class="card-image" src="${dog.image}"/>
                </li>
                `
        )
        .join('');
    dogCard.innerHTML = dogHTMLString;
}; */

fetchDog();