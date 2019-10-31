// This Controller handles operations on this especifical model.

const mongoose = require("mongoose");

const Product = mongoose.model("Product");  

module.exports = {
  // List all our products in our database
  async index(req, res) {
    const { page = 1 } = req.query; // using destructuring in the parameters
    const products = await Product.paginate({}, { page, limit: 10 });
    return res.json(products);
  },

  // Single product details
  async show(req, res) {
    const product = await Product.findById(req.params.id);
    return res.json(product);
  },

  // Creates a product
  async store(req, res) {
    const product = await Product.create(req.body);
    return res.json(product);
  },

  // Updates a product
  async udpate(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(product);
  },

  // Delete a product
  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);
    return res.send();
  }

};