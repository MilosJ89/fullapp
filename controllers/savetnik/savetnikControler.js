const mongojs = require('mongojs');
const db = mongojs('fullapp', ['termini', 'gradovi', 'proizvodi', 'users']);

const savetnikController = (req, res) => {
    let user = req.session.user;

    db.termini.find({savetnik: user.first_name+ ' ' +user.last_name, active: true}, (err, termini) => {
        res.render('savetnik/index', {
            name: user.first_name,
            termini: termini
        });
    });
}

module.exports = savetnikController;