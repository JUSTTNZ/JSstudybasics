// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//      .then(response => {
//           if(!response.ok){
//                throw new Error("Could not fetch resource")
//           }
//           return response.json()
//      })
//      .then(data => console.log(data))
//     .catch(error => console.error(error));

 
const fetchData = async () => {
     try {
          const pokemonType = document.getElementById("pokemonType").value.toLowerCase();
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonType}`)

          if(!response.ok) {
               throw new Error ("cant fetch resource")
          }
           
          const data = await response.json()
          console.log(data)
          const pokemonSprite = data.sprites.front_default;
          const pokemonImage = document.getElementById("pokemonImage")
          pokemonImage.style.display = "block";
          pokemonImage.src = pokemonSprite
          // const final = data.results
          // console.log(final)

          // const pokemonName = "metapod";
          // const pokemon = final.find(p => p.name === pokemonName)

          // if(pokemon) {
          //      const pokemonResponse = await fetch(pokemon.url) 

          //      if(!pokemonResponse.ok) {
          //           throw new Error("could not fetch details")
          //      }

          //      const pokemonData = await pokemonResponse.json()
          //      console.log(pokemonData)
          // }
          // else{
          //      console.log(`could not find ${pokemonName}`)
          // }
          

     }
     catch(error){
          console.error(error)
     }
}

fetchData();