import express from "express";
import upload, {
  getAllPets,
  getPetsByOwner,
  postPet,
  postImagePet,
  updatePet,
  deletePet
} from "../controllers/pets.controller.js"

const petRouter = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     mascotas:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Nombre de la mascota
 *         years:
 *           type: string
 *           description: Edad de la mascota
 *         sex:
 *           type: string
 *           description: Sexo de la mascota
 *         idOwner:
 *           type: int
 *           description: Id del dueño de la mascota
 *         idRace:
 *           type: int
 *           description: Id de la raza de la mascota
 *         id:
 *           type: int
 *           description: Id de la mascota (update)
 *       example:
 *         name: Dalí Villamizar
 *         years: 2
 *         sex:  1
 *         idOwner: 1
 *         idRace: 2
 */

/**
 * @swagger
 * /api/pets:
 *  get:
 *    summary: Lista todas las mascotas registradas
 *    tags: [mascotas]
 *    responses:
 *      200:
 *        description: Lista de todas las mascotas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 */
petRouter.get('/', getAllPets);

/**
 * @swagger
 * /api/pets/{email}:
 *  get:
 *    summary: Lista las mascotas de un cliente
 *    tags: [mascotas]
 *    parameters:
 *      - name: email
 *        in: path
 *        schema:
 *          type: string
 *        required: true
 *        description: email customer
 *    responses:
 *      200:
 *        description: El listado fue exitoso
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 */
petRouter.get('/:email', getPetsByOwner);

/**
 * @swagger
 * /api/customers:
 *  put:
 *    summary: Actualiza la informacion de una mascota por su id
 *    tags: [mascotas]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *           type: object
 *           $ref:  '#/components/schemas/mascotas'
 *    responses:
 *      200:
 *        description: Se registró el cliente correctamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/mascotas'
 *      500:
 *        description: Some server error
 *
 */
petRouter.put('/', updatePet);

/**
 * @swagger
 * /api/pets/{id}:
 *  delete:
 *    summary: Elimina una mascota por su id
 *    tags: [mascotas]
 *    parameters:
 *      - name: id
 *        in: params
 *        required: true
 *        description: mascota a eliminar
 *    responses:
 *      200:
 *        description: Mascota eliminada correctamente
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 */
petRouter.delete('/:id', deletePet);

// Upload File
petRouter.post('/photo/:id', upload, postImagePet);

export default petRouter;