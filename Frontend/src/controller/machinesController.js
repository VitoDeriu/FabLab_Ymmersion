class MachinesController {
    static Index (req, res) {
        try {
            res.render("machines");
        } catch (err) {
            console.error(err);
            res.status(500).send('Erreur serveur');
        }
    }

    //fonction qui renvoi les 3 machines de la base donnée (j'ai pas fais le back)

    //
}

module.exports = MachinesController;
