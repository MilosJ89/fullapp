const mongojs = require('mongojs');
const db = mongojs('fullapp', ['proizvodi']);

const deleteProizvodController = (req, res) => {
    let id = req.params.proizvodId;
    db.proizvodi.remove({_id: mongojs.ObjectID(id)}, (err, docs) => {
        res.send('Ok');
    });
};

module.exports = deleteProizvodController;