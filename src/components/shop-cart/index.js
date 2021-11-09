import React from "react";
// import s from './style.module.css'



const ShopCartTable = () => {
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <th className="col">#</th>
          <th className="col">Item</th>
          <th className="col">Count</th>
          <th className="col">Price</th>
          <th className="col">Action</th>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Site Reliability Engineering</td>
            <td>2</td>
            <td>$40</td>
            <td>
              <button className="btn btn-outline-danger btn-sm right">
                <i class="bi bi-file-minus"/>
              </button>
              <button className="btn btn-outline-success btn-sm right">
                <i class="bi bi-file-plus"/>
              </button>
              <button className="btn btn-outline-warning btn-sm right">
                <i class="bi bi-trash"/>
              </button>
              


            </td>
          </tr>
        </tbody>
      </table>

      <div className="total">
        Total: $201
      </div>
    </div>
  );
};

export default ShopCartTable;
