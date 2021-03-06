const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Matches with "/api/articles"
router.route("/")
  .get(articleController.findAll)
  .post(articleController.create);

//route to post new articles
router.route("/scrape")
   .post(articleController.create); 

//route to clear articles in DB
router.route("/clear")
   .delete(articleController.clear);  
   
// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(articleController.findById)
  .put(articleController.update)
  .delete(articleController.remove);

module.exports = router;