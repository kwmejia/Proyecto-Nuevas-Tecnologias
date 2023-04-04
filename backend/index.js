import express from 'express'
import cors from 'cors'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import swaggerUI from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'
import conn from 'express-myconnection'
import mysql from 'mysql2'
import { PORT } from './enviromentConfig.js'
import { dbConfig } from './src/config/connection.js'
import emailsVeterinarian from './src/routes/emailsVeterinarian.routes.js'
import optionsSwagger from './src/config/optionsSwagger.js'
import specializationRouter from './src/routes/specialization.routes.js'
import customerRouter from './src/routes/customers.routes.js'
import petRouter from './src/routes/pets.routes.js'
import mailerRouter from './src/routes/mailer.routes.js'

// settings
const app = express()
const CURRENT_DIR = dirname(fileURLToPath(import.meta.url))

// swagger
const swaggerjsDoc = swaggerJsDoc(optionsSwagger)

// middlewares
app.use(express.json())
app.use(cors())
app.use(conn(mysql, dbConfig))
app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerjsDoc))
app.use('/public', express.static(join(CURRENT_DIR, './uploads')))

// Routes
app.use('/api/emailsVeterinarian', emailsVeterinarian)
app.use('/api/specializations', specializationRouter)
app.use('/api/customers', customerRouter)
app.use('/api/pets', petRouter)
app.use('/api/mailer', mailerRouter)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`)
})
