const { Product } = require('../models/product.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Howdy!"
    });
}

module.exports.createProduct = (req , res) => {
    const { title, price, description } = req.body;
    Product.create({
        title,
        price,
        description
    })
        .then( product => res.json(product))
        .catch(err => res.json(err));
}