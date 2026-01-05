import express from "express"
import cargoRoutes from "./src/routes/cargoRoutes.js"
import funcionarioRoutes from "./src/routes/funcionarioRoutes.js"
import clienteRoutes from "./src/routes/clienteRoutes.js"

const app = express();

app.get('/', (req, res) => {
    res.send("Seja bem-vindo");
});

//middleware
app.use(express.json());
app.use('/cargos', cargoRoutes);
app.use('/funcionarios', funcionarioRoutes);
app.use('/clientes', clienteRoutes);





app.use((req, res) => {
    res.status(404).json({
        mensagem: "Rota não encontrada"
    })
});

app.listen(3000, () => {
    console.log("Serviço on: http://localhost:3000");
});