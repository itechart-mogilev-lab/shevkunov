const Review = require("../../models").review;
const { middleRatting } = require("../../config/pricingFunction");
const Company = require("../../models").company;

async function createReview(customerId, { ratting, reviewText, company }) {
  try {
    const review = await new Review({
      ratting,
      reviewText,
      customer: customerId,
      company
    }).save();
    const reviews = await Review.find({ company });
    const rattingCompany = middleRatting(reviews);
    await Company.updateOne(
      { _id: company },
      { $set: { ratting: rattingCompany } }
    );
    return review;
  } catch {
    return false;
  }
}
