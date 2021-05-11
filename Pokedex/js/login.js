$(document).ready(init);

function init(){
    if(!localStorage.getItem("token")){
        $(".btn-secondary").click(function() {
            window.location.href = 'signin.html';
        });
        $(".btn-primary").click(login);
    }else{
        window.location.href = "pokedex.html";
    }
}

function login(){
    var mail =$("#input-mail").val();
    var pass= $("#input-password").val();

    axios({
        method: 'post',
        url: 'http://localhost:3000/user/login',
        data: {
            user_mail: mail,
            user_password: pass
        }
    }).then(function(response){
        //console.log(response);
        if(response.data.code === 200){
            localStorage.setItem("token",response.data.message);
            window.location.href = 'pokedex.html';
        }else{
            alert("Usuario y/o contraseña incorrectos");
        }
    }).catch(function(response){
        console.log(response);
    });
};