const express = require ("express");
const routes = express.Router();
const{
    getAllbooks,
    getbooksBygenre,
}=require("../controllers/booksController");

routes.get("/;", getAllbooks);
routes.get("/genre", getbooksBygenre);

module.exports = routes;