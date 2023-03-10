import { response, request } from "express";
import Customer from "../models/Customer.model.js";

async function postCustomer(req = request, res = response) {
  const { name, nit, email, phone, direction } = req.body;
  if (!name || !nit || !email || !phone || !direction) {
    res.status(400).json({ msg: " Faltan parametros" })
    return;
  }
  req.getConnection(async (_, connection) => {
    try {
      const rta = await Customer.created(connection, { name, nit, email, phone, direction: direction })
      res.json({ msg: "Insertador correctamente", data: rta })
    } catch (error) {
      res.status(400).json(error)
    }
  })
}

async function getAllCustomers(req = request, res = response) {
  req.getConnection(async (_, connection) => {
    const rta = await Customer.findAll(connection);
    res.json(rta);
  })
}

async function getCustomerByEmail(req = request, res = response) {
  const { email } = req.params;
  if (!email) {
    res.status(400).json({ err: "El email es obligatorio" })
    return
  }
  req.getConnection(async (_, connection) => {
    const rta = await Customer.findByEmail(connection, email);
    res.json(rta[0])
  })
}

async function updateCustomer(req = request, res = response) {
  const { name, nit, email, phone, direction } = req.body;
  if (!name || !nit || !email || !phone || !direction) {
    res.status(400).json({ msg: " Faltan parametros" })
    return;
  }

  req.getConnection(async (_, connection) => {
    const rta = await Customer.update(connection, { name, nit, email, phone, direction: direction })
    res.json(rta);
  })
}

async function deleteCustomer(req = request, res = response) {
  const { email } = req.query;
  if (!email) {
    res.status(404).json({ err: 'Faltan parametros' });
    return
  }

  req.getConnection(async (_, connection) => {
    const rta = await Customer.destroy(connection, email);
    res.json(rta);
  })

}

export {
  postCustomer,
  getAllCustomers,
  getCustomerByEmail,
  updateCustomer,
  deleteCustomer
}