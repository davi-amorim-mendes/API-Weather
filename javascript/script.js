const apiKey = `live_tn3eyfcU5ZNoyBUNo46k3FPN1vU55EC2KSmsOmAb8uz3FR2FSxAZaO290OgOxSAu`;
const apiUrl = `https://api.thecatapi.com/v1/images/search?api_key=${apiKey}`;

async function catImg()
{
    let response = await fetch(apiUrl, {
        headers: {
            'x-api-key': apiKey
        }
    });

    const data = await response.json();

    if (data && data.length > 0) 
    {
        infoJson
        (
            {
                catImg: data[0].url,
            }
        );
    }

    console.log(data);
    
}

function infoJson(json)
{
    const catSlide = document.querySelector('#catSlide');
    if (catSlide) {
        catSlide.setAttribute('src', json.catImg);
    } else {
        console.log("Elemento #catSlide não encontrado");
    }
}


function votingPage()
{
    const iconVoting = document.querySelector('#voting');
    const iconBreeds = document.querySelector('#breeds');
    const iconFav = document.querySelector('#favs');
    const catSlide = document.querySelector('#catSlide');
    const favCat = document.querySelector('#favCat');
    const breedCat = document.querySelector('#breedCat');
    breedCat.style.display = 'none'; 
    favCat.style.display = 'none';
    iconVoting.style.color = 'orange';
    iconBreeds.style.color = 'darkslategrey';
    iconFav.style.color = 'darkslategrey';
    catImg();
}

async function favPage()
{
    const iconVoting = document.querySelector('#voting');
    const iconBreeds = document.querySelector('#breeds');
    const iconFav = document.querySelector('#favs');
    const catSlide = document.querySelector('#catSlide');
    const breedCat = document.querySelector('#breedCat');
    breedCat.style.display = 'none';
    catSlide.style.display = 'none'
    iconVoting.style.color = 'darkslategrey';
    iconBreeds.style.color = 'darkslategrey';
    iconFav.style.color = 'orange';

    const response = await fetch
    (
        'https://api.thecatapi.com/v1/favourites?limit=6&sub_id=amoreutv&order=DESC',
        {
            headers:
            {
                "content-type":"application/json",
                'x-api-key': apiKey
            }
        }
    );
    const favourites = await response.json();

    console.log(favourites);
}

function breedsPage()
{
    const iconVoting = document.querySelector('#voting');
    const iconBreeds = document.querySelector('#breeds');
    const iconFav = document.querySelector('#favs');
    const catSlide = document.querySelector('#catSlide');
    const breedCat = document.querySelector('#breedCat');
    breedCat.style.display = 'flex';
    catSlide.style.display = 'none'
    iconVoting.style.color = 'darkslategrey';
    iconBreeds.style.color = 'orange';
    iconFav.style.color = 'darkslategrey';


}

document.querySelector('#formCat').addEventListener('submit', async (event) =>{
    event.preventDefault();

    const type = document.querySelector('#typeCat').value;

    console.log(type);

    const apiBreeds = `https://api.thecatapi.com/v1/images/search?breed_ids=${type}`;
    const catSlide = document.querySelector('#catSlide');
    catSlide.style.display = 'flex';
    getType(apiBreeds);
});

async function getType(breedUrl)
{
    console.log(breedUrl);
    let response = await fetch(breedUrl, {
        headers: {
            'x-api-key': apiKey
        }
    });
    console.log(response.status);

    const data = await response.json();

    if (data && data.length > 0) 
    {
        infoJsonBreed
        (
            {
                catImg: data[0].url,
            }
        );
    }
    console.log(data);
}

function infoJsonBreed(json)
{
    const catSlide = document.querySelector('#catSlide');
    if (catSlide) {
        catSlide.setAttribute('src', json.catImg);
    } else {
        console.log("Elemento #catSlide não encontrado");
    }
}

async function catFav()
{
    const divFav = document.querySelector('#favCat');
    const favCat = document.createElement('img');

    let response = await fetch(apiUrl, {
        headers: {
            'x-api-key': apiKey
        }
    });

    const data = await response.json();

    if (data && data.length > 0) 
        {
            infoJson
            (
                {
                    catId: data[0].id,
                }
            );
        }
    console.log(catId);

    var rawBody = JSON.stringify
    (
        { 
            "image_id": catId,
            "sub_id":"amoreutv"
        }
    );

    const newFavourite = await fetch
    (
        "https://api.thecatapi.com/v1/favourites", 
        {
            method: 'POST',
            headers: { 'x-api-key': apiKey} ,
            body: rawBody
        }
    )

    votingPage();
}

votingPage();