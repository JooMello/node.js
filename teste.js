const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste','root','',{
    host: 'localhost',
    dialect: 'mysql'
})

const Postagem =  sequelize.define('postagem',{
    titulo: {
         type: Sequelize.STRING
},
conteudo: { 
    type: Sequelize.TEXT
}
})
Postagem.createServer(function){
    table = new Sequelize.Table.Postagem,(stream),
}

const Usuario = sequelize.define('usuarios',{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: { 
        type: Sequelize.STRING
    },
    email: {
         type: Sequelize.STRING
    }
})


