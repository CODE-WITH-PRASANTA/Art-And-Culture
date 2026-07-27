import React from "react";
import AddtocartSection from "../../Components/AddtocartSection/AddtocartSection";
import Aboutothers from "../../Components/Aboutothers/Aboutothers";
import Thoughtfully from "../../Components/Thoughtfully/Thoughtfully";
import Youmight from "../../Components/Youmight/Youmight";
import CostumerReview from "../../Components/CostumerReview/CostumerReview";
import Recentlyview from "../../Components/Recentlyview/Recentlyview";

const PoojaDetails = () => {
  return (
    <>
      <AddtocartSection />
      <Aboutothers />
      <Thoughtfully/>
      <Youmight/>
      <CostumerReview/>
      <Recentlyview/>
    </>
  );
};

export default PoojaDetails;