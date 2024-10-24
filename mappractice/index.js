// Challenge 1

// const nums = [1, 2, 3, 4, 5]
// const map1 = nums.map((x) => x * x);
// console.log(map1)


// Challenge 2

// const names = ["alice", "bob", "charles", "danielle"]
// const capsname = names.map(name => name.charAt(0).toUpperCase() + name.slice(1))
// console.log(capsname)

// Challenge 3
const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]

const htmlpokemon = pokemon.map(pkmn => {
    if (['Bulbasaur', 'Charmander', 'Squirtle'].includes(pkmn)){
    return `<p>${pkmn}</p>`;
    }
    return pkmn;
    });

console.log(htmlpokemon)