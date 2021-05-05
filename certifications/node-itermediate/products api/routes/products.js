const router = require("express").Router();
const controller = require("../controllers/products");

router.get("/products", controller.getProductsController);

router.post("/products", controller.insertNewProduct);

router.patch("/products/:id", controller.patchProduct);

router.put("/products/:id", controller.putDeleteProductController);

router.delete("/products/:id", controller.putDeleteProductController);

module.exports = router;
