const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: String,
    address: String,
    listedBy: String,
    propertyType: String,
    placeOffers: [String],
    photos: [String],
    description: String,
    agentName: String,
    agentContact: String,
    availability: String,
    webRef: String,
    propertyFeatures: String,
    furnitureIncluded: [String],
    preferredTenants: [String],
    extraInfo: String,
    price: Number,
  },
  { strict: false }
);

const PlaceModel = mongoose.model("Place", placeSchema);

module.exports = PlaceModel;
