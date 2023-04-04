
class Customer {
  static created (connection, data) {
    const { name, nit, email, phone, direction } = data
    return new Promise((resolve, reject) => {
      connection.query(
        `INSERT INTO cliente (cli_nombre, cli_nit, cli_direccion, cli_correo, cli_telefono)
        VALUES (?,?,?,?,?)`,
        [name, nit, direction, email, phone],
        function (error, response) {
          console.log(error)
          resolve(response)
          reject(error)
        }
      )
    })
  }

  static findAll (connection) {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM cliente',
        [],
        function (error, response) {
          resolve(response)
          reject(error)
        }
      )
    })
  }

  static findByEmail (connection, email) {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM cliente WHERE cliente.cli_correo = ?',
        [email],
        function (error, response) {
          resolve(response)
          reject(error)
        }
      )
    })
  }

  static update (connection, data) {
    const { name, nit, email, phone, direction } = data
    return new Promise((resolve, reject) => {
      connection.query(
        `UPDATE cliente SET cli_nombre = ?, cli_nit = ?, cli_direccion = ?, cli_telefono = ?
        WHERE cli_correo = ?`,
        [name, nit, direction, phone, email],
        function (error, response) {
          resolve(response)
          reject(error)
        }
      )
    })
  }

  static destroy (connection, email) {
    return new Promise((resolve, reject) => {
      connection.query(
        'DELETE FROM cliente WHERE cli_correo = ?',
        [email],
        function (error, response) {
          resolve(response)
          reject(error)
        }
      )
    })
  }
}

export default Customer
