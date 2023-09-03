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


//INSERT DIRECCION
        // console.log("INSERT DIRECCION")
        // let datos = [
        //     "INSERT INTO direccion (nombre, ciudad) VALUES ('Constitucion', 'Oviedo')",
        //     "INSERT INTO direccion (nombre, ciudad) VALUES ('Fuente', 'Castellón')",
        //     "INSERT INTO direccion (nombre, ciudad) VALUES ('Nueva', 'Madrid')",
        //     "INSERT INTO direccion (nombre, ciudad) VALUES ('Real', 'Sevilla')",
        //     "INSERT INTO direccion (nombre, ciudad) VALUES ('Miguel Hernandez', 'Palma')",
        //     "INSERT INTO direccion (nombre, ciudad) VALUES ('Antonio Machado', 'Zaragoza')",
        //     "INSERT INTO direccion (nombre, ciudad) VALUES ('Ramon y Cajal', 'Burgos')",
        //     "INSERT INTO direccion (nombre, ciudad) VALUES ('Rosalia de Castro', 'Pamplona')",
        //     "INSERT INTO direccion (nombre, ciudad) VALUES ('Clara Campoamor', 'Albacete')",
        //     "INSERT INTO direccion (nombre, ciudad) VALUES ('Mayor', 'Vigo')"
        // ];

        // for (let dato of datos) {
        //     await connection.query(dato);
        //     console.log(`${dato}`);
        // }
        // console.log('Datos añadidos');

//INSERT GRUPOS
//         console.log('INSERT GRUPOS')
//         let grupos = [
//             "INSERT INTO grupo (name) VALUES ('K')",
//             "INSERT INTO grupo (name) VALUES ('L')",
//             "INSERT INTO grupo (name) VALUES ('M')",
//             "INSERT INTO grupo (name) VALUES ('N')",
//             "INSERT INTO grupo (name) VALUES ('O')",
//             "INSERT INTO grupo (name) VALUES ('P')",
//             "INSERT INTO grupo (name) VALUES ('Q')",
//             "INSERT INTO grupo (name) VALUES ('R')",
//             "INSERT INTO grupo (name) VALUES ('S')",
//             "INSERT INTO grupo (name) VALUES ('T')",
//         ];

//         for (let grupo of grupos) {
//             await connection.query(grupo);
//             console.log(`${grupo}`);
//         }
//         console.log('Grupos añadidos');

// //INSERT STUDENTS
//         console.log("INSERT STUDENTS")
//         let students = [
//             "INSERT INTO students (first_name, last_name, grupo_id) VALUES ('Carlos', 'Moreno', 11) ON DUPLICATE KEY UPDATE grupo_id = VALUES(grupo_id)",
//             "INSERT INTO students (first_name, last_name, grupo_id) VALUES ('Paula', 'Rosa', 12)  ON DUPLICATE KEY UPDATE grupo_id = VALUES(grupo_id)",
//             "INSERT INTO students (first_name, last_name, grupo_id) VALUES ('Inma', 'Fernandez', 13)  ON DUPLICATE KEY UPDATE grupo_id = VALUES(grupo_id)",
//             "INSERT INTO students (first_name, last_name, grupo_id) VALUES ('Jose', 'Moreno', 14)  ON DUPLICATE KEY UPDATE grupo_id = VALUES(grupo_id)",
//             "INSERT INTO students (first_name, last_name, grupo_id) VALUES ('Jaume','Sabater', 15)  ON DUPLICATE KEY UPDATE grupo_id = VALUES(grupo_id)",
//             "INSERT INTO students (first_name, last_name, grupo_id) VALUES ('Xavi', 'Alonso', 16)  ON DUPLICATE KEY UPDATE grupo_id = VALUES(grupo_id)",
//             "INSERT INTO students (first_name, last_name, grupo_id) VALUES ('Ruth', 'Alvarez', 17)  ON DUPLICATE KEY UPDATE grupo_id = VALUES(grupo_id)",
//             "INSERT INTO students (first_name, last_name, grupo_id) VALUES ('Saray', 'Garcia', 18)  ON DUPLICATE KEY UPDATE grupo_id = VALUES(grupo_id)",
//             "INSERT INTO students (first_name, last_name, grupo_id) VALUES ('Ana', 'Redondo', 19)  ON DUPLICATE KEY UPDATE grupo_id = VALUES(grupo_id)",
//             "INSERT INTO students (first_name, last_name, grupo_id) VALUES ('Soraya', 'Saez', 20)  ON DUPLICATE KEY UPDATE grupo_id = VALUES(grupo_id)",


