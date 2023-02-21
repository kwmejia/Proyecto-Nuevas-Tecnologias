import express from "express";

const app = express();
app.use('/', (req, res) => {
  res.json({ message: "Backend endpoint " })
})

app.listen(4000, () => {
  console.log('Servidor corriendo en el puerto 4000')
});