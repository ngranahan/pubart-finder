import axios from "axios";

export default {
    // Gets all books
    getUser: function () {
        return axios.get("/auth/check");
    },
    loginUser: function (loginData) {
        return axios.post("/auth/login/", loginData);
    },
    // Saves a book to the database
    registerUser: function (registerData) {
        return axios.post("/auth/register", registerData);
    },
    logoutUser: function () {
        return axios.get("/auth/logout/");
    },
    // Function calls artwork api with a given id to get artwork data then store to database
    callAPI: function () {
        return axios.get("/art/callapi");
    },
    getArt: function () {
        console.log("getArt function called");
        return axios.get("/art/getart");
    },
    getSpecificArt: function (id) {
        console.log("getSpecificArt function called");
        return axios.get("/artwork/" + id);
    },
    addCollections: function (imageId) {
    //    console.log(" get collections ");
    //    console.log("PARAMETER IN UTILS: ", imageId)
       var pictureId = {
           id:imageId
       };
       return axios.post("/add/collections", pictureId);
    },

    findUserId: function (userId) {
        console.log(" find user id ");
        console.log("FrontEnd user id:", userId);
        var User = {
            id:userId
        };
        return axios.get("/get/id", userId);
     }
};