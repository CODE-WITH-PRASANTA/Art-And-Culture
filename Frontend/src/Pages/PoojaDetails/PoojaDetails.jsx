import React from "react";
import "./PoojaDetails.css";

import PoojaDetailsHome from "../../Components/PoojaDetailsHome/PoojaDetailsHome";
import AddtocartSection from "../../Components/AddtocartSection/AddtocartSection";
import Switchbar from "../../Components/Switchbar/Switchbar";
import Youmight from "../../Components/Youmight/Youmight";
import Review from "../../Components/Review/Review";
import AddNow from "../../Components/AddNow/AddNow";
import CustomerReviews from "../../Components/CustomerReviews/CustomerReviews";

const PoojaDetails = () => {
  return (
    <div className="poojaDetailsPage">

      {/* TOP SECTION */}

      <div className="poojaDetailsPage__top">

        {/* LEFT */}

        <div className="poojaDetailsPage__left">
          <PoojaDetailsHome />
        </div>

        {/* RIGHT */}
        <div className="poojaDetailsPage__right">
          <AddtocartSection />
        </div>

      </div>

      {/* BOTTOM */}

      <div className="poojaDetailsPage__bottom">

        <div className="poojaDetailsPage__section">
          <Switchbar />
        </div>

        <div className="poojaDetailsPage__section">
          <Youmight />
        </div>

        <div className="poojaDetailsPage__section">
          <Review />
        </div>
      <AddNow />
      <CustomerReviews />
      </div>

    </div>
  );
};

export default PoojaDetails;