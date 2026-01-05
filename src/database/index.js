import mysql from "mysql2/promise";
import postgres from "postgres";

// export const executarSQL = async (comando) => {
//     try {
//         const conexao = await mysql.createConnection({
//             host: "localhost",
//             user: "root",
//             password: "1234",
//             database: "lavajato_db",
//             port: 3307
//         });
    
//         const [result] = await conexao.query(comando);
//         conexao.end();
    
//         return result;
//     } catch (error) {
//         return error.message;
//     }
// }

export const executarSQL = async (comandoSQL) => {
    try {
        const conexao = postgres('postgresql://neondb_owner:npg_YICDMtFk8d2B@ep-fancy-scene-ah4eukqa-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require');

        const result = await conexao.unsafe(comandoSQL);
        return result;
        
    } catch (error) {
        return error.message;
    }
}