
class HomeController {
    static Index (req, res) {
        try{
            res.render("index");
        }catch (err) {
            console.log('err')
        }
      };
}

module.exports = HomeController;    