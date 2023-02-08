
function validar(formulario){
    if(formulario.nombre.value.length < 3){
        alert("Escriba por lo menos 3 caracteres en el campo nombre");
        formulario.nombre.focus();
    }
    var checkok ="QWERTYUIOPASDFGHJKLÑZXCVBNM" + 
    "qwertyuiopasdfghjklñzxcvbnm";
    var checkString = formulario.nombre.value;
    var todoesvalido = true;
    for(var i = 0; i< checkString.length;i++){
        var ch = checkString.charAT(i);
        for(var j =0; j< checkok.length; j++){
            if(ch == checkok.charAt(j)){
                break;
            }
        }
        if(j == checkok.length){
            todoesvalido = false;
            break;
        }

    }
    if(!todoesvalido){
        alert("Escriba unicamente ltrass en el campo nombre");
        formulario.nombre.focus();
        return false;
    }
    var checkok ="1234567890";
    var checkString = formulario.edad.value;
    var todoesvalido = true;
    for(var i = 0; i< checkString.length;i++){
        var ch = checkString.charAT(i);
        for(var j =0; j< checkok.length; j++){
            if(ch == checkok.charAt(j)){
                break;
            }
        }
        if(j == checkok.length){
            todoesvalido = false;
            break;
        }

    }
    if(!todoesvalido){
        alert("Escriba unicamente ltrass en el campo edad");
        formulario.edad.focus();
        return false;
    }

    var txt = formulario.correo.value;

    var b = /^[^@\s]+[^@\.\]+(\.[^@\.\s]+)+$/;

    alert("Email" + (b.test(txt)? " " : " no")+ "valio");

    return b.test;
    
}



