const ENTRADAGRAL =200;
let nombre= document.getElementById ('nombre');
let apellido= document.getElementById ('apellido');
let email= document.getElementById ('email');
let categoria= document.getElementById ('categoria');
let cantidad= document.getElementById ('cantidad');
let totalApagar= document.getElementById ('totalApagar');
let validacion=[];

function reset(){
    nombre.value = "";
    apellido.value = "";
    email.value = "";
    cantidad.value ="";
    categoria.value = "";
    document.getElementById('nombre').innerHTML = '';
    document.getElementById('apellido').innerHTML = '';
    document.getElementById('email').innerHTML = '';
    document.getElementById('cantidad').innerHTML = '';
    document.getElementById('categoria').innerHTML = '';
    document.getElementById('totalApagar').innerHTML = '';
}


function validacionTotal(){
    categoria = document.getElementById('categoria');
       console.log (nombre.value,"nombre");
    if (nombre.value == ''){
        document.getElementById('completar-nombre').innerHTML = 'campo incompleto'
        console.log (nombre.value,"nombre")
        validacion[0] = false;
        console.log (validacion[0],"validacioncpnjdbcjdbcc")
    }else{
        document.getElementById('completar-nombre').innerHTML = '';
        validacion[0]  =true;
    }
    if (apellido.value == ''){
        document.getElementById('completar-apellido').innerHTML = 'campo incompleto';
        validacion[1] = false;
    }else{
        document.getElementById('completar-apellido').innerHTML = '';
        validacion[1] = true;
    }
    if (email.value == ''){
        document.getElementById('completar-email').innerHTML = 'campo incompleto';
        validacion[2] = false;
    }else{
        document.getElementById('completar-email').innerHTML = '';
        validacion[2] = true;
    }
    if (cantidad.value < 1) {
        document.getElementById('completar-cantidad').innerHTML = 'La cantidad debe ser un numero mayor a 0 (cero)';
        validacion[3] = false;
    }else {
        document.getElementById('completar-cantidad').innerHTML = '';
        let cantidadInt = (parseInt(cantidad.value));
        cantidad.value = cantidadInt
        console.log(cantidad.value,"cantidadValor")
        validacion[3] = true
    }
        if (categoria.value == 'Elegir categoría') {
        document.getElementById('completar-categoria').innerHTML ='Campo de Categoría Incompleto';
        validacion[4] = false;
    }else {
        document.getElementById('completar-categoria').innerHTML ='';
        validacion[4] = true;
    }
    
    if (validacion[0] == true & validacion[1] == true & validacion[2] == true & validacion[3] == true & validacion[4] == true){
        return true
    }else{
        document.getElementById('resumen').innerHTML = 'Hay  campos erroneos';
    }
}

function resumen(){

    validacionTotal();
    if (validacionTotal() == true){
        calcular ();
    }

}

function calcular (){
    switch (categoria.value){
        case 'estudiante':
            document.getElementById('totalApagar').innerHTML =   ENTRADAGRAL*0.2*cantidad.value;
            break
        case 'trainee':
            document.getElementById('totalApagar').innerHTML =  ENTRADAGRAL*0.5*cantidad.value;
            break
        case 'junior':
            document.getElementById('totalApagar').innerHTML = ENTRADAGRAL*0.85*cantidad.value;
       
    }
}