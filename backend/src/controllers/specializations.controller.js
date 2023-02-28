import { Specialization } from '../models/Specializations.model.js'

export function getSpecializations (req, res) {
  req.getConnection((_, connection) => {
    Specialization.getData(connection, res)
  })
}

export function getSpecializationById (req, res) {
  const { id } = req.params
  req.getConnection((_, connection) => {
    Specialization.getDataById(connection, res, id)
  })
}

export function postSpecialization (req, res) {
  const { nombre } = req.body
  if (!nombre) res.json({ err: 'Datos incompletos' })
  const newSpecialization = new Specialization(nombre)
  req.getConnection((_, connection) => {
    newSpecialization.postData(connection, res)
  })
}

export function deleteSpecialization (req, res) {
  const { id } = req.params
  req.getConnection((_, connection) => {
    Specialization.deleteData(connection, res, id)
  })
}
