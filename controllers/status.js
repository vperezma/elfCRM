const models = require('../models');
import path from 'path';
const Status = models.status;
function handleError(err){
  return err;
}
 module.exports =  {
   getAll: (req, res) => {
       Status.findAll({})
        .then((status) => res.json(status))
        .catch(handleError);
   },
   getById: (req, res) => {
       Status.findOne({where: {id: req.params.statusId}})
            .then((status) => res.json(status))
            .catch(handleError);
   },
   create: (req, res) => {
       const newStatus = req.body;

       Status.create(newStatus)
            .then((status) => {
                res.json(status);
            })
            .catch(handleError);
       
   },
   update: (req, res) => {
       Status.findOne({where: {id: req.params.StatusId}})
            .then((StatusFound) => {
                StatusFound.update(req.body)
                    .then((updatedStatus) => res.json(updatedStatus))
                    .catch(handleError);
            })
            .catch(handleError);
   },
   destroy: (req, res) => {
       Status.destroy({where: {id: req.params.statusId}})
            .then((success) => res.json(`destroyed`))
            .catch(handleError);
   }
}
