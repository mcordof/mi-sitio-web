---
layout: default
title: Nuevo Registro
---
<link rel="stylesheet" href="{{ '/assets/css/style.css' | relative_url }}">

<div class="card" id="form-container">
    <h2>Configuración de Equipo</h2>
    <div class="form-group">
        <label>Nombre del Registro:</label>
        <input type="text" id="nombreTexto" placeholder="Ej: Servidor Central">
    </div>

    <div class="form-group">
        <label>Ambiente:</label>
        <select id="ambiente">
            <option value="Producción">Producción</option>
            <option value="Desarrollo">Desarrollo</option>
            <option value="Testing">Testing</option>
        </select>
    </div>

    <div class="form-group">
        <label>Equipo:</label>
        <select id="equipo">
            <option value="Cisco Router">Cisco Router</option>
            <option value="Dell Server">Dell Server</option>
            <option value="HP Switch">HP Switch</option>
        </select>
    </div>

    <button onclick="crearRegistro()" class="btn btn-success">Crear Registro</button>
</div>

<div id="resultado" class="card">
    <h3>✅ ¡Éxito!</h3>
    <div id="resumen-datos"></div>
    <br>
    <button onclick="window.location.reload()" class="btn" style="background:#ddd">Volver</button>
</div>

<script src="{{ '/assets/js/main.js' | relative_url }}"></script>