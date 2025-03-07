const Pair = require("../models/Pair");

exports.getPairs = (req, res) => {
  Pair.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.createPair = (req, res) => {
  const { name, image, video } = req.body;
  Pair.create(name, image, video, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: result.insertId, name, image, video });
  });
};

exports.updatePair = (req, res) => {
  const { name, image, video } = req.body;
  Pair.update(req.params.id, name, image, video, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
};

exports.deletePair = (req, res) => {
  Pair.delete(req.params.id, (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
};
