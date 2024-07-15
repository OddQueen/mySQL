const pool = require('../database');

const getAlumnos = async (request, response) => {
    try {
        let sql = 'SELECT * FROM students';
        if (request.query.id) {
            sql += ' WHERE student_id = ?';
        }
        const [result] = await pool.query(sql, [request.query.id]);
        response.send(result);
    } catch (err) {
        console.log(err);
        response.status(500).send(err.message);
    }
};

const addAlumno = async (request, response) => {
    try {
        let sql = 'INSERT INTO students (first_name, last_name) VALUES (?, ?)';
        const [result] = await pool.query(sql, [request.body.first_name, request.body.last_name]);
        response.send(String(result.insertId));
    } catch (err) {
        console.log(err);
        response.status(500).send(err.message);
    }
};

const updateAlumno = async (request, response) => {
    try {
        let sql = 'UPDATE students SET first_name = ?, last_name = ? WHERE student_id = ?';
        const [result] = await pool.query(sql, [request.body.first_name, request.body.last_name, request.body.student_id]);
        response.send({ message: 'Alumno actualizado' });
    } catch (err) {
        console.log(err);
        response.status(500).send(err.message);
    }
};

const deleteAlumno = async (request, response) => {
    try {
        let sql = 'DELETE FROM students WHERE student_id = ?';
        const [result] = await pool.query(sql, [request.body.student_id]);
        response.send({ message: 'Alumno eliminado' });
    } catch (err) {
        console.log(err);
        response.status(500).send(err.message);
    }
};

module.exports = { getAlumnos, addAlumno, updateAlumno, deleteAlumno };
