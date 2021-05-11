$(document).ready(init);

function init(){
    if(!localStorage.getItem("token")){
        $(".btn-secondary").click(function() {
            window.location.href = 'login.html';
        });
        $(".btn-primary").click(signin);
    }else{
        window.location.href = "pokedex.html";
    }

    
}

function signin(){
    var mail =$("#input-mail").val();
    var name =$("#input-name").val();
    var pass= $("#input-password").val();

    console.log(mail + " "+pass);

    axios({
        method: 'post',
        url: 'http://localhost:3000/user/signin',
        data: {
            user_mail: mail,
            user_name: name,
            user_password: pass
        }
    }).then(function(response){
        console.log(response);
        alert("Registro exitoso");
        window.location.href = "login.html";
    }).catch(function(response){
        console.log(response);
    });
};