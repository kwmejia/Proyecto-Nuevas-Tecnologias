
export class EmailsVeterinarian {

  static getData(connection, res) {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM correos_medicos', (err, rows) => {
        resolve({ data: rows, type: 1, msg: 'Correos obtenidos con exito', err });
        reject({ err });
      })
    });
  }

  static getDataByEmail(connection, corCorreo) {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM correos_medicos WHERE cor_correo = "${corCorreo}" ;`,
        (err, rows) => {
          resolve({ data: rows, type: 1, msg: `Correo consultado correctamente`, err });
          reject({ err });
        })
    })
  }

  static postData(connection, cor_correo) {
    return new Promise((resolve, reject) => {
      connection.query(`INSERT INTO correos_medicos set ? ;`, [{ cor_correo }],
        (err, rows) => {
          resolve({ data: rows, type: 2, msg: `Correo insertado correctamente`, err });
          reject({ err });
        })
    })
  }


  static deleteData(connection, id) {
    return new Promise((resolve, reject) => {
      connection.query(`DELETE FROM correos_medicos WHERE cor_id = ${id}`,
        (err, rows) => {
          resolve({ data: rows, type: 4, msg: `Correo eliminado correctamente`, err });
          reject({ err });
        })
    })
  }
}
