import { config } from 'dotenv'
config()
export const databaseEnviroment = {
  HOST_DATABASE: process.env.HOST_DATABASE,
  USER_DATABASE: process.env.USER_DATABASE,
  PASSWORD_DATABASE: process.env.PASSWORD_DATABASE,
  NAME_OF_DATABASE: process.env.NAME_OF_DATABASE,
  PORT_DATABASE: process.env.PORT_DATABASE
}

export const EMAIL_USER = process.env.EMAIL_USER
export const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD
export const PORT = process.env.PORT || 3000
