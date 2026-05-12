import React from "react";
import "./ShopDetails.css";

import ShopDetailsHome from "../../Components/ShopDetailsHome/ShopDetailsHome";
import ShopDetailsAddToCart from "../../Components/ShopDetailsAddToCart/ShopDetailsAddToCart";
import ShopDetailsSwitchbar from "../../Components/ShopDetailsSwitchbar/ShopDetailsSwitchbar";
import ShopDetailsYoumight from "../../Components/ShopDetailsYoumight/ShopDetailsYoumight";
import ShopDetailsReviews from "../../Components/ShopDetailsReviews/ShopDetailsReviews";

const ShopDetails = () => {
  return (
    <div className="shopDetailsPage">

      {/* TOP SECTION */}

      <div className="shopDetailsPage__top">

        {/* LEFT */}

        <div className="poojaDetailsPage__left">
          <ShopDetailsHome />
        </div>

        {/* RIGHT */}
        <div className="poojaDetailsPage__right">
          <ShopDetailsAddToCart />
        </div>

      </div>

      {/* BOTTOM */}

      <div className="shopDetailsPage__bottom">

        <div className="shopDetailsPage__section">
          <ShopDetailsSwitchbar />
        </div>

        <div className="shopDetailsPage__section">
          <ShopDetailsYoumight />
        </div>

        <div className="shopDetailsPage__section">
          <ShopDetailsReviews />
        </div>

      </div>

    </div>
  );
};

export default ShopDetails;