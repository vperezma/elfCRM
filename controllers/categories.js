const models = require('../models');
import path from 'path';
const categories = models.categories;
function handleError(err){
  return err;
}
 module.exports =  {
   getAll: (req, res) => {
       categories.findAll({})
        .then((categories) => res.json(categories))
        .catch(handleError);
   },
   getById: (req, res) => {
       categories.findOne({where: {id: req.params.categoriesId}})
            .then((categories) => res.json(categories))
            .catch(handleError);
   },
   create: (req, res) => {
       const newcategories = req.body;

       categories.create(newcategories)
            .then((categories) => {
                res.json(categories);
            })
            .catch(handleError);
       
   },
   update: (req, res) => {
       categories.findOne({where: {id: req.params.categoriesId}})
            .then((categoriesFound) => {
                categoriesFound.update(req.body)
                    .then((updatedcategories) => res.json(updatedcategories))
                    .catch(handleError);
            })
            .catch(handleError);
   },
   destroy: (req, res) => {
       categories.destroy({where: {id: req.params.categoriesId}})
            .then((success) => res.json(`destroyed`))
            .catch(handleError);
   }
}
