import { databaseEnviroment } from '../../enviromentConfig.js'

export const dbConfig = {
  host: databaseEnviroment.HOST_DATABASE,
  port: databaseEnviroment.PORT_DATABASE,
  user: databaseEnviroment.USER_DATABASE,
  password: databaseEnviroment.PASSWORD_DATABASE,
  database: databaseEnviroment.NAME_OF_DATABASE
}
