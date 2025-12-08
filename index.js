import express from "express"
import cargoRoutes from "./src/routes/cargoRoutes.js"

const app = express();

app.get('/', (req, res) => {
    res.send("Seja bem-vindo");
});

//middleware
app.use(express.json());
app.use('/cargos', cargoRoutes);





app.use((req, res) => {
    res.status(404).json({
        mensagem: "pagina não encontrada"
    })
});

app.listen(3000, () => {
    console.log("Serviço on: http://localhost:3000");
});