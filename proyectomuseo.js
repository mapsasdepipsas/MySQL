const mysql = require('mysql2/promise');



async function main()
{
    try{
        let connection = await mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            password: 'Quericalapizzajeje2',
            database: 'proyecto_museo'
        });

        console.log('Conexión establecida');

// - Obtener un listado de todos los objetos que el museo tiene en préstamo, su localización dentro
// de la exposición, la fecha de expiración de este, la información básica (nombre, apellidos y
// email) de la persona que los ha prestado.
        

        // try {
        //   let tipoPrestamo = 'en prestamo';
        
        //   let consulta = `
        //     SELECT piezas.pieza_id, piezas.nombre_pieza, localizacion.nombre_localizacion, prestamos.fecha_devolucion,
        //       propietariopiezas.nombre AS propietario_nombre,
        //       propietariopiezas.apellidos AS propietario_apellidos,
        //       propietariopiezas.email
        //     FROM piezas
        //     INNER JOIN localizacion ON piezas.localizacion_id = localizacion.localizacion_id
        //     INNER JOIN prestamos ON piezas.prestamos_id = prestamos.prestamos_id
        //     INNER JOIN propietariopiezas ON prestamos.propietario_id = propietariopiezas.propietario_id
        //     WHERE
        //       prestamos.tipo_prestamo = ?;
        //   `;
        //   let [filas, campos] = await connection.execute(consulta, [tipoPrestamo]);
        
        //   console.log('Resultado:');
        //   console.table(filas);
        // } catch (error) {
        //   await connection.end();
        // }
        




// - Obtener de forma ordenada de mayor a menor, el número total de objetos o piezas agrupados
// por su situación dentro de la organización, esto es, cuántos hay expuestos, cuántos en
// itinerancia y cuántos almacenados.



// try {
//     let tipoexposicion = `SELECT colecciones.tipo_exposicion, COUNT(*) AS numero_piezas
//       FROM piezas
//       INNER JOIN colecciones ON piezas.colecciones_id = colecciones.colecciones_id
//       GROUP BY colecciones.tipo_exposicion
//       ORDER BY numero_piezas DESC;`;

//     let [filas, campos] = await connection.execute(tipoexposicion);

//     console.log('Piezas por tipo exposicion:');
//     console.table(filas);
//   } catch (error) {
//     console.error(error.message);
//     await connection.end();
//   }



}catch(err){
    console.log(err);
    await connection.end();
}
};

main();