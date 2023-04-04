const db = require("./banco")
const Agendamentos = db.sequelize.define("Agendamentos", {

    nome:{
        type: db.Sequelize.STRING
    },
    telefone:{
        type: db.Sequelize.STRING
    },
    origem:{
        type: db.Sequelize.ENUM('Celular','Whatsapp','Telefone_Fixo')
    },
    data:{
        type: db.Sequelize.DATE
    },
    observacao:{
        type: db.Sequelize.TEXT
    }
})

//Agendamentos.sync({force:true})   
module.exports = Agendamentos
