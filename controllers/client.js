const models = require('../models');
import path from 'path';
const Client = models.client;
function handleError(err){
  return err;
}
 module.exports =  {
   getAll: (req, res) => {
       Client.findAll({})
        .then((client) => res.json(client))
        .catch(handleError);
   },
   getById: (req, res) => {
       Client.findOne({where: {id: req.params.clientId}})
            .then((client) => res.json(client))
            .catch(handleError);
   },
   create: (req, res) => {
       const newclient = req.body;

       Client.create(newclient)
            .then((client) => {
                res.json(client);
            })
            .catch(handleError);
       
   },
   update: (req, res) => {
       Client.findOne({where: {id: req.params.clientId}})
            .then((clientFound) => {
                clientFound.update(req.body)
                    .then((updatedclient) => res.json(updatedclient))
                    .catch(handleError);
            })
            .catch(handleError);
   },
   destroy: (req, res) => {
       Client.destroy({where: {id: req.params.clientId}})
            .then((success) => res.json(`destroyed`))
            .catch(handleError);
   }
}
