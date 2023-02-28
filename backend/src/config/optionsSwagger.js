import { PORT } from '../../enviromentConfig.js'

const optionsSwagger = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Tasks API',
      version: '1.0.0',
      description: 'A simple express library API'
    },
    servers: [
      {
        url: `http://localhost:${PORT}`
      }
    ]
  },
  apis: ['./src/routes/*.js']
}

export default optionsSwagger
