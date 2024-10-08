const mongoose = require('mongoose');
const New_Registration_Schema = new mongoose.Schema({
    Name: {
        type: String
    },

    Father_Name: {
        type: String
    },

    Village: {
        type: String
    },

    Post: {
        type: String
    },

    PS: {
        type: String
    },

    Dist: {
        type: String
    },

    Pin: {
        type: String
    },

    DOB: {
        type: String
    },




    L_Name: {
        type: String
    },

    L_Father_Name: {
        type: String
    },

    L_Village: {
        type: String
    },

    L_Post: {
        type: String
    },

    L_PS: {
        type: String
    },

    L_Dist: {
        type: String
    },

    L_Pin: {
        type: String
    },

    L_DOB: {
        type: String
    },



    MD: {
        type: String
    },


    RD: {
        type: String
    },

    MP: {
        type: String
    },

    Mohor: {
        type: String
    },

    Page_No: {
        type: String
    },

    Vol_No: {
        type: String
    },


});


const New_Registration_Model = mongoose.model('New_Registration_Model', New_Registration_Schema);
module.exports = New_Registration_Model