import express from "express";
import { executarSQL } from "../database/index.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const comando = await executarSQL("select * from cargos;");
    res.json(comando);
});

router.post("/", async (req, res) => {
    const comando = await executarSQL(`insert into cargos (nome) values ("${req.body.nome}");`);
    if(comando.affectedRows > 0){
        res.json({mensagem: "Registro criado com sucesso!"});
    }
});

router.put("/:id", (req, res) => {
    res.send("editar cargo");
});

router.delete("/:id", (req, res) => {
    res.send("deletar cargo");
});

export default router;