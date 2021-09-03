const Sequelize = require ('sequelize')

const connection = new Sequelize('guiaperguntas','root','joaodavi12', {
    host:'localhost',
    dialect:'mysql'
});


module.exports=connection;
