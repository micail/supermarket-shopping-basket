import React from 'react';
import { useSelector } from 'react-redux';

import Totals from './Totals';

const Receipt = () => {
  const priceList = useSelector((state) => state.priceList);
  const receipt = useSelector((state) => state.receipt);

  const standardItem = (item, index) => {
    const itemName = priceList[item][0];
    const itemPrice = `£${priceList[item][1]}`;
    return (
      <li key={index}>
        {itemName}
        {' '}
        {itemPrice}
      </li>
    );
  };

  const weightItem = (item, index) => {
    const priceListKey = item[0];

    const itemName = priceList[priceListKey][0];
    const price = priceList[priceListKey][1];
    const unit = priceList[priceListKey][2];

    const itemCost = item[2];
    const itemWeight = item[1];
    return (
      <li key={index}>
        {itemName}
        <br />
        {itemWeight}
        {' '}
        {price}
        /
        {unit}
        {' '}
        {itemCost}
      </li>
    );
  };

  return (
    <>
      <ul className="Receipt">
        {
          receipt.map((item, index) => {
            return typeof item === 'number'
              ? standardItem(item, index)
              : weightItem(item, index);
          })
        }
      </ul>
      <Totals />
    </>
  );
};

export default Receipt;
