import React from "react";

import "./ExpenseItem.css";

function ExpenseItem() {
    return ( 
        <div >
      <div className="expense-item">
        <div>July 2022</div>
        <div className="expense-item__description">
          <h2>Car Insurance</h2>
          <div className="expense-item__price">$313</div>
        </div>
        
      </div>

<div className="expense-item">
<div>June 2022</div>
<div className="expense-item__description">
  <h2>Phone Insurance</h2>
  <div className="expense-item__price">$13</div>
</div>

</div>
</div>
    )
  }
  export default ExpenseItem;