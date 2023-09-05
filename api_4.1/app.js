const express = require("express");
const cors = require("cors");
const alumnosRouters = require("./routers/alumnos.router");
const errorHandling = require("./error/errorHandling");

const app = express();

app.set("port", process.env.PORT || 3000); //definicion puerto

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(alumnosRouters);
app.use((req,res,next)=>{
    res.status(404).json({
        error: true,
        codigo: 404,
        mensaje: "Endpoint no encontrado"
    });
});
app.use(errorHandling);

module.exports = app;