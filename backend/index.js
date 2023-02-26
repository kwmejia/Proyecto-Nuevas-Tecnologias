import express from 'express';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import emailsVeterinarian from './src/routes/emailsVeterinarian.routes.js'
import optionsSwagger from './src/config/optionsSwagger.js';
import conn from "express-myconnection";
import mysql from "mysql2";
import { dbConfig } from './src/config/connection.js';

//settings
const app = express();

//swagger
const swaggerjsDoc = swaggerJsDoc(optionsSwagger);

//middlewares
app.use(express.json())
app.use(cors());
app.use(conn(mysql, dbConfig));
app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerjsDoc));

//Routes
app.use('/api/emailsVeterinarian', emailsVeterinarian);

app.listen(4000, () => {
  console.log('Servidor corriendo en el puerto 4000')
});