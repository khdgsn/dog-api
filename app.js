const dogCard = document.getElementById('dogCard');

const fetchDog = async () => {
    console.log('fetch get async')

    try{
        const url = `https://dog.ceo/api/breeds/list/all`;
        const res = await fetch(url);
        const data = await res.json();
        
        const dog = data.results.map((data, index) => ({
            id: index + 1,
            image: `https://dog.ceo/api/breeds/image/random/${index + 1}`  
        }));
        console.log('here');
        displayDog(dog); 
    }
    catch(err){
        console.log(err);
    }
    
};

const displayDog = (dog) => {
    const dogHTMLString = dog
        .map(
            (dog) =>
                `<img class="card-image" src="${dog.image}"/>`
        )
        .join('');
    dogCard.innerHTML = dogHTMLString;
};

fetchDog();