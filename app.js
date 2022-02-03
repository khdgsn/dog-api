const dogCard = document.getElementById('dogCard');

const fetchDog = async () => {
    console.log('fetch get async')

    try{
        const url = `https://dog.ceo/api/breeds/list/all`;
        const res = await fetch(url);
        const data = await res.json();
        const dog = data.results.map((data, index) => ({
            name: data.name,
            id: index + 1,
            image: `https://dog.ceo/api/breeds/image/random`
        }));
    }
    catch(err){
        console.log(err);
    }
    
    displayDog(dog);
};

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
};

fetchDog();