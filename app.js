const dogCard = document.getElementById('dogCard');

const fetchDog = async () => {
    const url = `https://dog.ceo/api/breeds/list/all`;
    const res = await fetch(url);
    const data = await res.json();
        
    const dog = data.results.map((data) => ({
        name: data.name,
        id: data.id,
    }));
    
    displayDog(dog); 
};

const displayDog = (dog) => {
    const dogHTMLString = dog
        // creates a new array populated with the results of calling dog on every element in the calling array.
        .map(
            (doggo) =>
            `
            <li class="card">
                <img class="card-image" src="${doggo.image}"/>
                <h2 class="card-title">Your random dog</h2>
                <p class="card-content">${doggo.id}. ${doggo.name}</p>
                </a>
            </li>
            `
        )
        // joins populated array together as a string
        .join('');
    dogCard.innerHTML = dogHTMLString;
};

fetchDog();