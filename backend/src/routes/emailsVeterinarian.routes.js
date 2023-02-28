import express from 'express'
import {
  getEmails,
  getEmailByName,
  postEmail,
  deleteEmail
} from '../controllers/emailsVeterinarian.controller.js'

const router = express.Router()

/**
 * @swagger
 * components:
 *   schemas:
 *     emailsVeterinarian:
 *       type: object
 *       properties:
 *         cor_correo:
 *           type: string
 *           description: Correo a registrar
 *       example:
 *         cor_correo: correo@gmail.com
 */

/**
 * @swagger
 * /api/emailsVeterinarian:
 *  get:
 *    summary: Lista los correos de los veterinarios
 *    tags: [emailsVeterinarian]
 *    responses:
 *      200:
 *        description: the list of emails veterinarian
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 */
router.get('/', getEmails);

/**
 * @swagger
 * /api/emailsVeterinarian/{cor_correo}:
 *  get:
 *    summary: Lista por correo de veterinario
 *    tags: [emailsVeterinarian]
 *    parameters:
 *      - name: cor_correo
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
router.get('/:cor_correo', getEmailByName)

/**
 * @swagger
 * /api/emailsVeterinarian:
 *  post:
 *    summary: Registra un nuevo correo para un veterinario
 *    tags: [emailsVeterinarian]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *           type: object
 *           $ref:  '#/components/schemas/emailsVeterinarian'
 *    responses:
 *      200:
 *        description: Se agregó el correo en veterinarios correctamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/emailsVeterinarian'
 *      500:
 *        description: Some server error
 *
 */
router.post('/', postEmail)

/**
 * @swagger
 * /api/emailsVeterinarian/{id}:
 *  delete:
 *    summary: Elimina el correo de un veterinario por id
 *    tags: [emailsVeterinarian]
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        description: id correo
 *    responses:
 *      200:
 *        description: Correo eliminado correctamente
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 */
router.delete('/:id', deleteEmail)

export default router;
