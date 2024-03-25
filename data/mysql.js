const { Sequelize, DataTypes, QueryTypes,Op } = require('sequelize');
const sequelize = new Sequelize('db_name', 'db_usr_name', 'pass', {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql',
    logging: false
});
const queryInterface = sequelize.getQueryInterface();
sequelize.authenticate().then(() => {
    console.info('Подключение к DataBase.');
}).catch(err => {
    console.fatal(`Ошибка database:\nCode: ${err.parent.code}\nMessage: ${err.parent.sqlMessage}`);
    process.exit(1);
});
//Модели бд
const SendForm = sequelize.define('SendForm', {
    name: {
        type: DataTypes.TEXT('long'),
        allowNull: false
    },
    surename: {
        type: DataTypes.TEXT('long'),
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT('long'),
        allowNull: false
    },
    number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.TEXT('long'),
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    guests: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    menu: {
        type: DataTypes.STRING,
        allowNull: false
    },
    requests: {
        type: DataTypes.TEXT('long'),
        allowNull: true
    }
}, {
    freezeTableName: true,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});
let force = false;
let alter = false;
Users.sync({force: force, alter: alter});

module.exports = {Op,Sequelize,QueryTypes,DataTypes,sequelize,queryInterface,SendForm}