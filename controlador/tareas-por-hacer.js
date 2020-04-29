const fs = require('fs');
let tareasPorHacer = [];

const cargarDB = () => {
    try {
        tareasPorHacer = require('../modelo/data.json');
    } catch {
        tareasPorHacer = [];
    }

}
const guardarDB = () => {
    let data = JSON.stringify(tareasPorHacer);
    fs.writeFile('modelo/data.json', data, (err) => {
        if (err) throw new Error("No se puede guardar la data", err);
    });
}
const crear = (descripcion) => {
    cargarDB();
    let tarea = {
        descripcion,
        completado: false
    }
    tareasPorHacer.push(tarea);
    guardarDB();
    return tarea;
}
const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = tareasPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (tareasPorHacer.length === nuevoListado) {
        return false;
    } else {
        tareasPorHacer = nuevoListado
        guardarDB();
        return true;
    }
}
const getLista = () => {
    cargarDB();
    return tareasPorHacer;
}
const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = tareasPorHacer.findIndex(tarea.descripcion === descripcion);
    if (index >= 0) {
        tareasPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
}
module.exports = {
    crear,
    getLista,
    actualizar,
    borrar
}