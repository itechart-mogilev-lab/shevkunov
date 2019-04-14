const jwt = require("jsonwebtoken");
const config = require("../../config/environment");
const Company = require("../../models/company.model");
const usersStatus = require("../../enums/users.status.enum");

async function getCompanies({ service, companyName, sort, city }) {
  switch (sort) {
    case "price_asc":
      sort = "price";
      break;
    case "price_desc":
      sort = "-price";
      break;
    case "rating_asc":
      sort = "rating";
      break;
    case "rating_desc":
      sort = "-rating";
      break;
    case "popularity_asc":
      sort = "popularity";
      break;
    case "popularity_desc":
      sort = "-popularity";
      break;
    default:
      sort = "";
  }
  const options = {
    // page: parseInt(page, 10) || 1,
    page: 1,
    // limit: parseInt(perPage, 10) || 10,
    limit: 10,
    select: "name address rating services workPlan rooms price popularity",
    sort: `${sort}`
  };
  const query = {};
  query.status = { $eq: usersStatus.Verified };
  (query["adress.city"] = city),
    (query.name = companyName),
    (query["services.name"] = service);
  const companies = await Company.paginate(query, options);
  return companies;
}

module.exports = {
  getCompanies
};
