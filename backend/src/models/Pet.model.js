class Pet {

  static findAll(connection) {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT mascotas.mas_id, mascotas.mas_nombre, mascotas.mas_edad, mascotas.mas_sexo, cliente.cli_nombre, razas.raz_nombre, mas_foto
        FROM veterinaria_dali.mascotas
        INNER JOIN cliente ON cliente.cli_id = mascotas.cliente_cli_id
        INNER JOIN razas ON  razas.raz_id = mascotas.razas_raz_id;`,
        [],
        function (error, results) {
          resolve(results);
          reject(error);
        }
      )
    })
  }

  static findByOwner(connection, email) {
    return new Promise((resolve, reject) => {
      connection.query(
        `SELECT mascotas.mas_id, mascotas.mas_nombre, mascotas.mas_edad, mascotas.mas_sexo, cliente.cli_nombre, razas.raz_nombre, mas_foto
        FROM veterinaria_dali.mascotas
        INNER JOIN cliente ON cliente.cli_id = mascotas.cliente_cli_id
        INNER JOIN razas ON  razas.raz_id = mascotas.razas_raz_id
        WHERE cliente.cli_correo = ? ;`,
        [email],
        function (error, results) {
          resolve(results);
          reject(error);
        }
      )
    })
  }

  static create(connection, data) {
    const { name, years, sex, idOwner, idRace } = data;
    return new Promise((resolve, reject) => {
      connection.query(
        `INSERT INTO mascotas (mas_nombre, mas_edad, mas_sexo, cliente_cli_id, razas_raz_id) VALUES (?, ?, ?, ?, ?);`,
        [name, years, sex, idOwner, idRace],
        function (error, results) {
          resolve(results);
          reject(error);
        }
      )
    })
  }

  static savePhoto(connection, name, id) {
    return new Promise((resolve, reject) => {
      connection.query(
        `UPDATE mascotas SET mas_foto = ? WHERE (mas_id = ?);`,
        [name, id],
        function (error, results) {
          resolve(results);
          reject(error);
        }
      )
    })
  }

  static update(connection, data) {
    const { name, years, sex, idRace, id } = data;
    return new Promise((resolve, reject) => {
      connection.query(
        `UPDATE mascotas SET mas_nombre = ?, mas_edad = ?, mas_sexo = ?, razas_raz_id = ? WHERE (mas_id = ?);`,
        [name, years, sex, idRace, id],
        function (error, results) {
          resolve(results);
          reject(error);
        }
      )
    })
  }

  static destroy(connection, id) {
    return new Promise((resolve, reject) => {
      connection.query(
        `DELETE FROM mascotas WHERE (mas_id = ?);`,
        [id],
        function (error, results) {
          resolve(results);
          reject(error);
        }
      )
    })
  }
}

export default Pet;