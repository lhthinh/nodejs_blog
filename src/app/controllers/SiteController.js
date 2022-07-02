class SiteController {
    //[Get] /
    index(req,res) {
        res.render('home')
    }
    //[Get] /search
    search(req,res) {
        res.render('search')
    }
}
//module export là xuất ra ngoài
module.exports = new SiteController;

