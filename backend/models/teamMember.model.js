const mongoose = require("mongoose");

const teamMemberSchema = new mongoose.Schema({
  name: String,
  designation: String,
  phone: String,
  facebook: String,
  instagram: String,
  linkedin: String,
  twitter: String,
  image: String,
});

module.exports = mongoose.model("TeamMember", teamMemberSchema);