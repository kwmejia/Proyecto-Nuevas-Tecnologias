import express from 'express'
import { deleteSpecialization, getSpecializationById, getSpecializations, postSpecialization } from '../controllers/specializations.controller.js'

const specializationRouter = express.Router()

specializationRouter.get('/', getSpecializations)

specializationRouter.get('/:id', getSpecializationById)

specializationRouter.post('/', postSpecialization)

specializationRouter.delete('/:id', deleteSpecialization)

export default specializationRouter
