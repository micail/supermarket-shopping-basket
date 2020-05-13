import React from 'react';
import { useSelector } from 'react-redux';


const Totals = () => {
  const totals = useSelector((state) => state.totals);
  const { subTotal } = totals;
  const { savings } = totals;
  const savingsLength = savings.length
  const { totalSavings } = totals;
  const { totalToPay } = totals;

  const printSavings = (savingsArr) => {
    return (
      <>
        <span>Savings</span>
        <br />
        {savingsArr.map((el, index) => {
          const name = el[0];
          const discount = (el[1]).toString();
          return (
            <span key={index} className="savings">
              <span>{name}</span>
              <span>{discount}</span>
              <br />
            </span>
          );
        })
        }
      </>
    );
  };

  return (
    <div className="Totals">
      <span>-----</span>
      <br />
      <span className="label">Sub-total</span>
      <span className="value sub-total">{subTotal}</span>
      <br />
      {savingsLength > 0 ? printSavings(savings) : null}
      <br />
      <span>-----</span>
      <br />
      <span className="label">Total savings</span>
      <span className="value total-savings">{totalSavings}</span>
      <br />
      <span>-------------------------</span>
      <br />
      <span className="label">Total to Pay</span>
      <span className="value total-to-pay">{totalToPay}</span>
    </div>
  );
};

export default Totals;
