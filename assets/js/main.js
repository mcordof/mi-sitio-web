let registros = JSON.parse(localStorage.getItem('misRegistros')) || [];

function crearRegistro() {
    const nombre = document.getElementById('nombreTexto').value;
    const ambiente = document.getElementById('ambiente').value;
    const equipo = document.getElementById('equipo').value;

    if (!nombre.trim()) {
        alert("Por favor, completa el nombre.");
        return;
    }

    const nuevo = {
        id: Date.now(),
        nombre, ambiente, equipo,
        fecha: new Date().toLocaleString()
    };

    registros.push(nuevo);
    localStorage.setItem('misRegistros', JSON.stringify(registros));

    // Mensaje de éxito y redirección
    alert("✅ Registro creado con éxito. Volviendo al inicio...");
    window.location.href = "./"; 
}

function exportarJSON() {
    if (registros.length === 0) {
        alert("No hay datos para exportar.");
        return;
    }
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(registros, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "registros.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}