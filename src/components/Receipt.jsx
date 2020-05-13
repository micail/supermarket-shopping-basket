import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Totals from './Totals';
import { Button } from 'react-bootstrap';
import { deleteItem } from '../redux/actions/receiptActions';

const Receipt = () => {
  const priceList = useSelector((state) => state.priceList);
  const receipt = useSelector((state) => state.receipt);

  const dispatch = useDispatch();
  const removeItem = (position) => {
    dispatch(deleteItem(position));
  };

  const standardItem = (item, index) => {
    const itemName = priceList[item][0];
    const itemPrice = priceList[item][1];
    return (
      <li key={index} className="list-group-item border-0">
        {itemName}
        {' '}
        {itemPrice}
        {' '}
        <Button className="m-1" variant="warning" size="xs" key={itemName} type="button" onClick={() => removeItem(index)}>
          Delete
        </Button>
      </li>
    );
  };

  const weightItem = (item, index) => {
    const priceListKey = item[0];
    console.log(priceList)
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

  const CheckoutSummary = () => {
    return (<ul className="col-xs-12 list-group">
      {
        receipt.map((item, index) => {
          return typeof item === 'number'
            ? standardItem(item, index)
            : weightItem(item, index);
        })
      }
    </ul>);
  }

  return (
    <div className="Receipt col-md-6">
      <CheckoutSummary />
      <Totals />
    </div>
  );
};

export default Receipt;
