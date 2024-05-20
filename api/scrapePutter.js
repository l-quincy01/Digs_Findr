const mongoose = require("mongoose");
const PlaceModel = require("./models/Place.js"); // Assuming placeModel.js is in the same directory
const pamgoldingCall = require("./pamgoldingCall.js");

const scrappedOutput = async () => {
  return pamgoldingCall(); // Ensure to await the result if pamgoldingCall() returns a promise
};
process.env.MONGO_URL =
  "mongodb+srv://lquincypitsi:lquincypitsi@cluster0.8mcrbbz.mongodb.net/";

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB database");

    const user_id_here = "001PamGolding"; // Replace with the actual user ID

    const scrappedData = (await scrappedOutput()).map((item) => {
      return {
        title: item.title,
        address: item.address, // Assuming address is available in scrapped data
        listedBy: "PamGolding",
        placeOffers: [],
        photos: item.images, // Use directly if `images` is an array of image names
        description: item.description,
        furnitureIncluded: [],
        preferredTenants: [],
        extraInfo: item.features.join("\n"),
        availability: item.availability,
        webRef: item.webRef,
        agentName: item.agentName,
        agentContact: item.agentContact,
        price: item.price
          ? parseInt(item.price.replace(",", ""), 10)
          : undefined,
      };
    });

    const insertedPlaces = await PlaceModel.insertMany(scrappedData);
    console.log("Inserted places:", insertedPlaces);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    mongoose.disconnect();
    console.log("Disconnected from MongoDB database");
  }
})();
