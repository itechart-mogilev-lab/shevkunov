const Review = require("../../models/review.model");
const { averageRating } = require("../../services/price.service");
const Company = require("../../models/company.model");

async function createReview(customerId, { rating, reviewText, company }) {
  try {
    const review = await new Review({
      rating,
      reviewText,
      customer: customerId,
      company
    }).save();
    const reviews = await Review.find({ company });
    const rattingCompany = averageRating(reviews);
    await Company.updateOne(
    { _id: company },
    { $set: { ratting: rattingCompany } }
    );
    return review;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
async function getReviews(id, { page }) {
  const options = {
    page: parseInt(page, 10) || 1,
    limit: 5,
    populate: [
      { path: "customer", select: "name surname email phone" },
      { path: "company", select: "name email" }
    ],
    sort: "-updated_at"
  };
  const query = {
    $or: [{ company: id }, { customer: id }]
  };
  const reviews = await Review.paginate(query, options);
  return reviews;
}

module.exports = {
  createReview,
  getReviews
};
