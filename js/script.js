let tabla=[
    {Usuario:"1001", Nombre:"JHONATAN", Apellido:"FACETE", Genero:"Masculino", Edad:"26", Direccion:"Calle 130 #2", Celular:"3002828654", Pais:"Colombia", Ciudad:"Barranquilla", Correo:"jfacete@cuc.edu.co"},
    {Usuario:"1002", Nombre:"ISABEL", Apellido:"MARTINEZ", Genero:"Femenino", Edad:"28", Direccion:"Calle 90 #45", Celular:"3105417545", Pais:"Colombia", Ciudad:"Soledad", Correo:"imartinez@cuc.edu.co"},
    {Usuario:"1003", Nombre:"LINA", Apellido:"CASTILLA", Genero:"Femenino", Edad:"25", Direccion:"Calle 100 #24", Celular:"3111016222", Pais:"Colombia", Ciudad:"Barranquilla", Correo:"lcastilla@cuc.edu.co"}
]

const Listar=()=>{

    let load=document.getElementById("load")
    load.style.display="block"

    let tbody=document.getElementById("TablaDatos")
    let tablallena="";
    for(let i=0;i<tabla.length;i++){
        tablallena+="<tr>";
        tablallena+="<td class='text-center'>"+(parseFloat(i)+parseFloat(1))+"</td>";
        tablallena+="<td class='text-center'><b>"+tabla[i].Usuario+"</b></td>";
        tablallena+="<td>"+tabla[i].Nombre+" "+tabla[i].Apellido+"</td>";
        tablallena+="<td>"+tabla[i].Genero+"</td>";
        tablallena+="<td>"+tabla[i].Edad+"</td>";
        tablallena+="<td>"+tabla[i].Direccion+"</td>";
        tablallena+="<td>"+tabla[i].Celular+"</td>";
        tablallena+="<td>"+tabla[i].Pais+"</td>";
        tablallena+="<td>"+tabla[i].Ciudad+"</td>";
        tablallena+="<td>"+tabla[i].Correo+"</td>";
        tablallena+="</tr>";
    }
    tbody.innerHTML=tablallena;
    document.getElementById("CantidadRegistros").innerHTML="Número de registros: "+tabla.length;
    document.getElementById("CantidadRegistros").style.display="block"
    setTimeout(()=>{
        load.style.display="none"
    },1000)
    
}

const Guardar=()=>{
    const nombre=document.getElementById("nombre")
    const apellido=document.getElementById("apellido")
    const edad=document.getElementById("edad")
    const direccion=document.getElementById("direccion")
    const celular=document.getElementById("celular")
    const pais=document.getElementById("pais")
    const ciudad=document.getElementById("ciudad")
    const correo=document.getElementById("correo")
    const usuario=document.getElementById("usuario")
    const emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if(!nombre.value.trim()) {
        alert("Por favor, ingrese su nombre")
        nombre.focus()
        return
    }
    if(!apellido.value.trim()) {
        alert("Por favor, ingrese su apellido")
        apellido.focus()
        return
    }
    if(!document.querySelector('input[name="genero"]:checked')) {
        alert("Por favor, seleccione el genero")
        return
    }
    
    if(!edad.value.trim()) {
        alert("Por favor, ingrese su edad")
        edad.focus()
        return
    }
    if(edad.value.length!=2) {
        alert("Por favor, ingrese una edad valida de 2 digitos")
        edad.focus()
        return
    }
    if(!direccion.value.trim()) {
        alert("Por favor, ingrese su dirección")
        direccion.focus()
        return
    }
    if(!celular.value.trim()) {
        alert("Por favor, ingrese su número de celular")
        celular.focus()
        return
    }
    if(celular.value.length!=10) {
        alert("Por favor, ingrese un número de celular valido de 10 dígitos")
        celular.focus()
        return
    }
    if(!pais.value.trim()) {
        alert("Por favor, ingrese su país")
        pais.focus()
        return
    }
    if(!ciudad.value.trim()) {
        alert("Por favor, ingrese su ciudad")
        ciudad.focus()
        return
    }
    if(!correo.value.trim()) {
        alert("Por favor, ingrese su correo electrónico")
        correo.focus()
        return
    }
    if(!emailRegex.test(correo.value)){
		alert('Por favor, escriba un correo electrónico valido.')
        correo.focus()
		return
	}
    if(!usuario.value.trim()) {
        alert("Por favor, ingrese su número de usuario")
        usuario.focus()
        return
    }
    if(usuario.value.length<4) {
        alert("Por favor, ingrese un número de usuario valido, mínimo 4 dígitos")
        usuario.focus()
        return
    }
    if(usuario.value.length>10) {
        alert("Por favor, ingrese un número de usuario valido, máximo 10 dígitos")
        usuario.focus()
        return
    }

    //Validamos que Usuario no sea el mismo
    for(let i=0;i<tabla.length;i++){
        if(usuario.value==tabla[i].Usuario){
            alert("El usuario: "+usuario.value+" ya no se encuentra disponible, Ingrese otro por favor.")
            usuario.focus()
            return
        }
        if(correo.value==tabla[i].Correo){
            alert("El correo electrónico: "+correo.value+" ya se encuentra registrado, Ingrese otro por favor.")
            correo.focus()
            return
        }
    }

    const genero=document.querySelector('input[name="genero"]:checked').value

    const nuevo={Usuario:usuario.value, Nombre:nombre.value, Apellido:apellido.value, Genero:genero, Edad:edad.value, Direccion:direccion.value, Celular:celular.value, Pais:pais.value, Ciudad:ciudad.value, Correo:correo.value}
    tabla.push(nuevo)
    Listar()
    document.getElementById("FormDatos").reset();
}

