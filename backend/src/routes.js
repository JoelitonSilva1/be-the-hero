const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();
//Inicia Sessão
routes.post('/sessions', SessionController.create);

//Lista e Adiciona Ongs
routes.get('/ongs', OngController.index ); //GET lista
routes.post('/ongs', OngController.create);//POST adiciona

//Lista, Adiciona e Deleta Incidents
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

//Lista Casos
routes.get('/profile', ProfileController.index);

module.exports = routes;