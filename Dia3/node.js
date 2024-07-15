const mysql = require("mysql2/promise");

async function main()
{
    try {
        let connection = await mysql.createConnection(
            {
                host : "localhost",
                user: "root", 
                password : "CodeQu33#",
                database : "school"
            
        }); 
        console.log("Conexion correcta");
        //--------------RETO 1-----------------------
        // let sql = `SELECT students.first_name, students.last_name, subjects.title AS subject_name FROM students
        // JOIN marks ON students.student_id = marks.student_id
        // JOIN subjects ON marks.subject_id = subjects.subject_id `;

        // let [result] = await connection.query(sql);

        // console.log("Reto 1:");
        // console.log(result);

        //--------------RETO 2-----------------------
        // let sql = `SELECT teachers.first_name, teachers.last_name, subjects.title AS subject_name FROM teachers
        //     JOIN subject_teacher ON teachers.teacher_id = subject_teacher.teacher_id
        //     JOIN subjects ON subject_teacher.subject_id = subjects.subject_id`;

        // let [result] = await connection.query(sql);

        // console.log("Reto 2:");
        // console.log(result);

        //--------------RETO 3-----------------------
        let sql = `SELECT  subjects.title AS subject_name, teachers.first_name AS teacher_first_name, teachers.last_name AS teacher_last_name,
                    COUNT(DISTINCT marks.student_id) AS total_students FROM subjects
                    JOIN subject_teacher ON subjects.subject_id = subject_teacher.subject_id
                    JOIN teachers ON subject_teacher.teacher_id = teachers.teacher_id
                    JOIN marks ON subjects.subject_id = marks.subject_id
                    GROUP BY subjects.title, teachers.first_name, teachers.last_name`;

        let [result] = await connection.query(sql);

        console.log("Reto 3:");
        console.log(result);

    } catch (err) {
        console.log(err);
        await connection.end();        
    }
}
main();
