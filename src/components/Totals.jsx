import React from 'react';
import { useSelector } from 'react-redux';


const Totals = () => {
  const totals = useSelector((state) => state.totals);
  const { subTotal } = totals;
  const { savings } = totals;
  const { totalSavings } = totals;
  const { totalToPay } = totals;

  const printSavings = (savingsArr) => {
    return savingsArr.map((el) => {
      const name = el[0];
      const discount = (el[1]).toString();
      return (
        <span key={name} className="savings">
          <span>{name}</span>
          <span>{discount}</span>
        </span>
      );
    });
  };

  return (
    <div className="Totals">
      <span>-----</span>
      <span className="label">Sub-total</span>
      <span className="value sub-total">{subTotal}</span>
      <br />
      <span>Savings</span>
      {printSavings(savings)}
      <span>-----</span>
      <span className="label">Total savings</span>
      <span className="value total-savings">{totalSavings}</span>
      <span>-------------------------</span>
      <span className="label">Total to Pay</span>
      <span className="value total-to-pay">{totalToPay}</span>
    </div>
  );
};

export default Totals;
