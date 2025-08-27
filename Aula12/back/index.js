const express = require('express');
const { sequelize } = require('./src/config/configDB');
const swaggerUi = require('swagger-ui-espress');
const swaggerDocument = require('./ApiLivros.openapi.json');
const cors =  require('cors')


require('dotenv').config();
const livroRoutes = require('./src/modules/livro/routes/livroRoutes');

const app = express();
const PORT = process.env.PORT
app.use(cors());
app.use(express.json());
app.use('/livros', livroRoutes);


//await sequelize.sync({ force: true })


app.listen(PORT, ()=>{
    console.log(`aplicação rodando em http://localhost:${PORT}`); 
})

module.exports = app;



