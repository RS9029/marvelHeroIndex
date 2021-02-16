
// Call to marvel API

let searchBar = document.getElementById("search");

function heroSearch(){
let container = document.getElementById('hero-container');
let searchValue = searchBar.value;

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
  if(this.readyState ==4 && this.status == 200){

      let data = JSON.parse(this.responseText);
      let result = data.data.results

      let characterCards = result.map(character=>{
        
      let characterName = character.name;
      let thumbnailURL = character.thumbnail.path +"/portrait_incredible.jpg";
      let backStory = character.description;

      let wikiName = characterName.replace(" ","_");
      let nameArr = characterName.split('');


      if(nameArr.includes('(')){
        wikiName = nameArr.slice(nameArr.indexOf("(")+1,nameArr.indexOf(")")).join('');

      }
        
      return(
        `
        <div class = "hero-profile-container">
          <div class = "hero-profile">
            <div class = "hero-profile-front">
              <h1>${characterName}</h1>
            </div>
            <div class = "hero-profile-back">
              <h1>${characterName}</h1>
              <img src = ${thumbnailURL} alt = "${characterName}">
              <p>${backStory}</p>
              <button><a href = "https://en.wikipedia.org/wiki/${wikiName}" target = "_blank">Learn More</a></button>
            </div>
          </div>
        </div>
        `
      )

    })

    container.innerHTML = characterCards.join("");
  }
  
}

xhr.open("GET",`https://gateway.marvel.com:443/v1/public/characters?limit=100&nameStartsWith=${searchValue}&apikey=347bc5f43f63272cadaa164c3b4bf442`,true);
xhr.send();
}

searchBar.addEventListener('keyup', heroSearch);


// result animations





