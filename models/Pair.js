const db = require("../config/db");

const Pair = {
  getAll: (callback) => {
    db.query("SELECT * FROM pairs", callback);
  },
  create: (name, image, video, callback) => {
    db.query("INSERT INTO pairs (name, image, video) VALUES (?, ?, ?)", [name, image, video], callback);
  },
  update: (id, name, image, video, callback) => {
    db.query("UPDATE pairs SET name=?, image=?, video=? WHERE id=?", [name, image, video, id], callback);
  },
  delete: (id, callback) => {
    db.query("DELETE FROM pairs WHERE id=?", [id], callback);
  },
};

module.exports = Pair;
