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

        //HCER PRIMER RETO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//calcular la nota media de los alumnos de la asignatura 1.

// let media = "SELECT AVG(mark) FROM marks WHERE subject_id = 3;"

//         let [result] = await connection.query(media);
//         console.log('Nota media asignatura 1:');
//         console.log(result);




        //NUMERO TOTAL ESTUDIANTES
        // let [rows] = await connection.execute('SELECT COUNT(*) AS numero_estudiantes FROM students');
        // let totalestudiantes = rows[0].numero_estudiantes;
        // console.log(`Num. estudiantes: ${totalestudiantes}`);

        // await connection.end()

        //LISTAR CAMPOS DE TABLA GRUPOS
        // let [filas] = await connection.execute('SELECT * FROM grupo');
        // console.log('Campos tabla grupo:');
        // console.table(filas);

        // await connection.end();

        // BORRAR NOTAS 2022 Y >5!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // try {
        //     let year = new Date().getFullYear() - 1;
        //     let nota = 5;
        //     let borrar = 'DELETE FROM marks WHERE YEAR(date) = ? AND mark > ?';
        //     let [result] = await connection.execute(borrar, [year, nota]);
        //     console.log(`Se han borrado ${result.affectedRows} notas.`);
        // } catch (error) {
        // }

        // ESTUDIANTES AÑO INGRESO 2023
        // try {
        //     let ingresoYear = 2023; // Puedes cambiar esto al valor deseado
             
        //     let ingreso2023 = `SELECT * FROM students WHERE ingresoyear = ?;`;
        
        //     let [filas, campos] = await connection.execute(ingreso2023, [ingresoYear]);
          
        //     console.table(filas);
        //   } catch (error) {
        //     await connection.end();
        //   }
          

        //NUMERO PROFESORES POR ASIGNATURA
        // try {
        //     let numprofes = `SELECT subjects.title, COUNT(teachers.teacher_id) AS total_profesores
        //       FROM subjects
        //       LEFT JOIN subject_teacher ON subjects.subject_id = subject_teacher.subject_id
        //       LEFT JOIN teachers ON subject_teacher.teacher_id = teachers.teacher_id
        //       GROUP BY subjects.title;`;
          
           
        //     let [filas, campos] = await connection.execute(numprofes);
          
        //     console.table(filas);
        //   } catch (error) {
        //     await connection.end();
        //   }



        
          //RETO 2 

        //ID 1-20 Y NOTA O >8 Y FECHA AÑO PASADO
        // try {
        //     let minMark = 8;
        //     let minStudentID = 1;
        //     let maxStudentID = 20;
        //     let currentYear = new Date().getFullYear() - 1;
          
        //     let nota = `SELECT mark_id, mark FROM marks WHERE (student_id BETWEEN ? AND ?) OR (mark > ? AND YEAR(date) = ?);`;
          
        //     let [rows, fields] = await connection.execute(nota, [minStudentID, maxStudentID, minMark, currentYear]);
          
        //     console.log('Tabla:');
        //     console.table(rows);
        //   } catch (err) {
        //     await connection.end();
        //   }
          
    
        //MEDIA NOTAS 2023 POR ASIGNATURA
        // try {
        //     let notamedia = `SELECT subjects.title, YEAR(marks.date) AS year, AVG(marks.mark) AS average_mark FROM marks
        //       INNER JOIN subjects ON marks.subject_id = subjects.subject_id WHERE YEAR(marks.date) = YEAR(CURDATE()) GROUP BY subjects.title, year;`;
          
        //     let [filas, campos] = await connection.execute(notamedia);
          
        //     console.log('Tabla:');
        //     console.table(filas);
        //   } catch (err) {
        //     await connection.end();
        //   }
          

    //MEDIA NOTAS POR ALUMNO
    // try {
    //     let notamedia = `SELECT students.student_id, students.first_name, students.last_name, AVG(marks.mark) AS notamedia FROM students
    //       INNER JOIN marks ON students.student_id = marks.student_id WHERE YEAR(marks.date) = YEAR(CURDATE())
    //       GROUP BY students.student_id, students.first_name, students.last_name;`;
      
    //     let [filas, campos] = await connection.execute(notamedia);
      
    //     console.log('Media por estudiante 2023:');
    //     console.table(filas);
    //   } catch (error) {
    //     await connection.end();
    //   }
      
    

        //RETO 3

        //NOMBRE Y APELLIDOS ALUMNOS Y NOMBRE ASIGNATURAS APUNTADOS CADA 1

        // try {
        //     let reto3 = `SELECT students.first_name, students.last_name, subjects.title AS subject_title FROM students
        //       INNER JOIN marks ON students.student_id = marks.student_id
        //       INNER JOIN subjects ON marks.subject_id = subjects.subject_id;`;
          
        //     let [filas, campos] = await connection.execute(reto3);
          
        //     console.log('Alumnos y asignaturas:');
        //     console.table(filas);
        //   } catch (error) {
        //     await connection.end();
        //   }
          
        

        //RETO 4
        //NOMBRES Y APELLIDOS PROFES + SUS ASIGNATURAS

        // try {
        //     let asignatura = `SELECT teachers.first_name, teachers.last_name, subjects.title AS subject_title
        //       FROM teachers
        //       INNER JOIN subject_teacher ON teachers.teacher_id = subject_teacher.teacher_id
        //       INNER JOIN subjects ON subject_teacher.subject_id = subjects.subject_id;`;
          
        //     let [filas, campos] = await connection.execute(asignatura);
          
        //     console.log('Profes y asignaturas:');
        //     console.table(filas);
        //   } catch (error) {
        //     await connection.end();
        //   }
          


        //RETO 5
        //Obtén el número total de alumnos por asignatura, el nombre de la asignatura y el nombre y
        //apellidos del profesor que la imparte.

        // try {
        //     let reto5 = `SELECT subjects.title AS subject_title, teachers.first_name AS teacher_first_name,
        //       teachers.last_name AS teacher_last_name, COUNT(DISTINCT marks.student_id) AS total_alumnos
        //       FROM subjects
        //       INNER JOIN subject_teacher ON subjects.subject_id = subject_teacher.subject_id
        //       INNER JOIN teachers ON subject_teacher.teacher_id = teachers.teacher_id
        //       LEFT JOIN marks ON subjects.subject_id = marks.subject_id
        //       LEFT JOIN grupo ON subject_teacher.grupo_id = grupo.grupo_id
        //       GROUP BY subjects.title, teachers.first_name, teachers.last_name;`;
          
        //     let [filas, campos] = await connection.execute(reto5);
          
        //     console.log('Numero alumnos:');
        //     console.table(filas);
        //   } catch (error) {
        //     await connection.end();
        //   }
          


    }catch(err){
        console.log(err);
        await connection.end();
    }
};

main();