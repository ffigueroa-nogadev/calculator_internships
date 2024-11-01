let pantalla = '';

function valorBoton(valorDelNumero) {

    
    pantalla += valorDelNumero.toString(); 
    document.getElementsByClassName("pantalla")[0].innerHTML = pantalla;
    //.toString(), a lo que entiendo, devuelve el valor del objeto
    //entonces, a la pantalla que no tiene valor inicial, se le suma
    //el valor del numero y con el .toString, lo devuelve en la pantalla
    
}

function resultadoBoton() {
    try {
        let resultado = eval(pantalla);
        pantalla = resultado.toString();
        document.getElementsByClassName("pantalla")[0].innerHTML = pantalla;
    } catch (error)
    {
        document.getElementsByClassName("pantalla")[0].innerHTML = "Error";
        pantalla = '';
    }
}
//el try ejectuta ciertos bloques de instrucciones y si algo sale mal o no
//hay algo previsto el catch se ejecuta y da mensaje de error, y vuelve 
//la pantalla a no tener valor

//el eval, como se insinua, evalua el valor de pantalla y lo ejecuta







