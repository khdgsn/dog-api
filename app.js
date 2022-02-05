const dogCard = document.getElementById('dogCard');

const fetchDog = async () => {
    const url = `https://dog.ceo/api/breeds/image/random`;
    const res = await fetch(url);
    const data = await res.json();
        
    const dog = data.results.map((data) => ({
        image: `https://dog.ceo/api/breeds/image/random/${data}`
    }));
    
    displayDog(dog); 
};

const displayDog = (dog) => {
    const dogHTMLString = dog
        // creates a new array populated with the results of calling dog on every element in the calling array.
        .map(
            (doggo) =>
            `
            <div class="card">
                <img class="card-image" src="${doggo.image}"/>
                </a>
            </div>
            `
        )
        // joins populated array together as a string
        .join('');
    dogCard.innerHTML = dogHTMLString;
};

fetchDog();