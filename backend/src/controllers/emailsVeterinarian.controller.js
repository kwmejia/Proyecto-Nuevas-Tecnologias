import { EmailsVeterinarian } from "../models/EmailsVeterinarian.model.js"
import response from "../helpers/response.js";


export function getEmails(req, res) {
  req.getConnection(async (_, connection) => {
    const data = await EmailsVeterinarian.getData(connection, res)
    response(res, data);
  })
}


export function getEmailByName(req, res) {
  const { cor_correo } = req.params;
  req.getConnection(async (_, connection) => {
    const data = await EmailsVeterinarian.getDataByEmail(connection, cor_correo)
    response(res, data, cor_correo);
  })
}

export function postEmail(req, res) {
  const { cor_correo } = req.body;
  req.getConnection(async (_, connection) => {
    const data = await EmailsVeterinarian.postData(connection, cor_correo);
    response(res, data, cor_correo);
  })
}

export function deleteEmail(req, res) {
  const { id } = req.params;
  req.getConnection(async (_, connection) => {
    const data = await EmailsVeterinarian.deleteData(connection, id);
    response(res, data, id);
  });
}
