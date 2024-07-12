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
 //---------STEP 3-----------
        //  let sql = "ALTER TABLE direccion DROP COLUMN ciudad";
        //  let [result] = await connection.query(sql);
        //  console.log("Columna eliminada");
        //  console.log(result);

        //  let sql = "ALTER TABLE direccion ADD COLUMN codigo_postal VARCHAR(25)";
        //  let [result] = await connection.query(sql);
        //  console.log("Columna añadida");
        //  console.log(result);

//-----------STEP 4-------------
        // let sql = "DROP TABLE direccion";
        // let [result] = await connection.query(sql);
        // console.log("Tabla eliminada");
        // console.log(result);

//------------STEP 5-----------------
        // let sql = "UPDATE marks SET mark = 0";
        // let [result] = await connection.query(sql);
        // console.log("Notas modificadas a 0");
        // console.log(result);

//------------STEP 6-----------------
        // let sql = "SELECT first_name, last_name FROM students";
        // let [result] = await connection.query(sql);
        // console.log("Obtener nombre y apellido de estudiantes");
        // console.log(result);

//------------STEP 7-----------------
        // let sql = "SELECT * FROM teachers";
        // let [result] = await connection.query(sql);
        // console.log("Obtener datos de profesores");
        // console.log(result);

                            // RETO 2 
//------------STEP 1----------------
        // const sql = `DELETE FROM marks WHERE date < NOW() - INTERVAL 10 YEAR`;
        // let [result] = await connection.query(sql);
        // console.log("Eliminadas notas de hace mas de 10 años");
        // console.log(result);

//------------STEP 2----------------
        let sql = "UPDATE marks SET mark = 5 WHERE mark < 5";
        let [result] = await connection.query(sql);
        console.log("Aprobado general");
        console.log(result);

    } catch (err) {
        console.log(err);
        await connection.end();        
    }
}
main();