const {pool} = require("../database");





// GET /media?id=5, o /media:5. Obtiene la nota media del id del alumno pasado por parámetro,
// elegir cualquiera de los dos formatos.

// async function getMediaAlumnoId(req, res) {
//     try{
//         let {student_id} = req.query;
//         let params = [student_id];
//         let media = `SELECT marks.student_id, AVG(marks.mark) AS notamedia
//                     FROM marks
//                     WHERE marks.student_id = ?
//                     GROUP BY marks.student_id, marks.mark`;
//         let [result] = await pool.query(media, params);

//         if (result.length > 0) {
//             res.send(result);
//         } else {
//             res.send("No existe el alumno :(");
//         }
//         } catch (error) {
//         res.send(error);
//         }

// }




// GET /apuntadas?id=5 o /apuntadas:5. La lista de las asignaturas a la que están apuntadas el
// alumno del id pasado por parámetro, elegir cualquiera de los dos formatos.

// async function getAsignaturasAlumnoId(req, res) {
//     try {
//         let {student_id}= req.query;
//         let params = [student_id];
//         let query = `
//             SELECT subjects.subject_id, subjects.title
//             FROM students
//             INNER JOIN marks ON students.student_id = marks.student_id
//             INNER JOIN subjects ON marks.subject_id = subjects.subject_id
//             WHERE students.student_id = ?`;

//         let [result] = await pool.query(query, params);

//         if (result.length > 0){
//             res.send(result);
//         }else {
//             res.send("El alumno no está apuntado a ninguna asignatura");
//         }
//     } catch (error) {
//         console.error(error);
//         res.send("Error");
//     }
// }


//GET /apuntadas. Devuelve los nombres y apellidos de todos los alumnos y los nombres de las
//asignaturas a la que están apuntadas.
// async function getAsignaturasApuntadas(req, res){

//     try{
//         let query = `SELECT students.first_name, students.last_name, subjects.title AS subject
//         FROM students
//         INNER JOIN subjects ON students.student_id = subjects.subject_id`

//         let [result] = await pool.query(query);
    
//         res.send(result);
//       } catch (error) {
//         console.error(error);
//         res.send(error);
//       }
//     }


// GET /impartidas?id=5 o /impartidas:5. La lista de las asignaturas que imparte el profesor cuyo
// id es pasado por parámetro, elegir cualquiera de los dos formatos.

// async function getAsignaturasporProfesorId(req, res) {
//     try {
//         let {teacher_id} =req.query;
//         let params = [teacher_id];
//         let query = `
//             SELECT subjects.subject_id, subjects.title
//             FROM teachers, subject_teacher, subjects
//             WHERE teachers.teacher_id = subject_teacher.teacher_id
//             AND subject_teacher.subject_id = subjects.subject_id
//             AND teachers.teacher_id = ?`;

//         let [result] = await pool.query(query, params);

//         if (result.length > 0){
//             res.send(result);
//         } else{
//             res.send("El profesor no imparte ninguna asignatura");
//         }

//     } catch (error) {
//         console.error(error);
//         res.send("Error");
//     }
// }



//GET /impartidas. Devuelve los nombres y apellidos de todos los profesores y los nombres de las
//asignaturas a la que imparten.
// async function getAsignaturasImpartidas(req, res) {

//     try {
//         let query = `SELECT teachers.first_name, teachers.last_name, subjects.title AS subject
//         FROM teachers
//         INNER JOIN subjects ON teachers.teacher_id = subjects.subject_id`
        
    
//         let [result] = await pool.query(query);
    
//         res.send(result);
//       } catch (error) {
//         console.error(error);
//         res.send(error);
//       }
//     }

module.exports = { //, getAsignaturasAlumnoId, , 
    //getAsignaturasporProfesorId
    //getMediaAlumnoId
    //getAsignaturasAlumnoId
    // getAsignaturasImpartidas
    // getAsignaturasApuntadas
};