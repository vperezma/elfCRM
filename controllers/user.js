const models = require('../models');
import path from 'path';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const User = models.user;
const Role = models.roles;

function handleError(err){
  return err;
}
 module.exports =  {

     getbyEmail: (req, res) => {
         User.findOne({where:{email: req.body.email}})
         .then((user)=>{
             const token = jwt.sign({user:user},"asdd",{expiresIn:'10h'});
              res.json({token:token});
            });
     },
   getAll: (req, res) => {
       User.findAll({include:[{model:Role}]})
        .then((users) => res.json(users))
        .catch(handleError);
   },
   getById: (req, res) => {
       User.findOne({where: {id: req.params.userId}, include: [{model: Role}]})
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
