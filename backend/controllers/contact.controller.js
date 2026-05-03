const Contact = require("../models/contact.model");

/* =========================================
   CREATE CONTACT
========================================= */

const createContact = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      message,
    } = req.body;

    /* VALIDATION */

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !message
    ) {
      return res.status(400).json({
        success: false,
        message: "Please fill all fields",
      });
    }

    /* CREATE NEW CONTACT */

    const newContact = await Contact.create({
      firstName,
      lastName,
      email,
      phone,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: newContact,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

/* =========================================
   GET ALL CONTACTS
========================================= */

const getAllContacts = async (req, res) => {
  try {

    const contacts = await Contact.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      total: contacts.length,
      data: contacts,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

/* =========================================
   GET SINGLE CONTACT
========================================= */

const getSingleContact = async (req, res) => {
  try {

    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    res.status(200).json({
      success: true,
      data: contact,
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

/* =========================================
   DELETE CONTACT
========================================= */

const deleteContact = async (req, res) => {
  try {

    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    await contact.deleteOne();

    res.status(200).json({
      success: true,
      message: "Contact deleted successfully",
    });

  } catch (error) {
    console.log(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  createContact,
  getAllContacts,
  getSingleContact,
  deleteContact,
};