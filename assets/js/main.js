// Al cargar la página, intentamos recuperar los datos guardados
let registros = JSON.parse(localStorage.getItem('misRegistros')) || [];

function crearRegistro() {
    const nombre = document.getElementById('nombreTexto').value;
    const ambiente = document.getElementById('ambiente').value;
    const equipo = document.getElementById('equipo').value;

    if (nombre.trim() === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    // Crear un objeto con el nuevo registro
    const nuevoRegistro = {
        id: Date.now(),
        nombre: nombre,
        ambiente: ambiente,
        equipo: equipo,
        fecha: new Date().toLocaleString()
    };

    // Guardar en el arreglo y en LocalStorage
    registros.push(nuevoRegistro);
    localStorage.setItem('misRegistros', JSON.stringify(registros));

    mostrarResultadoIndividual(nuevoRegistro);
}

function mostrarResultadoIndividual(reg) {
    document.getElementById('form-container').style.display = 'none';
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.style.display = 'block';

    document.getElementById('resumen-datos').innerHTML = `
        <p><strong>📝 Registro:</strong> ${reg.nombre}</p>
        <p><strong>🌍 Ambiente:</strong> ${reg.ambiente}</p>
        <p><strong>🛠️ Equipo:</strong> ${reg.equipo}</p>
        <hr>
        <p><em>Total de registros en memoria: ${registros.length}</em></p>
    `;
}