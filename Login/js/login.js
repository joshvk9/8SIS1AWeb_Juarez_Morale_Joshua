function validar(login){
    if(login.email.value.length < 3){
        alert("Escriber el correo correcto");
        login.email.focus();
    }
    var checkOK = "qwertyuiopasdfghjjklñzxcvbnm";

    var checkString = login.email.value;

    var todoesvalido = true;

    for(var i = 0; i < checkString.length; i++){
        var ch = checkString.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j)){
                break;
            }
        }
        if(j == checkOK.length){
            todoesvalido = false;
            break;
        }else{
            window.location = bienvenida.html
        }
    }
    if(!todoesvalido){
        alert("Escriba la contraseña");
        login.password.focus();
        return false;
    }else{
        window.location = bienvenida.html
    }

    var txt = login.email.value;

    var b = /^[^@\s]+[^@\.\s]+(\.[^@\.\s]+)+$/;

    alert("Email " + (b.test(txt)? " ": " no ")+ "valido");

    return b.test;
    
}