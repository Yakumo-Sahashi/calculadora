let permiso = document.getElementById("permiso");
let usuario = document.getElementById("usuario");
let grupo = document.getElementById("grupo");
let otros = document.getElementById("otros");
const exRegular = /[0-7]{1}[0-7]{1}[0-7]{1}/;

permiso.addEventListener('input',(e)=>{
   permiso.value = permiso.value.replace(/[^0-7]/g, '');
   let permisos = e.target.value.split("");
   if(permisos.length > 3) permiso.value = permisos.slice(0,3).toString().replace(/[,]/g,"");
   usuario.value = permisos[0];
   grupo.value = permisos[1];
   otros.value = permisos[2];
});

usuario.addEventListener('change',(e) =>{
   permiso.value = `${ e.target.value}${grupo.value}${otros.value}`;
});
grupo.addEventListener('change',(e) =>{
   permiso.value = `${ usuario.value}${e.target.value}${otros.value}`;
});
otros.addEventListener('change',(e) =>{
   permiso.value = `${ usuario.value}${grupo.value}${e.target.value}`;
});


document.getElementById("btn_limpiar").addEventListener("click",()=>{
   document.getElementById("frm_calculadora").reset();
   Swal.fire({
      title: "Correcto!",
      text: "Se ha reiniciado el formulario!",
      icon: "success"
   });
});