import express from 'express'
import { deleteSpecialization, getSpecializationById, getSpecializations, postSpecialization } from '../controllers/specializations.controller.js'

const specializationRouter = express.Router()
/**
 * @swagger
 * components:
 *   schemas:
 *     especializaciones:
 *       type: object
 *       properties:
 *         nombre:
 *           type: string
 *           description: Nombre de la especialización
 *       example:
 *         nombre: Peluquero
 */

/**
 * @swagger
 * /api/specializations:
 *  get:
 *    summary: Lista las especializaciones de los veterinarios
 *    tags: [especializaciones]
 *    responses:
 *      200:
 *        description: Lista de las especializaciones de los veterinarios
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 */
specializationRouter.get('/', getSpecializations)

/**
 * @swagger
 * /api/specializations/{id}:
 *  get:
 *    summary: Lista por correo de veterinario por su ID
 *    tags: [especializaciones]
 *    parameters:
 *      - name: id
 *        in: path
 *        schema:
 *          type: string
 *        required: true
 *        description: email veterinarian
 *    responses:
 *      200:
 *        description: El listado fue exitoso
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 */
specializationRouter.get('/:id', getSpecializationById)

/**
 * @swagger
 * /api/specializations:
 *  post:
 *    summary: Registra una nueva especialización de un veterinario
 *    tags: [especializaciones]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *           type: object
 *           $ref:  '#/components/schemas/especializaciones'
 *    responses:
 *      200:
 *        description: Se agregó el correo en veterinarios correctamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/especializaciones'
 *      500:
 *        description: Some server error
 *
 */
specializationRouter.post('/', postSpecialization)

/**
 * @swagger
 * /api/specializations/{id}:
 *  delete:
 *    summary: Elimina una especialización por su ID
 *    tags: [especializaciones]
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: id especializacion
 *    responses:
 *      200:
 *        description: Especialización eliminada correctamente
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 */

specializationRouter.delete('/:id', deleteSpecialization)

export default specializationRouter;
