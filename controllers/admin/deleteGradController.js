const mongojs = require('mongojs');
const db = mongojs('fullapp', ['gradovi']);

const deleteGradController = (req, res) => {
    let id = req.params.gradId;
    db.gradovi.remove({_id: mongojs.ObjectID(id)}, (err, docs) => {
        res.send('Ok');
    });
};

module.exports = deleteGradController;