//         ];

//         for (let student of students) {
//             await connection.query(student);
//             console.log(`${student}`);
//         }
//         console.log('Students añadidos');

// //INSERT TEACHERS
//         console.log("INSERT TEACHERS")
//         let teachers = [
//             "INSERT INTO teachers (first_name, last_name) VALUES ('Raquel', 'Sanchez')",
//             "INSERT INTO teachers (first_name, last_name) VALUES ('Esther', 'Saiz')",
//             "INSERT INTO teachers (first_name, last_name) VALUES ('Lidia', 'Orti')",
//             "INSERT INTO teachers (first_name, last_name) VALUES ('Daniela','Torres')",
//             "INSERT INTO teachers (first_name, last_name) VALUES ('Monica', 'Tamarit')",
//             "INSERT INTO teachers (first_name, last_name) VALUES ('Amparo', 'Navarro')",
//             "INSERT INTO teachers (first_name, last_name) VALUES ('Adrian', 'Medina')",
//             "INSERT INTO teachers (first_name, last_name) VALUES ('Alberto', 'Castillo')",
//             "INSERT INTO teachers (first_name, last_name) VALUES ('Aron', 'Monera')",
//             "INSERT INTO teachers (first_name, last_name) VALUES ('Ivan', 'Moreno')",
//         ];  


//         for (let teacher of teachers) {
//             await connection.query(teacher);
//             console.log(`${teacher}`);
//         }
//         console.log('Teachers añadidos');

// //INSERT SUBJECTS
//         console.log("INSERT SUBJECTS")
//         let subjects = [
//             "INSERT INTO subjects (title) VALUES ('Filosofia')",
//             "INSERT INTO subjects (title) VALUES ('Aritmetica')",
//             "INSERT INTO subjects (title) VALUES ('Laboratorio')",
//             "INSERT INTO subjects (title) VALUES ('Comunicacion')",
//             "INSERT INTO subjects (title) VALUES ('Psicologia')",
//             "INSERT INTO subjects (title) VALUES ('Economia')",
//             "INSERT INTO subjects (title) VALUES ('Latin')",
//             "INSERT INTO subjects (title) VALUES ('Griego')",
//             "INSERT INTO subjects (title) VALUES ('Dibujo')",
//             "INSERT INTO subjects (title) VALUES ('Dibujo tecnico')",
//         ];  


//         for (let subject of subjects) {
//             await connection.query(subject);
//             console.log(`${subject}`);
//         }
//         console.log('Subjects añadidas');

