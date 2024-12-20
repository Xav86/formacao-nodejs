
class IndexController {

    async home(req, res) {
        res.render('index');
    }

}

module.exports = new IndexController;
