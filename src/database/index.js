import mysql from "mysql2/promise";

export const executarSQL = async (comando) => {
    const conexao = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "1234",
        database: "lavajato_db",
        port: 3307
    });

    const [result] = await conexao.query(comando);
    conexao.end();

    return result;
}