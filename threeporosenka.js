//*********************************************//
//  _ __    ___  ____ _   _  _ __ ___    __ _  //
// |  _ \  / _ \|_  /| | | ||  _   _ \  / _  | //
// | | | ||  __/ / / | |_| || | | | | || (_| | //
// |_| |_| \___|/___| \____||_| |_| |_| \____| //
//                                             //
//*********************************************//

const express = require('express');
const app = express();
const path = require('path');
const mysql = require('./data/mysql.js');
const bodyParser = require('body-parser');
const temp = path.join(__dirname, './index.html');

app.set('trust proxy', 1);
app.use(express.static(path.join(__dirname, './')));
app.use(bodyParser.json());     
app.use(bodyParser.urlencoded({extended: true}));

app.get('/:page', (req, res) => {
    switch (req.params.page) {
        case 'main':
            res.sendFile(temp);
            break;
        case 'send-form':
            res.sendFile(temp);
            break;
        case 'succ-form':
            res.sendFile(temp);
            break;
        default:
            res.redirect('/main');
            break;
    };
});

app.post('/send-form', async (req,res) => {
    let data = req.body;
    if(!data.name) return res.status(404).send({message: 'Введите имя пользователя'});
    if(!data.surname) return res.status(404).send({message: 'Введите имя пользовател'});
    if(!data.phone) return res.status(404).send({message: 'Введите имя пользовател'});
    if(!data.email) return res.status(404).send({message: 'Введите имя пользовател'});
    if(!data.time) return res.status(404).send({message: 'Введите имя пользовател'});
    if(!data.guests) return res.status(404).send({message: 'Введите имя пользовател'});
    if(!data.menu) return res.status(404).send({message: 'Введите имя пользовател'});
    const newNote = await mysql.SendForm.create ({
        name: data.name,
        surename: data.surname,
        phone: data.phone,
        email: data.email,
        time: data.time,
        guests: data.guests,
        menu: data.menu,
        requests: data.requests
    })
    return res.status(200).send({status:200});
})

app.listen(5200, () => {}); 