const descripcion = {
    demand: true,
    alias: 'd'
};

const completado = {
    alias: 'c',
    default: true
};

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer',{
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea',{
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea',{
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}