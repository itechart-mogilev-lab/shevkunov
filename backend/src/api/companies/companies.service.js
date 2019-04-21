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
  (query["address.city"] = city || { $regex: "" }),
    (query.name = { $regex: companyName || "" }),
    (query["services.name"] = service || { $regex: "" });
  const companies = await Company.paginate(query, options);
  return companies;
}

async function getCompanyById(_id) {
  try {
    return await Company.findById(_id);
  } catch (err) {
    throw err;
  }
}

async function editCompanyProfile(_id, { data }) {
  return await Company.findByIdAndUpdate(_id, {
    $set: {
      username: data.username,
      email: data.email,
      phoneNumber: data.phoneNumber
    }
  });
}

async function block({ reason, blocked }, _id) {
  if (blocked) {
    const company = await Company.findByIdAndUpdate(_id, {
      $set: { status: userStatus.Blocked, block_comment: `${reason}` }
    });
    Company.findById(_id, function(err, company) {
      mailService.gmailSend(
        company.email,
        mailForBlocked(company.name, reason)
      );
    });
  } else {
    const company = await Company.findByIdAndUpdate(_id, {
      $set: { status: userStatus.Verified }
    });
    Company.findById(_id, function(err, company) {
      mailService.gmailSend(company.email, mailForUnblocked(company.username));
    });
  }
  return true;
}

module.exports = {
  getCompanies,
  editCompanyProfile,
  getCompanyById,
  block
};
