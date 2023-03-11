import express from "express";
import {
  postCustomer,
  getAllCustomers,
  getCustomerByEmail,
  updateCustomer,
  deleteCustomer
} from "../controllers/customer.controller.js"

const customerRouter = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     clientes:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: Correo del cliente
 *         name:
 *           type: string
 *           description: Nombre del cliente
 *         nit:
 *           type: string
 *           description: Identificacion del cliente
 *         direction:
 *           type: string
 *           description: Direccion del cliente
 *         phone:
 *           type: string
 *           description: Telefono del cliente
 *       example:
 *         email: correo@gmail.com
 *         name: Kevin Mejía
 *         nit:  1234563123
 *         direction: calle 1 Bucamaranga
 *         phone: 313222222
 */

/**
 * @swagger
 * /api/customers:
 *  get:
 *    summary: Lista todos los clientes registrados en la veterinaria
 *    tags: [clientes]
 *    responses:
 *      200:
 *        description: Lista de todos los clientes
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 */
customerRouter.get('/', getAllCustomers);

/**
 * @swagger
 * /api/customers/{email}:
 *  get:
 *    summary: Lista un cliente por su email
 *    tags: [clientes]
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
customerRouter.get('/:email', getCustomerByEmail);

/**
 * @swagger
 * /api/customers:
 *  post:
 *    summary: Registra un nuevo cliente de la veterinaria
 *    tags: [clientes]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *           type: object
 *           $ref:  '#/components/schemas/clientes'
 *    responses:
 *      200:
 *        description: Se registró el cliente correctamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/clientes'
 *      500:
 *        description: Some server error
 *
 */
customerRouter.post('/', postCustomer);

/**
 * @swagger
 * /api/customers:
 *  put:
 *    summary: Actualiza la informacion de un cliente
 *    tags: [clientes]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *           type: object
 *           $ref:  '#/components/schemas/clientes'
 *    responses:
 *      200:
 *        description: Se registró el cliente correctamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/clientes'
 *      500:
 *        description: Some server error
 *
 */
customerRouter.put('/', updateCustomer);

/**
 * @swagger
 * /api/customers:
 *  delete:
 *    summary: Elimina un cliente por su correo
 *    tags: [clientes]
 *    parameters:
 *      - name: email
 *        in: query
 *        required: true
 *        description: email a eliminar
 *    responses:
 *      200:
 *        description: Cliente eliminado correctamente
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 */
customerRouter.delete('/', deleteCustomer);

export default customerRouter;