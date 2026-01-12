---
layout: default
title: Panel de Control
---

# Panel de Control

<div class="button-group">
    <a href="./formulario" class="btn btn-blue"><span>+</span> Crear Nuevo Registro</a>
    <button onclick="exportarJSON()" class="btn btn-purple"><span>📥</span> Exportar JSON</button>
    <button onclick="borrarTodo()" class="btn btn-red"><span>🗑️</span> Borrar Todo</button>
</div>

<h3>Historial de Registros</h3>
<div id="lista" class="grid"></div>

<script>
    const container = document.getElementById('lista');
    if (registros.length === 0) {
        container.innerHTML = "<p style='grid-column: 1/3; text-align:center; opacity:0.5;'>No hay registros guardados.</p>";
    } else {
        registros.forEach(r => {
            container.innerHTML += `
                <div class="card-item">
                    <h4>${r.nombre}</h4>
                    <p>🌍 Ambiente: ${r.ambiente}</p>
                    <p>🛠️ Equipo: ${r.equipo}</p>
                    <p style="font-size: 0.7rem; margin-top:10px;">🕒 ${r.fecha}</p>
                </div>`;
        });
    }
</script>