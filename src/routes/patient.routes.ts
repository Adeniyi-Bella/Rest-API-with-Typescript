import { Router } from 'express';
import { createPatient, deletePatient, getPatient, getPatients, updatePatient } from '../controller/patient.controller';

const patientRoutes = Router();

// define the routes and methods for the patient controller 
patientRoutes.route('/')
    // if it is a get request, call the getPatients controller
    .get(getPatients)
    // if it is a post request, call the createPatient controller
    .post(createPatient);

patientRoutes.route('/:patientId')
    .get(getPatient)
    .put(updatePatient)
    .delete(deletePatient);

export default patientRoutes;