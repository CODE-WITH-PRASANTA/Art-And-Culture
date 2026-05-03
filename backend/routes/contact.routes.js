const express = require("express");

const router = express.Router();

const {
  createContact,
  getAllContacts,
  getSingleContact,
  deleteContact,
} = require("../controllers/contact.controller");

/* CREATE */
router.post("/", createContact);

/* GET ALL */
router.get("/", getAllContacts);

/* GET SINGLE */
router.get("/:id", getSingleContact);

/* DELETE */
router.delete("/:id", deleteContact);

module.exports = router;