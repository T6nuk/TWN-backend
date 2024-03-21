const mongoose = require('mongoose');
const Resident = require('../models/resident');

const Schema = mongoose.Schema;

const applicationSchema = new Schema({

    residentSub: {
        type: Schema.Types.ObjectId,
        ref: 'Resident',
        required: true,
        unique: true,
    },
    current: {
        type: Object,
        required: true,

        WillWorkInPhysicalJurisdiction: {
            type: Boolean,
            required: true
        },
        Industry: {
            type: String,
            enum: [''],
            required: false
        },
        RegulatoryElection: {
            type: String,
            enum: [''],
            required: false
        },
        RegulatoryElectionSub: {
            type: String,
            required: false
        },
    },
    requested: {
        type: Object,
        required: true,

        WillWorkInPhysicalJurisdiction: {
            type: Boolean,
            required: true
        },
        Industry: {
            type: String,
            enum: [''],
            required: false
        },
        RegulatoryElection: {
            type: String,
            enum: [''],
            required: false
        },
        RegulatoryElectionSub: {
            type: String,
            required: false
        },
    },
    status: {
        type: String,
        enum: ['IN_REVIEW', 'APPROVED', 'REJECTED'],
        required: true
    },
    submittedAt: {
        type: Date,
        required: false
    },
    decision: {
        type: Object,
        required: false,

        DecidedAt: {
            type: Date,
            required: false
        },
        RejectionReason: {
            type: String,
            required: false
        },
    },
    createdBy: {
        type: String
    },
    ObjectStatus: {
        type: String,
        enum: ['CURRENT', 'DELETED'],
        required: true
    },
},
    {timestamps: true}
);


mongoose.model('application', applicationSchema);
module.exports = mongoose.model('Application', applicationSchema);