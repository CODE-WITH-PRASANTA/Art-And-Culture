const express = require("express");
const router = express.Router();

const {
  createContact,
  getContacts,
  deleteContact,
} = require("../controllers/contact.controller");

/* FRONTEND: Submit contact form */
router.post("/", createContact);

/* ADMIN: Get all contacts (with search + pagination) */
router.get("/", getContacts);

/* ADMIN: Delete contact */
router.delete("/:id", deleteContact);

module.exports = router;