// //INSERT SUBJECT_TEACHER
//         console.log("INSERT SUBJECT_TEACHER")
//         let subjects_teachers = [
//             "INSERT INTO subject_teacher (subject_id, teacher_id, grupo_id) VALUES (11, 11, 11)  ON DUPLICATE KEY UPDATE subject_id= VALUES(subject_id), teacher_id=VALUES(teacher_id), grupo_id = VALUES(grupo_id),subject_teacher_id=VALUES(subject_teacher_id)",
//             "INSERT INTO subject_teacher (subject_id, teacher_id, grupo_id) VALUES (12, 12, 12)  ON DUPLICATE KEY UPDATE subject_id= VALUES(subject_id), teacher_id=VALUES(teacher_id), grupo_id = VALUES(grupo_id),subject_teacher_id=VALUES(subject_teacher_id)",
//             "INSERT INTO subject_teacher (subject_id, teacher_id, grupo_id) VALUES (13, 13, 13)  ON DUPLICATE KEY UPDATE subject_id= VALUES(subject_id), teacher_id=VALUES(teacher_id), grupo_id = VALUES(grupo_id),subject_teacher_id=VALUES(subject_teacher_id)",
//             "INSERT INTO subject_teacher (subject_id, teacher_id, grupo_id) VALUES (14, 14, 14)  ON DUPLICATE KEY UPDATE subject_id= VALUES(subject_id), teacher_id=VALUES(teacher_id), grupo_id = VALUES(grupo_id),subject_teacher_id=VALUES(subject_teacher_id)",
//             "INSERT INTO subject_teacher (subject_id, teacher_id, grupo_id) VALUES (15, 15, 15)  ON DUPLICATE KEY UPDATE subject_id= VALUES(subject_id), teacher_id=VALUES(teacher_id), grupo_id = VALUES(grupo_id),subject_teacher_id=VALUES(subject_teacher_id)",
//             "INSERT INTO subject_teacher (subject_id, teacher_id, grupo_id) VALUES (16, 16, 16)  ON DUPLICATE KEY UPDATE subject_id= VALUES(subject_id), teacher_id=VALUES(teacher_id), grupo_id = VALUES(grupo_id),subject_teacher_id=VALUES(subject_teacher_id)",
//             "INSERT INTO subject_teacher (subject_id, teacher_id, grupo_id) VALUES (17, 17, 17)  ON DUPLICATE KEY UPDATE subject_id= VALUES(subject_id), teacher_id=VALUES(teacher_id), grupo_id = VALUES(grupo_id),subject_teacher_id=VALUES(subject_teacher_id)",
//             "INSERT INTO subject_teacher (subject_id, teacher_id, grupo_id) VALUES (18, 18, 18)  ON DUPLICATE KEY UPDATE subject_id= VALUES(subject_id), teacher_id=VALUES(teacher_id), grupo_id = VALUES(grupo_id),subject_teacher_id=VALUES(subject_teacher_id)",
//             "INSERT INTO subject_teacher (subject_id, teacher_id, grupo_id) VALUES (19, 19, 19)  ON DUPLICATE KEY UPDATE subject_id= VALUES(subject_id), teacher_id=VALUES(teacher_id), grupo_id = VALUES(grupo_id),subject_teacher_id=VALUES(subject_teacher_id)",
//             "INSERT INTO subject_teacher (subject_id, teacher_id, grupo_id) VALUES (20, 20, 20)  ON DUPLICATE KEY UPDATE subject_id= VALUES(subject_id), teacher_id=VALUES(teacher_id), grupo_id = VALUES(grupo_id),subject_teacher_id=VALUES(subject_teacher_id)",


//         ];

//         for (let subject_teacher of subjects_teachers) {
//             await connection.query(subject_teacher);
//             console.log(`${subject_teacher}`);
//         }
//         console.log('Students añadidos');


