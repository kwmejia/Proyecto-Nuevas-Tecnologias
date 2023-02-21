import express from 'express';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import routerIndex from './src/routes/router.js'
import optionsSwagger from './src/config/optionsSwagger.js';

//settings
const app = express();

//swagger
const swaggerjsDoc = swaggerJsDoc(optionsSwagger);

//middlewares
app.use(express.json())
app.use(cors());
app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(swaggerjsDoc));

//Routes
app.use('/api', routerIndex);

app.listen(4000, () => {
  console.log('Servidor corriendo en el puerto 4000')
});