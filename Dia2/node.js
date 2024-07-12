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
             //RETO 1
//--------------STEP 1-----------------------
    // let sql = "SELECT AVG(mark) AS average_mark FROM marks WHERE subject_id = 1";
    // let [result] = await connection.query(sql);
    // console.log("Nota media de la asignatura 1:");
    // console.log(result);

//--------------STEP 2-----------------------
    // let sql = "SELECT COUNT(*) AS total_students FROM students";
    // let [result] = await connection.query(sql);
    // console.log("Número total de alumnos:");
    // console.log(result);

//--------------STEP 3-----------------------
    // let sql = "SELECT * FROM groups";
    // let [result] = await connection.query(sql);
    // console.log("Todos los campos de la tabla groups:");
    // console.log(result);

//--------------STEP 4-----------------------
    // let sql = "DELETE FROM marks WHERE mark > 5 AND YEAR(date) = YEAR(CURDATE()) - 1";
    // let [result] = await connection.query(sql);
    // console.log("Notas eliminadas:");
    // console.log(result);

//--------------STEP 5-----------------------
    // let sql = "SELECT * FROM students WHERE enrollment_year = YEAR(CURDATE())";
    // let [result] = await connection.query(sql);
    // console.log("Estudiantes en el bootcamp este año:");
    // console.log(result);

//--------------STEP 6-----------------------
    // let sql = "SELECT subject_id, COUNT(DISTINCT teacher_id) FROM school.subject_teacher GROUP BY subject_id;";
    // let [result] = await connection.query(sql);
    // console.log("Número de profesores por asignatura:");
    // console.log(result);


             // RETO 2
//--------------STEP 1-----------------------
    // let sql = "SSELECT student_id, mark FROM marks WHERE (student_id BETWEEN 1 AND 20) OR (mark > 8 AND YEAR(date) = YEAR(CURDATE()) - 1)";
    // let [result] = await connection.query(sql);
    // console.log("ID y nota de alumnos con ID entre 1 y 20 o nota > 8 del año pasado:");
    // console.log(result);

//--------------STEP 2-----------------------
    // let sql = "SELECT subject_id, AVG(mark) FROM marks WHERE YEAR(date) = YEAR(now()) GROUP BY subject_id;";
    // let [result] = await connection.query(sql);
    //  console.log("Media de notas del último año por asignatura:");
    //  console.log(result);

//--------------STEP 3-----------------------
    let sql = "SELECT student_id, AVG(mark) FROM marks WHERE YEAR(date) = YEAR(now()) GROUP BY student_id;";
    let [result] = await connection.query(sql);
    console.log("Media aritmética de notas del último año por alumno:"); 
    console.log(result);

    } catch (err) {
        console.log(err);
        await connection.end();        
    }
}
main();

