---
layout: default
title: Inicio
---

# Panel de Gestión
<div style="text-align: center; margin-bottom: 30px;">
    <a href="./formulario" class="btn btn-primary">➕ Nuevo Registro</a>
    <button onclick="exportarJSON()" class="btn btn-export">📥 Exportar JSON</button>
</div>

<div id="lista-registros"></div>

<script>
    const lista = document.getElementById('lista-registros');
    if (registros.length === 0) {
        lista.innerHTML = "<p style='text-align:center'>No hay registros guardados.</p>";
    } else {
        registros.forEach(r => {
            lista.innerHTML += `
                <div class="history-card">
                    <strong>${r.nombre}</strong><br>
                    <small>${r.ambiente} | ${r.equipo}</small><br>
                    <small style="opacity: 0.6">${r.fecha}</small>
                </div>`;
        });
    }
</script>