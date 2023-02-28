
/*
 type:
  1: Select
  2: Insert
  3: Update
  4: Delete
*/

export default function response(res, info, value = '', limit) {

  const { err, msg, data, type } = info;
  if (err) {
    const error = new Error(err);
    return res
      .status(400)
      .json({ error: error.message })
  }

  if (type == 1 && !data.length) {
    const error = new Error(`Parametro ${value} no encontrado`);
    return res
      .status(200)
      .json({ error: error.message })
  }

  return res.json({
    msg,
    data
  })
}

