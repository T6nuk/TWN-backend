const express = require('express');
const mainController = require('../controllers/mainController');
const router = express.Router({mergeParams: true});

router.get('/', mainController.getMainPage);
router.post('/resident', mainController.postResident);
router.get('/resident', mainController.getResident);

router.post('/application', mainController.postApplication);
router.get('/applications', mainController.getAllApplications);
router.get('/applications/:status', mainController.getApplications);
router.get('/application/:id', mainController.getApplicationById);
router.delete('/application/delete/:id', mainController.deleteApplication);

module.exports = router;