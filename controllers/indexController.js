const products = require ('../data/products')

module.exports = {
    index : (req,res) => {

        return res.render ('index', {
            tittle: "Home",
            products
        })
    }
}