const fs = require('node:fs/promises')

fs.writeFile('./archivo2b.txr', 'linea 1 \nLinea 2 \n Creado con promesas.')
    .then(() => console.log('El archivo fue creado con empleando promesas.'))
    .catch((error) => console.log(error))

console.log('Ultima linea del programa')