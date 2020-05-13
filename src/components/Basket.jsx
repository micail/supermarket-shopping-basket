import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

import { addItem } from '../redux/actions/receiptActions';


const Basket = () => {
  const dispatch = useDispatch();
  const priceList = useSelector((state) => state.priceList);
  const buyItem = (position) => {
    dispatch(addItem(position));
  };

  return (
    <div className="Basket col-md-6 d-flex flex-column">
      {
        priceList.map((item, index) => {
          const itemName = (item[0]).toUpperCase();
          const itemPrice = item[1];
          const position = index;
          return (
            <Button className="m-1" variant="success" size="md" key={itemName} type="button" onClick={() => buyItem(position)}>
              {itemName}
              {' '}
              {itemPrice}
            </Button>
          );
        })
      }
    </div>
  );
};

export default Basket;
