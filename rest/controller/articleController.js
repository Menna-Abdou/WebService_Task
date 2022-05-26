const Article = require('../model/articleModel')

exports.getAllArticles = async (req, res) => {
    const articles = await Article.find();
    res.send(articles);
  };
  // -----------------------------------------------------------
  exports.postArticle = async (req, res) => {
    try {
      const article = await Article.create(req.body);
      res.status(200).send(article);
    } catch (err) {
      res.status(404).json({
        status: "fail",
        message: err,
      });
    }
  };
  // -----------------------------------------------------------
  exports.getArticle = async (req, res) => {
    const article = await Article.findById(req.params.id);
    // const article = await Article.findOne({_id:req.params.id});
    res.send(article);
  };
  // -----------------------------------------------------------
  exports.patchArticle = async (req, res) => {
    const article = await Article.findByIdAndUpdate(req.params.id,req.body,{
      new:true,
      runValidators:true
    });
    res.send(article);
  };
  // -----------------------------------------------------------
  exports.deleteArticle = async (req, res) => {
    const article = await Article.findByIdAndDelete(req.params.id);
    res.send("article is deleted");
  };
  // -----------------------------------------------------------
  exports.articleComments = async (req, res) => {
 const article = await Article.findById(req.params.id);
    res.send(article.comments);
  };