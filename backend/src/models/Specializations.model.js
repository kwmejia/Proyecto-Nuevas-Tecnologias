import { Connection } from 'mysql2'
export class Specialization {
  /**
   * @param {String} name
   */
  constructor (name) {
    this.name = name
  }

  /**
   *
   * @param {Connection} connection
   * @param {Response} res
   */
  static getData (connection, res) {
    connection.query('SELECT * FROM especializacion', (err, rows) => {
      if (err) res.json({ err: 'Error al obtener las especializaciones' })

      res.json({
        msg: 'Especializaciones consultadas correctamente',
        data: rows
      })
    })
  }

  /**
   *
   * @param {Connection} connection
   * @param {Response} res
   * @param {String} id
   */
  static getDataById (connection, res, id) {
    connection.query(`SELECT * FROM especializacion WHERE esp_id = ${id}`, (err, rows) => {
      if (err) res.json({ err: `Error al obtener la especialización con el id: ${id}` })

      res.json({
        msg: 'Especializaciones consultadas correctamente',
        data: rows
      })
    })
  }

  /**
   *
   * @param {Connection} connection
   * @param {Response} res
   */
  postData (connection, res) {
    connection.query('INSERT INTO especializacion set ? ;', [{ esp_nombre: this.name }], (err, rows) => {
      if (err) res.json({ err: 'Error al crear la especialización', msg: err.message })

      res.json({
        msg: 'Especialización creada exitosamente'
      })
    })
  }

  /**
   *
   * @param {Connection} connection
   * @param {Response} res
   * @param {String} id
   */
  static deleteData (connection, res, id) {
    connection.query(`DELETE FROM especializacion WHERE esp_id = ${id}`, (err, rows) => {
      if (err) res.json({ err: `Error al eliminar la especialización con el id: ${id}` })

      res.json({
        msg: 'Especializaciones Eliminada correctamente'
      })
    })
  }
}
