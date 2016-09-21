const models = require('../models');
import path from 'path';
const Role = models.roles;
function handleError(err){
  return err;
}
 module.exports =  {
   getAll: (req, res) => {
       Role.findAll({})
        .then((roles) => res.json(roles))
        .catch(handleError);
   },
   getById: (req, res) => {
       Role.findOne({where: {id: req.params.roleId}})
            .then((role) => res.json(role))
            .catch(handleError);
   },
   create: (req, res) => {
       const newrole = req.body;

       Role.create(newrole)
            .then((role) => {
                res.json(role);
            })
            .catch(handleError);
       
   },
   update: (req, res) => {
       Role.findOne({where: {id: req.params.roleId}})
            .then((roleFound) => {
                roleFound.update(req.body)
                    .then((updatedrole) => res.json(updatedrole))
                    .catch(handleError);
            })
            .catch(handleError);
   },
   destroy: (req, res) => {
       Role.destroy({where: {id: req.params.roleId}})
            .then((success) => res.json(`destroyed`))
            .catch(handleError);
   }
}
