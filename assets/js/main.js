// Cargar datos al inicio
let registros = JSON.parse(localStorage.getItem('db_registros')) || [];

function crearRegistro() {
    const nombre = document.getElementById('nombreTexto').value;
    const ambiente = document.getElementById('ambiente').value;
    const equipo = document.getElementById('equipo').value;

    if (!nombre) return alert("Ingresa un nombre");

    const nuevo = { id: Date.now(), nombre, ambiente, equipo, fecha: new Date().toLocaleString() };
    registros.push(nuevo);
    localStorage.setItem('db_registros', JSON.stringify(registros));

    alert("¡Registro Exitoso!");
    window.location.href = "./"; // Regresa al home
}

function exportarJSON() {
    if (registros.length === 0) return alert("No hay datos");
    const blob = new Blob([JSON.stringify(registros, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'registros.json';
    a.click();
}

function borrarTodo() {
    if (confirm("¿Borrar todos los datos?")) {
        localStorage.clear();
        location.reload();
    }
}