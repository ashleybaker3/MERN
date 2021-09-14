const Product = require('../models/product.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Howdy!"
    });
}

module.exports.getAllProducts = (request, response) => {
    console.log("getAll method executed");
    Product.find({})
        .then(allProducts => response.json(allProducts))
        .catch(err => response.json(err))
}

module.exports.createProduct = (req , res) => {
    console.log(req.body);
    Product.create(req.body)
        .then( newProduct => res.json({product: newProduct}))
        .catch(err => res.json(err));
}

module.exports.getOneProduct = (req, res) => {
    console.log("getOne method executed");
    Product.findById(req.params.id)
        .then((product) => {
            res.json(product);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
}