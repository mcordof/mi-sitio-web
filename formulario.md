---
layout: default
title: Nuevo Registro
---

# Crear Registro

<div class="form-group">
    <label>Nombre del Registro</label>
    <input type="text" id="nombreTexto" placeholder="Nombre descriptivo...">
</div>

<div class="form-group">
    <label>Ambiente</label>
    <select id="ambiente">
        <option value="Producción">Producción</option>
        <option value="Desarrollo">Desarrollo</option>
    </select>
</div>

<div class="form-group">
    <label>Equipo</label>
    <select id="equipo">
        <option value="Servidor A">Servidor A</option>
        <option value="Router B">Router B</option>
    </select>
</div>

<button onclick="crearRegistro()" class="btn btn-blue" style="width:100%; justify-content:center;">Guardar y Volver</button>
<br>
<a href="./" style="display:block; text-align:center; color:gray; text-decoration:none; margin-top:15px;">Cancelar</a>