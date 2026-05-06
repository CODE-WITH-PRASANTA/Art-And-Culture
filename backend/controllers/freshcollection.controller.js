// controllers/freshcollection.controller.js

const FreshCollection = require(
  "../models/freshcollection.model"
);

/* =====================================================
   CREATE
===================================================== */

exports.createFreshCollection = async (
  req,
  res
) => {
  try {
    console.log("BODY :", req.body);
    console.log("FILE :", req.file);

    const { title, desc, link } = req.body;

    if (!title || !desc || !link) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    const image =
      "/uploads/freshcollection/" +
      req.file.filename;

    const newCollection =
      await FreshCollection.create({
        image,
        title,
        desc,
        link,
      });

    return res.status(201).json({
      success: true,
      message:
        "Fresh Collection Created Successfully",
      data: newCollection,
    });
  } catch (error) {
    console.log(
      "CREATE COLLECTION ERROR :",
      error
    );

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* =====================================================
   GET ALL
===================================================== */

exports.getFreshCollections = async (
  req,
  res
) => {
  try {
    const collections =
      await FreshCollection.find().sort({
        createdAt: -1,
      });

    return res.status(200).json({
      success: true,
      data: collections,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* =====================================================
   GET SINGLE
===================================================== */

exports.getSingleFreshCollection =
  async (req, res) => {
    try {
      const collection =
        await FreshCollection.findById(
          req.params.id
        );

      if (!collection) {
        return res.status(404).json({
          success: false,
          message: "Collection not found",
        });
      }

      return res.status(200).json({
        success: true,
        data: collection,
      });
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

/* =====================================================
   UPDATE
===================================================== */

exports.updateFreshCollection = async (
  req,
  res
) => {
  try {
    const { title, desc, link } = req.body;

    const collection =
      await FreshCollection.findById(
        req.params.id
      );

    if (!collection) {
      return res.status(404).json({
        success: false,
        message: "Collection not found",
      });
    }

    let image = collection.image;

    if (req.file) {
      image =
        "/uploads/freshcollection/" +
        req.file.filename;
    }

    const updatedCollection =
      await FreshCollection.findByIdAndUpdate(
        req.params.id,
        {
          image,
          title,
          desc,
          link,
        },
        {
          new: true,
        }
      );

    return res.status(200).json({
      success: true,
      message: "Updated Successfully",
      data: updatedCollection,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/* =====================================================
   DELETE
===================================================== */

exports.deleteFreshCollection = async (
  req,
  res
) => {
  try {
    await FreshCollection.findByIdAndDelete(
      req.params.id
    );

    return res.status(200).json({
      success: true,
      message: "Deleted Successfully",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};