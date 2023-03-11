import multer from "multer";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { request, response } from "express";
import Pet from "../models/Pet.model.js";

async function getAllPets(req = request, res = response) {
  req.getConnection(async (_, connection) => {
    const rta = await Pet.findAll(connection);
    res.json(rta);
  })
}

async function getPetsByOwner(req = request, res = response) {
  const { email } = req.params;
  if (!email) {
    res.status(400).json({ err: "Faltan parametros" })
  }

  req.getConnection(async (_, connection) => {
    const rta = await Pet.findByOwner(connection, email);
    res.json(rta);
  })
}

async function postPet(req = request, res = response) {
  const { name, years, sex, idOwner, idRace } = req.body;
  if (!name || !years || !sex || !idOwner || !idRace) {
    res.status(400).json({ err: "Faltan parametros" })
    return;
  }

  req.getConnection(async (_, connection) => {
    const rta = await Pet.create(connection, req.body)
    res.json(rta);
  })
}

const nameFile = Date.now();
const CURRENT_DIR = dirname(fileURLToPath(import.meta.url))
const storage = multer.diskStorage({
  destination: join(CURRENT_DIR, "../../uploads"),
  filename: (req, file, cb) => {
    cb(null, `${nameFile}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });
export default upload.single("photo");

async function postImagePet(req = request, res = response) {
  const { id } = req.params;
  const name = `${nameFile}-${req.file.originalname}`;
  req.getConnection(async (_, connection) => {
    const rta = await Pet.savePhoto(connection, name, id);
    res.json(rta);
  })
}

async function updatePet(req = request, res = response) {
  const { name, years, sex, idOwner, idRace, id } = req.body;
  if (!name || !years || !sex || !idOwner || !idRace || !id) {
    res.status(400).json({ err: "Faltan parametros" })
    return;
  }

  req.getConnection(async (_, connection) => {
    const rta = await Pet.update(connection, req.body)
    res.json(rta);
  })
}

async function deletePet(req = request, res = response) {
  const { id } = req.params;
  req.getConnection(async (_, connection) => {
    const rta = await Pet.destroy(connection, id);
    res.json(rta);
  })
}

export {
  getAllPets,
  getPetsByOwner,
  postPet,
  postImagePet,
  updatePet,
  deletePet
}