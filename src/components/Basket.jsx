
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import Form from './Form';

import { addItem } from '../redux/actions/receiptActions';


const Basket = () => {
  const [positionForm, setPositionForm] = useState(null);
  const dispatch = useDispatch();
  const priceList = useSelector((state) => state.priceList);
  const buyItem = (position, unit) => {
    if (unit) {
      return setPositionForm(() => position);
    }
    dispatch(addItem(position));
  };

  const hideForm = () => {
    setPositionForm(() => false);
  };

  return (
    <div className="Basket col-md-6 d-flex flex-column">
      {
        priceList.map((item, index) => {
          const itemName = (item[0]).toUpperCase();
          const itemPrice = item[1];
          const position = index;
          const unit = item[2] || null;
          return (
            <Button className="m-1" variant="success" size="md" key={itemName} type="button" onClick={() => buyItem(position, unit)}>
              {itemName}
              {' '}
              {itemPrice}
            </Button>
          );
        })
      }
      {
        positionForm ? <Form position={positionForm} hideForm={hideForm} /> : null
      }
    </div>
  );
};

export default Basket;
