const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
}
const completado = {
    demand: true,
    alias: 'c',
    desc: 'Marca como completado una tarea'
}

const argv = require('yargs').command('crear', 'Crear una tarea', { descripcion }).command('actualizar', 'Crear una tarea', { descripcion }).command('borrar', 'Crear una tarea', { descripcion }).argv;

module.exports = {
    argv
}