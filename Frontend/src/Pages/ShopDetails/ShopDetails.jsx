import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api/axios";

import "./ShopDetails.css";

import ShopDetailsBread from "../../Components/ShopDetailsBread/ShopDetailsBread";
import ShopDetailsHome from "../../Components/ShopDetailsHome/ShopDetailsHome";
import ShopDetailsAddToCart from "../../Components/ShopDetailsAddToCart/ShopDetailsAddToCart";
import ShopDetailsSwitchbar from "../../Components/ShopDetailsSwitchbar/ShopDetailsSwitchbar";
import ShopDetailsYoumight from "../../Components/ShopDetailsYoumight/ShopDetailsYoumight";

const ShopDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await API.get(`/shopview/${id}`);

        console.log("SHOP DETAILS API:", res.data);

        if (res.data.success && isMounted) {
          setProduct(res.data.data);
        }
      } catch (error) {
        console.error(
          "PRODUCT FETCH ERROR:",
          error.response?.data || error.message
        );
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    if (id) {
      fetchProduct();
    }

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) {
    return <h2 className="shopdetails-loading">Loading Product...</h2>;
  }

  if (!product) {
    return <h2 className="shopdetails-loading">Product Not Found</h2>;
  }

  return (
    <div className="shopDetailsPage">
      <ShopDetailsBread product={product} />

      <div className="shopDetailsPage__top">
        <div className="shopDetailsPage__left">
          <ShopDetailsHome product={product} />
        </div>

        <div className="shopDetailsPage__right">
          <ShopDetailsAddToCart product={product} />
        </div>
      </div>

      <div className="shopDetailsPage__bottom">
        <ShopDetailsSwitchbar />
        
        {/* FIX: Changed from 'product={product}' to 'productId' to match the child component */}
        <ShopDetailsYoumight productId={product._id || id} />
      </div>
    </div>
  );
};

export default ShopDetails;