import React from 'react';
import { useSelector } from 'react-redux';


const Totals = () => {
  const totals = useSelector((state) => state.totals);
  const { subTotal } = totals;
  const { savings } = totals;
  const savingsLength = savings ? savings.length : 0;
  const { totalSavings } = totals;
  const { totalToPay } = totals;

  const printSavings = (savingsArr) => {
    return (
      <>
        <span className="list-group-item border-0 h4">Savings</span>
        {savingsArr.map((el, index) => {
          const name = el[0];
          const discount = (el[1]).toString();
          return (
            <li className="list-group-item border-0 d-flex justify-content-between" key={index}>
              <span className="label h4">{name}</span>
              <span className="value h4">{discount}</span>
            </li>
          );
        })
        }
      </>
    );
  };

  return (
    <ul className="Totals col-xs-12 list-group">
      <li className="list-group-item border-0 display-4">-----</li>
      <li className="list-group-item border-0 d-flex justify-content-between">
        <span className="label h4">Sub-total</span>
        <span className="value sub-total h4">{subTotal}</span>
      </li>
      {savingsLength > 0 ? printSavings(savings) : null}
      <li className="list-group-item border-0 display-4">-----</li>
      <li className="list-group-item border-0 d-flex justify-content-between">
        <span className="label h4">Total savings</span>
        <span className="value total-savings h4">{totalSavings}</span>
      </li>
      <li className="list-group-item border-0 display-4">
        -------------------------
      </li>
      <li className="list-group-item border-0 d-flex justify-content-between">
        <span className="label h4">Total to Pay</span>
        <span className="value total-to-pay h4">{totalToPay}</span>
      </li>
    </ul>
  );
};

export default Totals;
