const connection = require('./connection');

const orm = {
  selectAll: function (tableName, callback) {
    connection.query(
      'SELECT * FROM ??',
      tableName, (err, data) => {
        if (err) throw err;
        callback(data);
      }
    )
  },
  insertOne: function (tableName, valueObj, callback) {
    connection.query(
      'INSERT INTO ?? SET ?',
      [tableName, valueObj], (err, data) => {
        if (err) throw err;
        callback(data);
      }
    )
  },
  updateOne: function (tableName, valueObj, condition, callback) {
    connection.query(
      'UPDATE ?? SET ? WHERE ?',
      [tableName, valueObj, condition], (err, data) => {
        if (err) throw err;
        callback(data);
      }
    )
  }
}

module.exports = orm;