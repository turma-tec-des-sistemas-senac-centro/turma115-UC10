const express = require('express');
const expositorRoutes = require('./modules/expositor/routes/expositorRoutes');
const prototipoRoutes = require('./modules/prototipo/routes/prototipoRoutes');

const app = express();
app.use(express.json());

app.use('/expositores', expositorRoutes);
app.use('/prototipos', prototipoRoutes);


const { sequelize } = require('./database/configDB');
require('dotenv').config();

const PORT = process.env.PORT

//await sequelize.sync({ force: true })

app.listen(PORT, ()=>{
    console.log(`aplicação rodando em http://localhost:${PORT}`); 
})

module.exports = app;
