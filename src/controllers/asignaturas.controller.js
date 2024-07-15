const pool = require('../database');

const getNotaMedia = async (request, response) => {
    try {
        let sql = 'SELECT AVG(grade) as media FROM marks WHERE student_id = ?';
        const [result] = await pool.query(sql, [request.query.id]);
        response.send(result[0]);
    } catch (err) {
        console.log(err);
        response.status(500).send(err.message);
    }
};

const getAsignaturasApuntadas = async (request, response) => {
    try {
        let sql = 'SELECT subjects.title FROM subjects JOIN marks ON subjects.subject_id = marks.subject_id WHERE marks.student_id = ?';
        const [result] = await pool.query(sql, [request.query.id]);
        response.send(result);
    } catch (err) {
        console.log(err);
        response.status(500).send(err.message);
    }
};

const getAsignaturasImpartidas = async (request, response) => {
    try {
        let sql = 'SELECT subjects.title FROM subjects JOIN subject_teacher ON subjects.subject_id = subject_teacher.subject_id WHERE subject_teacher.teacher_id = ?';
        const [result] = await pool.query(sql, [request.query.id]);
        response.send(result);
    } catch (err) {
        console.log(err);
        response.status(500).send(err.message);
    }
};

module.exports = { getNotaMedia, getAsignaturasApuntadas, getAsignaturasImpartidas };
