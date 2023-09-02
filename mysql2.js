const mysql = require('mysql2/promise');

async function main()
{
    try{
        let connection = await mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            password: 'Quericalapizzajeje2',
            database: 'mysql1'
        });

        console.log('Conexión establecida');


//ELIMINAR NOTAS >10 AÑOS
        // console.log(`ELIMINAR NOTAS >10 AÑOS`);
        // let notas10anyos = `DELETE FROM marks WHERE date <'2013-09-01'`; 
        // let [result] = await connection.query(notas10anyos);
        // console.log('Notas +10 años eliminadas');
        // console.log(result);
        // await connection.end();


//NOTAS -5 =5
        // console.log(`NOTAS -5 =5`);
        // let nota5 = `UPDATE marks SET mark = 5 WHERE mark < 5;`;
        // let [result] = await connection.query(nota5);
        // console.log('Notas a 5');
        // console.log(result)
        // await connection.end();

    }catch(err){
        console.log(err);
        await connection.end();
    }
};

main();