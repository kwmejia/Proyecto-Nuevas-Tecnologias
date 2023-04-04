import express from 'express'
import { sendEmail } from '../controllers/mailer.controller.js'

const mailerRouter = express.Router()

mailerRouter.post('/', sendEmail)

export default mailerRouter
