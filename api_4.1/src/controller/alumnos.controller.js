const {pool} = require("../database");

async function getAlumnos(req, res) {
    try {
        let mostrarAlumnos = `SELECT * FROM students`;
        let result = await pool.query(mostrarAlumnos);
        res.send(result[0]); //sin el [0] salen datos que no queremos
    } catch (error) {
        res.send(error);
    }
        //Al hacer pool.query se devuelve 1 matriz de objetos (1 objeto x fila de la tabla consultada) con resultados de lo q buscamos.
        //Con el [0] en res.send(result[0]) accedemos al primer elmto de esa matriz, que son los datos q queremos
}



async function getAlumnobyId(req, res) {
    try {
        let { student_id } = req.query;
        let params = [student_id];
        let mostrarAlumnos = `SELECT * FROM students WHERE student_id=?`;
        let [result] = await pool.query(mostrarAlumnos, params);

        if (result.length > 0) {
            res.send(result);
        } else {
            res.send("No existe el alumno :(");
        }
        } catch (error) {
        res.send(error);
        }

}


async function addAlumno(req,res){

    let{student_id,first_name,last_name,grupo_id,ingresoyear} = req.body;
    let params = [student_id,first_name,last_name,grupo_id,ingresoyear];
    let insertar = `INSERT INTO students (student_id,first_name,last_name,grupo_id,ingresoyear) VALUES (?,?,?,?,?);`;

    try {
        let [result] = await pool.query(insertar,params);
        res.send(result);
    } catch (error) {
        res.send(error)
    }
}

async function editAlumno(req,res){
    let{student_id,first_name,last_name,grupo_id,ingresoyear}= req.body;

    let params =[
        first_name? first_name: null,
        last_name? last_name: null,
        grupo_id? grupo_id:null,
        ingresoyear? ingresoyear:null,
        student_id
    ];
    let editar = `UPDATE students SET first_name = COALESCE(?,first_name),
                                    last_name = COALESCE(?,last_name),
                                    grupo_id = COALESCE(?,grupo_id),
                                    ingresoyear = COALESCE(?,ingresoyear)
                                    WHERE student_id = ?;`;

    try {
        let [result] = await pool.query(editar,params);
        res.send(result);
    } catch (error) {
        res.send(error)
    }
}

async function delAlumno(req,res){
    let {student_id} = req.body;
    let params = [student_id];
    let borrar = `DELETE FROM students WHERE student_id = ?;`;

    try {
        let [result] = await pool.query(borrar,params);
        res.send(result);
    } catch (error) {
        res.send(error)
    }
}

module.exports = { getAlumnos, getAlumnobyId, addAlumno, editAlumno, delAlumno };