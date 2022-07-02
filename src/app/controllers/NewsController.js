class NewsController {
    //[Get] /news
    index(req,res) {
        res.render('news')
    }
    //[Get] /news/:slug
    show(req,res) {
        res.send('NEWS DETAILS')
    }
}
//module export là xuất ra ngoài
module.exports = new NewsController;

