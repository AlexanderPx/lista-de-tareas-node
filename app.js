const argv = require('./config/yargs').argv;
const tareas = require('./controlador/tareas-por-hacer');

let comando = argv._[0];


switch (comando) {
    case 'crear':
        let tarea = tareas.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let lista = tareas.getLista();
        for (let tarea of lista) {
            console.log("========== TAREAS ==========");
            console.log(`Descripcion: ${tarea.descripcion}`);
            console.log(`Completado: ${tarea.completado}`);
        }

        break;
    case 'actualizar':
        let resp = tareas.actualizar(argv.descripcion, argv.completado)
        console.log(resp);
        break;
    case 'borrar':
        let borrado = tareas.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("Comando no reconocido");

}