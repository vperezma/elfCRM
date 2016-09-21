// import models from '../models';

const models = require('../models');
import path from 'path';
const User = models.user;
function handleError(err){
  return err;
}
 module.exports =  {
   getAll: (req, res) => {
       User.findAll({})
        .then((users) => res.json(users))
        .catch(handleError);
   },
   getById: (req, res) => {
       User.findOne({where: {id: req.params.userId}})
            .then((user) => res.json(user))
            .catch(handleError);
   },
   create: (req, res) => {
       const newUser = req.body;

       User.create(newUser)
            .then((user) => {
                res.json(user);
            })
            .catch(handleError);
       
   },
   update: (req, res) => {
       User.findOne({where: {id: req.params.userId}})
            .then((userFound) => {
                userFound.update(req.body)
                    .then((updatedUser) => res.json(updatedUser))
                    .catch(handleError);
            })
            .catch(handleError);
   },
   destroy: (req, res) => {
       User.findOne({where: {id: req.params.userId}})
            .then((success) => res.json(`destroyed`))
            .catch(handleError);
   }
}
