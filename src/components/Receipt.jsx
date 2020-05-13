import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

import Totals from './Totals';
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
      <li key={index} className="list-group-item border-0 h4 d-flex justify-content-between">
        <span>{itemName}</span>
        <span>{itemPrice}</span>
        <Button className="m-1" variant="warning" size="xs" key={itemName} type="button" onClick={() => removeItem(index)}>
          Delete
        </Button>
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
      <li className="list-group-item border-0 h4 d-flex justify-content-between" key={index}>
        {itemName}
        <br />
        {itemWeight}
        {'kg @  '}
        {price}
        /
        {unit}
        {' '}
        {itemCost}
        <Button className="m-1" variant="warning" size="xs" key={itemName} type="button" onClick={() => removeItem(index)}>
          Delete
        </Button>
      </li>
    );
  };

  const CheckoutSummary = () => {
    return (
      <ul className="col-xs-12 list-group">
        {
          receipt.map((item, index) => {
            return typeof item === 'number'
              ? standardItem(item, index)
              : weightItem(item, index);
          })
        }
      </ul>
    );
  };

  return (
    <div className="Receipt col-md-6">
      <CheckoutSummary />
      <Totals />
    </div>
  );
};

export default Receipt;
