const ENTRADAGRAL =200;

function reset(){
    nombre.value = "";
    apellido.value = "";
    email.value = "";
    cantidad.value ="";
    categoria.value = "elegir categoria";
    document.getElementById('nombre').innerHTML = '';
    document.getElementById('apellido').innerHTML = '';
    document.getElementById('email').innerHTML = '';
    document.getElementById('cantidad').innerHTML = '';
    document.getElementById('categoria').innerHTML = '';
    document.getElementById('totalApagar').innerHTML = 'Total a pagar = $';
}

function resumen(){

    validacion();
    if (validacion() == true){
        calcular ();
    }

}

function validacion(){
    categoria = document.getElementById('select-categoria');
    categoria.value = categoria.value
    if (nombre.value == ''){
        document.getElementById('nombre').innerHTML = 'nombre'
        validacion[0] = false;
    }else{
        document.getElementById('nombre').innerHTML = '';
        validacion[0]  =true;
    }

    if (apellido.value == ''){
        document.getElementById('apellido').innerHTML = 'apellido';
        validacion[1] = false;
    }else{
        document.getElementById('apellido').innerHTML = '';
        validacion[1] = true;
    }

    if (email.value == ''){
        document.getElementById('email').innerHTML = 'email';
        validacion[2] = false;
    }else{
        document.getElementById('email').innerHTML = '';
        validacion[2] = true;
    }

    if (cantidad.value < 1) {
        document.getElementById('cantidad').innerHTML = 'La cantidad debe ser un numero entero mayor que 0 (cero)';
        validacion[3] = false;
    }else {
        document.getElementById('cantidad').innerHTML = '';
        let cantidadInt = (parseInt(cantidad.value));
        cantidad.value = cantidadInt
        validacion[3] = true
    }
    

    if (categoria.value == "categoria") {
        document.getElementById('categoria').innerHTML = 'Elegir categoría';
        validacion[4] = false;
    }else {
        document.getElementById('categoria').innerHTML = '';
        validacion[4] = true;
    }
    
    if (validacion[0] == true & validacion[1] == true & validacion[2] == true & validacion[3] == true & validacion[4] == true){
        return true
    }else{
        document.getElementById('resumen').innerHTML = 'Total a pagar = $';
    }
}

function calcular (){
    switch (categoria.value){
        case 'estudiante':
            document.getElementById('total-pagar').innerHTML = 'Total a pagar = $' + ENTRADAGRAL*0.2*cantidad.value;
            break
        case 'trainee':
            document.getElementById('total-pagar').innerHTML = 'Total a pagar = $' + ENTRADAGRAL*0.5*cantidad.value;
            break
        case 'junior':
            document.getElementById('total-pagar').innerHTML = 'Total a pagar = $' +ENTRADAGRAL*0.85*cantidad.value;
       
    }
}