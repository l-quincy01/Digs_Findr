const puppeteer = require("puppeteer");
const imageDownloader = require("image-downloader");

const pamgoldingScrapper = async (url, allElementsSelector, titleSelector) => {
  const browser = await puppeteer.launch({
    executablePath: "/opt/homebrew/bin/chromium",
  });
  const page = await browser.newPage();

  try {
    await page.goto(url);

    const allArticles = await page.evaluate(
      (allElementsSelector, titleSelector) => {
        const articles = document.querySelectorAll(allElementsSelector);

        return Array.from(articles).map((article) => {
          const imagesArray = article.querySelectorAll(".owl-lazy");
          const images = Array.from(imagesArray)
            .splice(0, 5)
            .map((item) => item.getAttribute("data-src"));

          const pTagArray = article.querySelectorAll(
            ".f_column.left_column section p"
          );
          const pTags = Array.from(pTagArray).map((item) => item.textContent);

          const description = String(pTags[4]).trim();

          const title = article.querySelector(titleSelector).textContent;
          const featureListItems =
            article.querySelectorAll(".featureStrings li");
          const features = Array.from(featureListItems).map(
            (item) => item.textContent
          );

          const f_row = article.querySelectorAll(".f_row .f_col");

          const f_col = Array.from(f_row).map((item) => item.textContent);

          const availability = String(f_col[1]).trim();

          function extractPrice(priceText) {
            const regex = /(\d+,\d+|\d+)/g;
            let match = priceText.match(regex);
            if (match) {
              return match[0];
            } else {
              return "No price found";
            }
          }

          const price = extractPrice(
            article.querySelector(".totalVal").textContent
          );
          const webRef = article.querySelector(
            ".propertyInfo #webreference"
          ).textContent;

          const agentName =
            article.querySelector(".agentcontainer h5").textContent;
          const agentContact = article.querySelector(
            ".featureNumbers span"
          ).textContent;

          return {
            title,
            images,
            features,
            price,
            agentName,
            agentContact,
            availability,
            webRef,
            description,
          };
        });
      },
      allElementsSelector,
      titleSelector
    );

    for (let i = 0; i < allArticles.length; i++) {
      const article = allArticles[i];
      const images = article.images;
      const downloadedImages = [];
      for (let j = 0; j < images.length; j++) {
        try {
          const imageUrl = images[j];
          const imageName = `${Date.now()}_${i}_${j}.jpg`; // Unique image name
          await imageDownloader.image({
            url: imageUrl,
            dest: __dirname + "/uploads/" + imageName,
          });
          downloadedImages.push(imageName);

          console.log(imageUrl + " __ " + imageName);
        } catch (error) {
          console.error("Error downloading image:", error);
        }
      }
      article.images = downloadedImages; // Replace image URLs with image names
    }

    return allArticles;
  } catch (error) {
    console.error("Error during scraping:", error);
    return []; // Return an empty array if there's an error
  } finally {
    await browser.close();
  }
};

module.exports = pamgoldingScrapper;
