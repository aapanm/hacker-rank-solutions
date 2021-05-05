const Products = require("../models/products");

const getProductsController = async (req, res) => {
  const products = await Products.findAll();
  res.status(200).send(products);
};

const insertNewProduct = async (req, res) => {
  const data = req.body;
  data.isPublished = false;
  try {
    const product = await Products.create(data);
    res.status(201).send(product);
  } catch (e) {
    res.status(400).send(e);
  }
};

const patchProduct = async (req, res) => {
  const id = req.params.id;

  const product = await Products.findAll({
    where: {
      id: id,
    },
  });

  const errors = [];

  if (product[0].mrp < product[0].price) {
    errors.push("MRP should be less than equal to the Price");
  }

  if (product[0].stock < 1) {
    errors.push("Stock count is 0");
  }

  if (errors.length) {
    res.status(422).send(errors);
  }

  const values = { isPublished: true };
  const selector = { where: { id: id } };
  const updateProduct = await Products.update(values, selector);

  res.status(204).send();
};

const putDeleteProductController = async (req, res) => {
  res.status(405).send();
};

module.exports = {
  getProductsController: getProductsController,
  insertNewProduct: insertNewProduct,
  patchProduct: patchProduct,
  putDeleteProductController: putDeleteProductController,
};
