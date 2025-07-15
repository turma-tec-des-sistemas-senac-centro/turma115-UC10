const produtoModel = require('../models/produtoModel');

class ProdutoController {

    static async criar(dados){
        //const {nome, preco, estoque} = req.body;
        const produto = produtoModel.create(dados);
        return produto
    }



}

module.exports = ProdutoController;