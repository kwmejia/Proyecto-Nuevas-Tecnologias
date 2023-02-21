import express from "express";

const router = express.Router();
/**
 * @swagger
 * /api/:
 *  get:
 *    summary: Endpoint de prueba
 *    tags: [Tasks]
 *    responses:
 *      200:
 *        description: the list of tasks
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 */
router.get('/', (req, res) => {
  res.json({
    message: "Bakend Funcionando"
  })
});


export default router;