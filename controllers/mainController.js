const mongoose = require('mongoose');
//const residentData = mongoose.model('Resident');
const Resident = require('../models/resident');
const Application = require('../models/industryChangeApplication');
const bodyParser = require('body-parser');
const {ObjectId} = require("mongodb");
const applicationData = mongoose.model('Application');

exports.getMainPage = (req, res) => {
    res.send('Hello world')
};

exports.postResident = async (req, res) => {
    try {
        const resident = await Resident.create(req.body)
        res.status(200).json(resident);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
};

exports.getResident = async (req, res) => {
    try {
        const residents = await Resident.find({});

        res.status(200).json(residents);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
};

exports.postApplication = async (req, res) => {
    const residentsId = await Resident.findById(req.body.residentSub);
    if (residentsId) {
        const typeOfReg = residentsId.typeOfRegistration;
        const resStatus = residentsId.status;
        const residentId = residentsId._id;
        console.log("id: " + residentId);
        console.log("res status: " + resStatus);
        if (typeOfReg !== 'LIMITED_E_RESIDENCY' && resStatus !== 'INACTIVE') {
            try {
                const willWorkInPhysicalJurisdiction = residentsId.willWorkInPhysicalJurisdiction;
                const industry = residentsId.industry;
                const regulatoryElection = residentsId.regulatoryElection;
                const regulatoryElectionSub = residentsId.regulatoryElectionSub;

                const application = await Application.create(req.body);
                await Application.updateOne({residentSub: residentId},
                    {"$set": {'current.Industry': industry, 'current.WillWorkInPhysicalJurisdiction': willWorkInPhysicalJurisdiction, 'current.RegulatoryElection': regulatoryElection,
                        'current.RegulatoryElectionSub': regulatoryElectionSub }});

                res.status(200).json(application);
            } catch (error) {
                console.log(error.message);
                res.status(500).json({message: error.message})
            }
        } else {
            console.log(
                "Wrong type of residency or status " +
                resStatus + " " +
                typeOfReg
            );
        }
    } else {
        console.log("Ids did not match")
    }
};

exports.getAllApplications = async (req, res) => {
    try {
        const applications = await Application.find({});
        res.status(200).json(applications);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
}

exports.getApplicationById = async (req, res) => {
    try {
        const appById = await Application.findOne({'_id': req.params.id});
        const appStatus = appById.ObjectStatus;
        console.log("Application status: " + appStatus);
        if (appById && appStatus !== 'DELETED'){
            res.status(200).json(appById);
        } else {
            res.status(400).json({'error': 'not found'});
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
}

exports.getApplicationsByStatus = async (req, res) => {
    try {
        const applications = await Application.find({'ObjectStatus': req.params.status});
        res.status(200).json(applications);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
}

exports.deleteApplication = async (req, res) => {
    try {
        const application = await Application.findOne({'_id' : req.params.id});
        console.log(application);
        const appStatus = application.status;
        const objectStatus = application.ObjectStatus;
        console.log('app status: '+appStatus +'' + 'object status: ' + objectStatus);
        if (appStatus === 'IN_REVIEW' && objectStatus !== 'DELETED') {
            await Application.updateOne({'_id': req.params.id}, {"$set": {'ObjectStatus': 'DELETED'}})
            res.status(200).json(application);
        } else {
            console.log("something went wrong")
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
}