//INSERT MARKS
        // console.log("INSERT MARKS")
        // let marks = [
            // "INSERT INTO marks (student_id, subject_id, date, mark) VALUES (4, 1, '2023-01-20', 8) ON DUPLICATE KEY UPDATE student_id = VALUES(student_id)",
            // "INSERT INTO marks (student_id, subject_id, date, mark) VALUES (5, 2, '2023-02-20', 6) ON DUPLICATE KEY UPDATE student_id = VALUES(student_id)",
            // "INSERT INTO marks (student_id, subject_id, date, mark) VALUES (6, 3, '1970-06-12', 7)  ON DUPLICATE KEY UPDATE student_id = VALUES(student_id)",
            // "INSERT INTO marks (student_id, subject_id, date, mark) VALUES (7, 4, '2018-10-14', 10)  ON DUPLICATE KEY UPDATE student_id = VALUES(student_id)",
            // "INSERT INTO marks (student_id, subject_id, date, mark) VALUES (8, 5, '2019-07-09', 1)  ON DUPLICATE KEY UPDATE student_id = VALUES(student_id)",
            // "INSERT INTO marks (student_id, subject_id, date, mark) VALUES (9, 6, '2019-10-09', 3)  ON DUPLICATE KEY UPDATE student_id = VALUES(student_id)",
            // "INSERT INTO marks (student_id, subject_id, date, mark) VALUES (10, 7, '2023-09-02', 2)  ON DUPLICATE KEY UPDATE student_id = VALUES(student_id)",
            // "INSERT INTO marks (student_id, subject_id, date, mark) VALUES (11, 8, '2019-10-09', 3)  ON DUPLICATE KEY UPDATE student_id = VALUES(student_id)",
            // "INSERT INTO marks (student_id, subject_id, date, mark) VALUES (12, 9, '2003-07-11', 5)  ON DUPLICATE KEY UPDATE student_id = VALUES(student_id)",
            // "INSERT INTO marks (student_id, subject_id, date, mark) VALUES (13, 10, '1996-08-09', 10)  ON DUPLICATE KEY UPDATE student_id = VALUES(student_id)",
            // "INSERT INTO marks (student_id, subject_id, date, mark) VALUES (14, 11, '2015-05-30', 6)  ON DUPLICATE KEY UPDATE student_id = VALUES(student_id)",
            // "INSERT INTO marks (student_id, subject_id, date, mark) VALUES (15, 12, '2008-12-31', 4)  ON DUPLICATE KEY UPDATE student_id = VALUES(student_id)",
            // "INSERT INTO marks (student_id, subject_id, date, mark) VALUES (16, 13, '1968-03-10', 9)  ON DUPLICATE KEY UPDATE student_id = VALUES(student_id)",
            // "INSERT INTO marks (student_id, subject_id, date, mark) VALUES (17, 14, '2001-06-16', 6)  ON DUPLICATE KEY UPDATE student_id = VALUES(student_id)",
            // "INSERT INTO marks (student_id, subject_id, date, mark) VALUES (18, 15, '2017-08-04', 7)  ON DUPLICATE KEY UPDATE student_id = VALUES(student_id)",
            // "INSERT INTO marks (student_id, subject_id, date, mark) VALUES (19, 16, '1999-09-11', 5)  ON DUPLICATE KEY UPDATE student_id = VALUES(student_id)",
            // "INSERT INTO marks (student_id, subject_id, date, mark) VALUES (20, 17, '2010-05-25', 9)  ON DUPLICATE KEY UPDATE student_id = VALUES(student_id)",
            // "INSERT INTO marks (student_id, subject_id, date, mark) VALUES (21, 18, '2013-11-14', 4)  ON DUPLICATE KEY UPDATE student_id = VALUES(student_id)",
            // "INSERT INTO marks (student_id, subject_id, date, mark) VALUES (22, 19, '2005-02-07', 10)  ON DUPLICATE KEY UPDATE student_id = VALUES(student_id)",
        //     "INSERT INTO marks (student_id, subject_id, date, mark) VALUES (23, 20, '2022-02-19', 8)  ON DUPLICATE KEY UPDATE student_id = VALUES(student_id)",
        // ];

        // for (let mark of marks) {
        //     await connection.query(mark);
        //     console.log(`${mark}`);
        // }
        // console.log('Marks añadidas');


        //AÑADIR COLUMNA DIRECCION
        // console.log(`aÑADIR COLUMNA`);
        // let columna = "ALTER TABLE direccion ADD COLUMN pais VARCHAR(30) NULL";
        // let [result] =  await connection.query(columna);
        // console.log('Columna añadida');
        // console.log(result);
        // await connection.end();

        //BORRAR COLUMNA DIRECCION
        // console.log(`BORRAR COLUMNA`);
        // let borrarcolumna = "ALTER TABLE direccion DROP COLUMN nuevacolumna";
        // let [result] = await connection.query(borrarcolumna);
        // console.log('Columna borrada');
        // console.log(result);
        // await connection.end();

        //BORRAR TABLA DIRECCION
        // console.log(`BORRAR TABLA`);
        // let borrartabla = "DROP TABLE direccion";
        // let [result] = await connection.query(borrartabla);
        // console.log('Tabla borrada');
        // console.log(result);
        // await connection.end();

        //NOTAS ALUMNOS A 0
        // console.log(`NOTAS A 0`);
        // let notas0 = `UPDATE marks SET mark = 0`;
        // let [result] = await connection.query(notas0);
        // console.log('Notas a 0');
        // console.log(result);
        // await connection.end();

        //NOMBRE Y APELLIDO ESTUDIANTES
        // console.log(`NOMBRE Y APELLIDOS ESTUDIANTES`);
        // let students = `SELECT first_name, last_name FROM students;`;
        // let [result] = await connection.query(students);
        // console.log(result);

        //DATOS PROFESORES
        // console.log(`DATOS PROFESORES`);
        // let teachers = `SELECT * FROM teachers;`;
        // let [result] = await connection.query(teachers);
        // console.log(result);
        // await connection.end();

    }catch(err){
        console.log(err);
        await connection.end();
    }
};

main();
