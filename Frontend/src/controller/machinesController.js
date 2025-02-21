class MachinesController {
    static Index (req, res) {
        try {
            res.render("machines");
        } catch (err) {
            console.error(err);
            res.status(500).send('Erreur serveur');
        }
    }
}

module.exports = MachinesController;
