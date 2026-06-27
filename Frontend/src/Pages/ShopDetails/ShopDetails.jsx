import React from "react";
import "./ShopDetails.css";

import ShopDetailsHome from "../../Components/ShopDetailsHome/ShopDetailsHome";
import ShopDetailsAddToCart from "../../Components/ShopDetailsAddToCart/ShopDetailsAddToCart";
import ShopDetailsSwitchbar from "../../Components/ShopDetailsSwitchbar/ShopDetailsSwitchbar";
import ShopDetailsYoumight from "../../Components/ShopDetailsYoumight/ShopDetailsYoumight";
import ShopDetailsBread from "../../Components/ShopDetailsBread/ShopDetailsBread";


const ShopDetails = () => {
  return (
   <div className="shopDetailsPage">
  <ShopDetailsBread /> {/* Full Width */}

  <div className="shopDetailsPage__top">
    <div className="shopDetailsPage__left">
      <ShopDetailsHome />
    </div>

    <div className="shopDetailsPage__right">
      <ShopDetailsAddToCart />
    </div>
  </div>

  <div className="shopDetailsPage__bottom">
    <ShopDetailsSwitchbar />
    <ShopDetailsYoumight />
  </div>
</div>
  );
};

export default ShopDetails;