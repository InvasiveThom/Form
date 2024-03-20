function enviarRespuestas(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const ocupacion = document.getElementById('ocupacion').value;
    const edad = document.getElementById('edad').value;
    const respuesta = event.submitter.value;

    // Aquí deberías hacer una petición AJAX para enviar los datos al servidor Node.js para enviar por correo electrónico.
    // Puedes usar fetch() u otra biblioteca como Axios para realizar la petición.
    // En este ejemplo, solo mostramos los datos en la consola.
    console.log('Nombre:', nombre);
    console.log('Ocupación:', ocupacion);
    console.log('Edad:', edad);
    console.log('Respuesta:', respuesta);
}