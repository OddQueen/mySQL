const mysql = require("mysql2/promise");

async function main()
{
    try {
        let connection = await mysql.createConnection(
            {
                host : "localhost",
                user: "root", 
                password : "CodeQu33#",
                database : "museo"
            
        }); 
        console.log("Conexion correcta");
        //--------------STEP 1-----------------------
        let sql = `SELECT obras.nombre AS obra_nombre, ubicaciones.nombre AS ubicacion, prestamos.fin AS fecha_expiracion, duenos.nombre AS dueno_nombre, duenos.apellido AS dueno_apellido, duenos.email AS dueno_email
                    FROM obras
                    JOIN ubicaciones ON obras.ubicacion_id = ubicaciones.ubicacion_id
                    JOIN prestamos ON obras.obra_id = prestamos.obra_id
                    JOIN duenos ON obras.dueno_id = duenos.dueno_id
                    WHERE obras.posesion = 'prestamo';`;

        let [result] = await connection.query(sql);
        console.log("Obras en préstamo:");
        console.log(result);

        //--------------STEP 2-----------------------
        let sql1 = `SELECT estado,
                            COUNT(*) AS total FROM obras
                            GROUP BY estado
                            ORDER BY total DESC;`;

        let [result1] = await connection.query(sql1);
        console.log("Obras por situación:");
        console.log(result1);

    } catch (err) {
        console.log(err);
        await connection.end();        
    }
}
main();