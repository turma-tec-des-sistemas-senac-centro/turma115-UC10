const ProdutoModel = require('../models/produtoModel');

class ProdutoControlerApi {
    static async criarProduto(req, res) {
        try {
            const { nome, preco, estoque } = req.body;
            if (!nome || !preco || preco===0 || !estoque || estoque===0) {
               res.status(400).json({msg:'Todos os campos devem ser preenchidos!'});
               return
            }
            const produto = await ProdutoModel.create({ nome, preco, estoque });
            res.status(201).json({ msg: 'produto criado com sucesso!', produto });

        } catch (error) {
            res.status(500).json({ msg: 'Erro interno', error: error.message });
        }

    }

}

module.exports = ProdutoControlerApi;