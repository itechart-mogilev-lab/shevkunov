import React from "react";
import ProfileCompany from "./CompanyProfileComponent";
import ProfileUser from "./UserProfileComponent";

export default function Profile(props) {
	function renderProfile() {
		const { profile } = props;
		if (profile.role === "company") {
			return <ProfileCompany company={profile} />;
		} else {
			return <ProfileUser user={profile} />;
		}
	}
	return <div>{renderProfile()}</div>;
}
