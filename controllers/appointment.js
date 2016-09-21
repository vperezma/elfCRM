const models = require('../models');
import path from 'path';
const Appointments = models.appointment;
function handleError(err){
  return err;
}
 module.exports =  {
   getAll: (req, res) => {
       Appointments.findAll({})
        .then((appointments) => res.json(appointments))
        .catch(handleError);
   },
   getById: (req, res) => {
       Appointments.findOne({where: {id: req.params.appointmentsId}})
            .then((appointments) => res.json(appointments))
            .catch(handleError);
   },
   create: (req, res) => {
       const newAppointments = req.body;

       Appointments.create(newAppointments)
            .then((appointments) => {
                res.json(appointments);
            })
            .catch(handleError);
       
   },
   update: (req, res) => {
       Appointments.findOne({where: {id: req.params.appointmentsId}})
            .then((appointmentsFound) => {
                appointmentsFound.update(req.body)
                    .then((updatedappointments) => res.json(updatedappointments))
                    .catch(handleError);
            })
            .catch(handleError);
   },
   destroy: (req, res) => {
       Appointments.destroy({where: {id: req.params.appointmentsId}})
            .then((success) => res.json(`destroyed`))
            .catch(handleError);
   }
}
