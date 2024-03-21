npm install

to run:  nodemon server.js

data structure for API: 

 Post resident
 
{
    "firstName": "Marju",
    "lastName": "Kuusik",
   "fullName": "Marju Kuusik",
   "permitNumber": 11,
    "dateOfBirth": "1999-05-02",
    "countryOfBirth": "Estonia",
    "email": "Marju.Kuusik@hotmail.com",
    "citizenShip": "EE",
    "gender": "Female",
    "address": "Rehe põik",
    "addressCountry": "Estonia",
    "addressCity": "Tallinn",
    "addressStreetAddress": "Rehe põik 3",
    "addressZipCode": "13445",
    "addressIsVerifiedAddress": true,
    "phoneNumber": "37245939393",
    "typeOfRegistration": "RESIDENCY",
    "typeOfRegistrationSub": "INTERNATIONAL",
    "industry": "CONSTRUCTION",
    "willWorkInPhysicalJurisdiction": true,
    "regulatoryElection": "something1",
    "regulatoryElectionSub": "something1",
    "firstRegistrationDate": "2022-12-02",
    "profilePicture": "pic",
    "status": "ACTIVE"
}

Post application 

{
   "residentSub": "65fb11dacc3ffc559b7d5f8b",
   "current": 
   {
    "WillWorkInPhysicalJurisdiction": false,
    "Industry": "LAW",
    "RegulatoryElection": "something2",
    "RegulatoryElectionSub": "something2"
   },
   "requested": {
    "WillWorkInPhysicalJurisdiction": true,
    "Industry": "MEDICINE",
    "RegulatoryElection": "something2",
    "RegulatoryElectionSub": "something2"
   },
    "status": "IN_REVIEW",
    "submittedAt": "1999-05-02",
    "decision": {
        "DecidedAt": "2002-05-06",
        "RejectionReason": "data"
    },
    "createdBy": "someone",
    "ObjectStatus": "DELETED"
}

