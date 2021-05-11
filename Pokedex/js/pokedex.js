
$(document).ready(init);
var headers = {};
var url = "http://localhost:3000"

function init(){
    if(localStorage.getItem("token")){
        headers = {
            headers:{
                'Authorization' : "bearer " + localStorage.getItem("token")
            }
        }
        loadPokemon();
    }else{
        window.location.href = "index.html";
    }
}

function loadPokemon(){
    axios.get(url + "/pokemon", headers)
    .then(function(res){
        console.log(res);
        displayPokemon(res.data.message);
    }).catch(function(err){
        console.log(err);
    })
}

function displayPokemon(pokemon){
    console.log(pokemon);
    for(var i=0; i<pokemon.length;i++){
        $("body").append(`<h3>${pokemon[i].pok_name}</h3>`);
    }
}