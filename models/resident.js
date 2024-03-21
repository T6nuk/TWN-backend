const mongoose = require('mongoose');
const {ObjectId} = require("mongodb");
const Application = require('../models/industryChangeApplication');

const Schema = mongoose.Schema;

const residentSchema = new Schema({

    sub: Schema.Types.ObjectId,

    firstName: {
        type: String,
        required: [true, "please enter a first name"]
    },
    lastName: {
        type: String,
        required: [true, "please enter a last name"]
    },
    fullName: {
        type: String,
        required: [true]
    },
    permitNumber: {
        type: Number,
        required: [true]
    },
    permitNumberQrCode: {
      type: String
    },
    dateOfBirth: {
        type: Date,
        required: [true]
    },
    countryOfBirth: {
        type: String,
        required: [true]
    },
    email: {
        type: String,
        required: [true]
    },
    citizenShip: {
        type: String,
        required: [true]
    },
    gender: {
        type: String,
        required: [true]
    },
    address: {
        type: Object,
        required: [true]
    },
    addressCountry: {
        type: String,
        required: [true]
    },
    addressCity: {
        type: String,
        required: [true]
    },
    addressState: {
        type: String,
        required: [false]
    },
    addressStreetAddress: {
        type: String,
        required: [true]
    },
    addressZipCode: {
        type: String,
        required: [true]
    },
    addressIsVerifiedAddress: {
        type: Boolean,
        required: [true]
    },
    phoneNumber: {
        type: String,
        required: [true]
    },
    typeOfRegistration: {
        type: String,
        enum: ['E_RESIDENCY', 'RESIDENCY', 'LIMITED_E_RESIDENCY'],
        required: [true]
    },
    typeOfRegistrationSub: {
        type: String,
        enum: ['HONDURAN', 'INTERNATIONAL'],
        required: [false]
    },
    industry: {
        type: String,
        enum: ['MEDICINE', 'CONSTRUCTION', 'LAW'],
        required: [false]
    },
    willWorkInPhysicalJurisdiction: {
        type: Boolean,
        required: [true]
    },
    regulatoryElection: {
        type: String,
        enum: ['something1', 'something2'],
        required: [false]
    },
    regulatoryElectionSub: {
        type: String,
        required: [false]
    },
    firstRegistrationDate: {
        type: Date,
        required: [true]
    },
    profilePicture: {
        type: String,
        required: [true]
    },
    status: {
        type: String,
        enum: ['ACTIVE', 'INACTIVE'],
        required: [true]
    },
    residencyEndDate: {
        type: Date,
        required: [false]
    },
    applications: [{
        type: Schema.Types.ObjectId, ref: 'Application'
    }],
},
    {timestamps: true},
    );


mongoose.model('resident', residentSchema);
module.exports = mongoose.model('Resident', residentSchema);