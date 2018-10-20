const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Matches with "/api/books"
router.route("/")
  .get(articleController.findAll)
  .post(articleController.create);

//route to post new articles
router.route("/scrape")
   .post(articleController.create); 

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(articleController.findById)
  .put(articleController.update)
  .delete(articleController.remove);

module.exports = router;