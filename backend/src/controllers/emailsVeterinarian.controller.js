
const getEmailsVeterinarian = (req, res) => {
  req.getConnection((_, conn) => {
    conn.query('SELECT * FROM correos_medicos', (err, rows) => {
      console.log(err ? 'Err SELECT * FROM correos_medicos' + err : 'Get correos succefull')
      res.json(err
        ? { err: 'Error al obtener los correos' }
        : { data: rows }
      )
    })
  })
}

const getEmailsVeterinarianByEmail = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    const corCorreo = req.params.cor_correo
    conn.query(`SELECT * FROM correos_medicos WHERE cor_correo = "${corCorreo}" ;`,
      (err, rows) => {
        console.log(err ? 'Err SELECT * FROM correos_medicos' + err : 'Get email succefull')
        console.log(`SELECT * FROM correos_medicos WHERE cor_correo = ${corCorreo} `)
        res.json(err
          ? { err: 'Error al obtener el correo del veterinario' }
          : { data: rows[0] }
        )
      })
  })
}

const postEmailsVeterinarian = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    const corCorreo = req.body.cor_correo
    const sql = 'INSERT INTO correos_medicos set ? ;'
    conn.query(sql, [{ cor_correo: corCorreo }],
      (err, rows) => {
        err && console.log('Err INSERT INTO  correos_medicos' + err)
        res.json(
          err
            ? { err: 'Error al insertar el correo de veterinario' }
            : { msg: 'Correo insertado correctamente' }
        )
      }
    )
  })
}

const deleteEmailVeterinarian = (req, res) => {
  req.getConnection((err, conn) => {
    if (err) return res.send(err)
    const id = req.params.id
    const sql = `DELETE FROM correos_medicos WHERE cor_id = ${id}`
    conn.query(sql, [{ id }],
      (err, rows) => {
        err && console.log('Err DELETE FROM correos_medicos ' + err)
        res.json(
          err
            ? { err: 'Error al eliminar el correo del veterinario' }
            : { msg: 'Correo eliminado correctamente' }
        )
      }
    )
  })
}

export {
  getEmailsVeterinarian,
  getEmailsVeterinarianByEmail,
  postEmailsVeterinarian,
  deleteEmailVeterinarian
}
