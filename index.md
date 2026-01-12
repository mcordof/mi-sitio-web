---
layout: default
title: Inicio
---
<link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">

<div class="card" style="text-align: center; margin-bottom: 20px;">
    <h1>Panel de Control</h1>
    <a href="./formulario" class="btn btn-primary">➕ Crear Nuevo Registro</a>
    <button onclick="borrarTodo()" class="btn" style="background:#ff4444; color:white; margin-left:10px;">🗑️ Borrar Todo</button>
</div>

<h3>Historial de Registros</h3>
<div id="lista-registros">
    </div>

<script src="{{ '/assets/js/main.js' | relative_url }}"></script>
<script>
    // Lógica para mostrar la lista en la home
    const listaDiv = document.getElementById('lista-registros');
    
    if (registros.length === 0) {
        listaDiv.innerHTML = "<p>No hay registros guardados aún.</p>";
    } else {
        registros.forEach(reg => {
            listaDiv.innerHTML += `
                <div class="card" style="margin-bottom: 10px; border-left: 5px solid #007bff;">
                    <strong>${reg.nombre}</strong> - ${reg.ambiente} (${reg.equipo})<br>
                    <small style="color: #666;">${reg.fecha}</small>
                </div>
            `;
        });
    }

    function borrarTodo() {
        if(confirm("¿Estás seguro de borrar todos los datos?")) {
            localStorage.clear();
            location.reload();
        }
    }
</script>