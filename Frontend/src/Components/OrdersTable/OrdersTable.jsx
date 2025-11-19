import React from "react";
import "./OrdersTable.css";

const OrdersTable = () => {
  const orders = [
    {
      id: "TBT15454841",
      img: "/img1.png",
      name: "World's Most Expensive T Shirt",
      category: "Women's Clothes",
      date: "01 Jul, 2022",
      amount: "$287.53",
      status: "delivered",
    },
    {
      id: "TBT15425012",
      img: "/img2.png",
      name: "Onyx SmartGRID Chair Red",
      category: "Furniture & Decor",
      date: "01 Feb, 2023",
      amount: "$39.99",
      status: "shipping",
    },
    {
      id: "TBT1524563",
      img: "/img3.png",
      name: "Slippers Open Toe",
      category: "Footwear",
      date: "09 Dec, 2022",
      amount: "$874.00",
      status: "failed",
    },
    {
      id: "TBT1524530",
      img: "/img4.png",
      name: "Hp Trendsetter Backpack",
      category: "Handbags & Clutches",
      date: "02 Jan, 2023",
      amount: "$32.00",
      status: "delivered",
    },
    {
      id: "TBT13642870",
      img: "/img5.png",
      name: "Innovative education book",
      category: "Books",
      date: "08 Jan, 2023",
      amount: "$18.32",
      status: "pending",
    },
  ];

  return (
    <div className="orderstable-container">

      <div className="orderstable-wrapper">
        <table className="orderstable-table">
          <thead className="orderstable-header">
            <tr>
              <th>Order ID</th>
              <th>Product</th>
              <th>Date</th>
              <th>Total Amount</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, i) => (
              <tr key={i} className="orderstable-row">
                <td>{order.id}</td>

                <td>
                  <div className="orderstable-product">
                    <img src={order.img} alt="" className="orderstable-thumb" />
                    <div>
                      <div className="orderstable-primary">{order.name}</div>
                      <div className="orderstable-secondary">
                        {order.category}
                      </div>
                    </div>
                  </div>
                </td>

                <td>{order.date}</td>
                <td>{order.amount}</td>

                <td>
                  <span
                    className={`orderstable-status ${order.status}`}
                  >
                    {order.status === "delivered" && "Delivered"}
                    {order.status === "shipping" && "Shipping"}
                    {order.status === "failed" && "Out Of Delivery"}
                    {order.status === "pending" && "Pending"}
                  </span>
                </td>

                <td>
                  <button className="orderstable-invoice-btn">Invoice</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* OUTSIDE FIXED FOOTER BUTTON */}
      <div className="orderstable-footer">
        <button className="orderstable-shop-btn">
          Continue Shopping →
        </button>
      </div>
    </div>
  );
};

export default OrdersTable;
