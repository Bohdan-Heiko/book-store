import React from "react";
import { connect } from "react-redux";
// import s from './style.module.css'



const ShopCartTable = ({items, total, onIncrement, onDecrement, onDelete}) => {
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th className="col">#</th>
            <th className="col">Title</th>
            <th className="col">Count</th>
            <th className="col">Price</th>
            <th className="col">Action</th>
          </tr>
          
        </thead>

        <tbody>
          {
            items.map((item, idx) => {
                const {id, title, count, total} = item
              return (
                <tr key={id}>
                  <td>{idx+1}</td>
                  <td>{title}</td>
                  <td>{count}</td>
                  <td>{total}$</td>
                  <td>
                    <button onClick={() => onDecrement(id)}
                      className="btn btn-outline-danger btn-sm right">
                      <i className="bi bi-file-minus" />
                    </button>
                    <button onClick={() => onIncrement(id)}
                      className="btn btn-outline-success btn-sm right">
                      <i className="bi bi-file-plus" />
                    </button>
                    <button onClick={() => onDelete(id)}
                      className="btn btn-outline-warning btn-sm right">
                      <i className="bi bi-trash" />
                    </button>
                  </td>
                </tr>
              )
            })
         }
        </tbody>
      </table>

      <div className="total">
        Total: {total}
      </div>
    </div>
  );
};


const mapStateToProps = ({ cartItems, orderTotal}) => {
  
  return {
    items: cartItems,
    total: orderTotal
  }
}

const mapDispatchToProps = () => {

  return {
    onIncrement: (id) => {
      console.log(`inc ${id}`);
    },
    onDecrement: (id) => {
      console.log(`dec ${id}`);
    },
    onDelete: (id) => {
      console.log(`del ${id}`);

    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopCartTable);
