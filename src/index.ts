const form = document.getElementById("form") as HTMLFormElement;
const btnGuardar = document.getElementById("btn-guardar") as HTMLButtonElement; 

btnGuardar.addEventListener('click', (e) => {
    // e.preventDefault();
    console.log("ingrese a la validacion del formulario");

    const tipoDocumento = document.getElementById("tipoDocumento") as HTMLInputElement;
    const numeroDocumento = document.getElementById("numeroDocumento") as HTMLInputElement;
    const nombre = document.getElementById("nombre") as HTMLInputElement;
    const apellidos = document.getElementById("apellidos") as HTMLInputElement;
    const celular = document.getElementById("celular") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;
    const linkedin = document.getElementById("linkedin") as HTMLInputElement;
    const git = document.getElementById("git") as HTMLInputElement;

    console.log(tipoDocumento.value);
});