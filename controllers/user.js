const models = require('../models');
import path from 'path';
import bcrypt from 'bcrypt';
const User = models.user;
const Role = models.roles;

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
                return Role.findOne({where:{id: req.body.roleId}})
                    .then((role) => {
                        return role.addUser(user)
                            .then(() => {
                                return User.findOne({where:{id:user.id},
                                        include: [{model:Role}]})
                                    .then((result) => {
                                        res.json(result);
                                    })
                                    .catch(handleError);
                            })
                            .catch(handleError);
                    })
                    .catch(handleError);
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
       User.destroy({where: {id: req.params.userId}})
            .then((success) => res.json(`destroyed`))
            .catch(handleError);
   }
}
