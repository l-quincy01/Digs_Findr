// const pamgoldingScrapper = require("./pamgoldingScrapper");
// const url =
//   "https://www.pamgolding.co.za/property-details/1-bedroom-bachelor-apartment-to-rent-sunnyside-grahamstown-makhanda/1gc1652811";

// const pamgoldingCall = async () => {
//   pamgoldingScrapper(url, ".siteWrapper", "#location-text");
// };
// module.exports = pamgoldingCall;

const pamgoldingScrapper = require("./pamgoldingScrapper");

const pamgoldingCall = async () => {
  const url =
    "https://www.pamgolding.co.za/property-details/3-bedroom-house-to-rent-port-alfred/1pf1651918";
  const allElementsSelector = ".siteWrapper";
  const titleSelector = "#location-text";

  return await pamgoldingScrapper(url, allElementsSelector, titleSelector);
};

module.exports = pamgoldingCall;
