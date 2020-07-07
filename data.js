let data = {"firmness":{"name":"very-soft","url":"https://pokeapi.co/api/v2/berry-firmness/1/"},
"flavors":[{"flavor":{"name":"spicy","url":"https://pokeapi.co/api/v2/berry-flavor/1/"},"potency":0},
{"flavor":{"name":"dry","url":"https://pokeapi.co/api/v2/berry-flavor/2/"},"potency":0},
{"flavor":{"name":"sweet","url":"https://pokeapi.co/api/v2/berry-flavor/3/"},"potency":10},
{"flavor":{"name":"bitter","url":"https://pokeapi.co/api/v2/berry-flavor/4/"},"potency":0},
{"flavor":{"name":"sour","url":"https://pokeapi.co/api/v2/berry-flavor/5/"},"potency":0}],"growth_time":3,"id":3,
"item":{"name":"pecha-berry","url":"https://pokeapi.co/api/v2/item/128/"},"max_harvest":5,"name":"pecha",
"natural_gift_power":60,"natural_gift_type":{"name":"electric","url":"https://pokeapi.co/api/v2/type/13/"},
"size":40,"smoothness":25,"soil_dryness":15};

console.log(data.flavors[0].flavor.name, data.flavors[0].flavor.url);

let PokemonData = {"count":807,"next":"https://pokeapi.co/api/v2/pokemon-species/?offset=20&limit=20","previous":null,
"results":[{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon-species/1/"},{"name":"ivysaur",
"url":"https://pokeapi.co/api/v2/pokemon-species/2/"},{"name":"venusaur","url":"https://pokeapi.co/api/v2/pokemon-species/3/"},
{"name":"charmander","url":"https://pokeapi.co/api/v2/pokemon-species/4/"},{"name":"charmeleon",
"url":"https://pokeapi.co/api/v2/pokemon-species/5/"},{"name":"charizard","url":"https://pokeapi.co/api/v2/pokemon-species/6/"},
{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon-species/7/"},{"name":"wartortle",
"url":"https://pokeapi.co/api/v2/pokemon-species/8/"},{"name":"blastoise","url":"https://pokeapi.co/api/v2/pokemon-species/9/"},
{"name":"caterpie","url":"https://pokeapi.co/api/v2/pokemon-species/10/"},{"name":"metapod",
"url":"https://pokeapi.co/api/v2/pokemon-species/11/"},{"name":"butterfree","url":"https://pokeapi.co/api/v2/pokemon-species/12/"},
{"name":"weedle","url":"https://pokeapi.co/api/v2/pokemon-species/13/"},{"name":"kakuna",
"url":"https://pokeapi.co/api/v2/pokemon-species/14/"},{"name":"beedrill","url":"https://pokeapi.co/api/v2/pokemon-species/15/"},
{"name":"pidgey","url":"https://pokeapi.co/api/v2/pokemon-species/16/"},{"name":"pidgeotto",
"url":"https://pokeapi.co/api/v2/pokemon-species/17/"},{"name":"pidgeot","url":"https://pokeapi.co/api/v2/pokemon-species/18/"},
{"name":"rattata","url":"https://pokeapi.co/api/v2/pokemon-species/19/"},
{"name":"raticate","url":"https://pokeapi.co/api/v2/pokemon-species/20/"}]}