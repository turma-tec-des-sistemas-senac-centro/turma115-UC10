const LivroModel = require('../models/livroModel');

class LivroController {

    static async criar(req, res){
        const generosLivros = [
            "Romance",
            "Ficção Científica",
            "Fantasia",
            "Mistério",
            "Suspense",
            "Terror",
            "Aventura",
            "Drama",
            "Histórico",
            "Biografia",
            "Autobiografia",
            "Poesia",
            "Humor",
            "Literatura Clássica",
            "Literatura Contemporânea",
            "Infantojuvenil",
            "Young Adult (YA)",
            "Distopia",
            "Realismo Mágico",
            "Crônicas",
            "Ensaios",
            "Autoajuda",
            "Espiritualidade",
            "Religião",
            "Filosofia",
            "Psicologia",
            "Ciências Sociais",
            "Política",
            "Economia",
            "Educação",
            "Tecnologia",
            "Negócios",
            "Direito",
            "Medicina",
            "Ecologia",
            "Viagens",
            "Gastronomia",
            "Arte",
            "Fotografia"
          ];
          
        try {
            const{titulo, autor, ano_publicacao, genero, preco} = req.body
            if(!titulo || !autor || !ano_publicacao || !genero || !preco){
                return res.status(400).json({msg:"Todos os campos são obrigatórios"})
            }
            if(!Number.isInteger(ano_publicacao) || ano_publicacao<1000 || ano_publicacao>Number.parseInt(Date.getFullYear())){
                return res.status(400).json({msg:"Ano de publicação deve ser um número"})
            }
            if(typeof preco !== 'number' || preco<=0){
                return res.status(400).json({msg:"Preço deve ser maior que zero"})
            }
            if(titulo.lenght<2){
                return res.status(400).json({msg:"Título deve ter pelo menos 2 caracteres"})
            }
            if(!generosLivros.includes(genero)){
                return res.status(400).json({msg:"Gênero inválido"})
            }
            if(typeof preco !== 'number' ){
                return res.status(400).json({msg:"Preço deve ser um número"})
            }
            


            const livro = await LivroModel.create({titulo, autor, ano_publicacao, genero, preco})
            res.status(201).json({msg:"Livro criado com sucesso", livro})
        } catch (error) {
            
        }

        
    }

}

module.exports = LivroController;