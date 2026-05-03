const express = require("express");

const router = express.Router();

const {
  createContact,
  getAllContacts,
  getSingleContact,
  deleteContact,
} = require("../controllers/contact.controller");

/* =========================================
   ROUTES
========================================= */

/* CREATE CONTACT */
router.post("/", createContact);

/* GET ALL CONTACTS */
router.get("/", getAllContacts);

/* GET SINGLE CONTACT */
router.get("/:id", getSingleContact);

/* DELETE CONTACT */
router.delete("/:id", deleteContact);

module.exports = router;