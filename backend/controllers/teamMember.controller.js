const TeamMember = require("../models/teamMember.model");

exports.createMember = async (req, res) => {
  try {
    const newMember = new TeamMember({
      ...req.body,
      image: req.file?.filename,
    });

    await newMember.save();
    res.status(201).json(newMember);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMembers = async (req, res) => {
  const members = await TeamMember.find();
  res.json(members);
};

exports.deleteMember = async (req, res) => {
  await TeamMember.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

exports.updateMember = async (req, res) => {
  const updated = await TeamMember.findByIdAndUpdate(
    req.params.id,
    {
      ...req.body,
      ...(req.file && { image: req.file.filename }),
    },
    { new: true }
  );

  res.json(updated);
};