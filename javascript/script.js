const apiKey = `live_tn3eyfcU5ZNoyBUNo46k3FPN1vU55EC2KSmsOmAb8uz3FR2FSxAZaO290OgOxSAu`;
const apiUrl = `https://api.thecatapi.com/v1/images/search?api_key=${apiKey}`;
var seila = 0;


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

    // console.log("ID 1: " + data[0].id);

    document.getElementsByClassName("heart")[0].addEventListener("click", function()
    {
        
        catFav({catUrl: data[0].url,});
    }, { once: true });
    
    
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
    const vazio = document.querySelector('#vazio');
    vazio.style.display = 'none';
    catSlide.style.display = 'flex';
    breedCat.style.display = 'none'; 
    favCat.style.display = 'none';
    iconVoting.style.color = 'orange';
    iconBreeds.style.color = 'darkslategrey';
    iconFav.style.color = 'darkslategrey';
}

async function catFav(url)
{
    // console.log("ID 2: " + url.catUrl);

    const divFav = document.getElementById("favCat");
    const createFav = document.createElement('img');
    createFav.src = url.catUrl;
    createFav.id = "favSlide";

    divFav.appendChild(createFav);

    const vazio = document.querySelector('#vazio');
    vazio.style.display = 'none';
    seila = 1;
    catImg();


    // catImg();

    // const imgID = id.catID;
    // const subID = "amoreutv";

    // var rawBody = JSON.stringify
    // (
    //     { 
    //         "image_id": imgID,
    //         "sub_id": subID
    //     }
    // );

    // const newFavourite = await fetch
    // (
    //     "https://api.thecatapi.com/v1/favourites", 
    //     {
    //         method: 'POST',
    //         headers: { 'x-api-key': apiKey} ,
    //         body: rawBody
    //     }
    // )
}

async function favPage()
{
    const iconVoting = document.querySelector('#voting');
    const iconBreeds = document.querySelector('#breeds');
    const iconFav = document.querySelector('#favs');
    const catSlide = document.querySelector('#catSlide');
    const breedCat = document.querySelector('#breedCat');
    const favImg = document.querySelector('#favCat');
    favImg.style.display = 'grid';
    breedCat.style.display = 'none';
    catSlide.style.display = 'none'
    iconVoting.style.color = 'darkslategrey';
    iconBreeds.style.color = 'darkslategrey';
    iconFav.style.color = 'orange';
    console.log(seila);
    const vazio = document.querySelector('#vazio');
    if(seila == 0)
    {
        vazio.style.display = 'flex';
    }
    else
    {
        vazio.style.display = 'none';
    }

    // const response = await fetch
    // (
    //     'https://api.thecatapi.com/v1/favourites?limit=6&sub_id=amoreutv&order=DESC',
    //     {
    //         headers:
    //         {
    //             "content-type":"application/json",
    //             'x-api-key': apiKey
    //         }
    //     }
    // );
    // const favourites = await response.json();

    // console.log(favourites);
}

function breedsPage()
{
    const iconVoting = document.querySelector('#voting');
    const iconBreeds = document.querySelector('#breeds');
    const iconFav = document.querySelector('#favs');
    const favCat = document.querySelector('#favCat');
    const catSlide = document.querySelector('#catSlide');
    const breedCat = document.querySelector('#breedCat');
    const vazio = document.querySelector('#vazio');
    vazio.style.display = 'none';
    favCat.style.display = 'none';
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

votingPage();
catImg();