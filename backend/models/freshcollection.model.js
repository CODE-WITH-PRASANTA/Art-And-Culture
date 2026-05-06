// models/freshcollection.model.js

const mongoose = require("mongoose");

const freshCollectionSchema =
  new mongoose.Schema(
    {
      image: {
        type: String,
        required: true,
      },

      title: {
        type: String,
        required: true,
      },

      desc: {
        type: String,
        required: true,
      },

      link: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model(
  "FreshCollection",
  freshCollectionSchema
);