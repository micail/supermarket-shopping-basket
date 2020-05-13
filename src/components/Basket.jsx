import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addItem } from '../redux/actions/receiptActions';


const Basket = () => {
  const dispatch = useDispatch();
  const priceList = useSelector((state) => state.priceList);
  const buyItem = (position) => {
    dispatch(addItem(position));
  };

  return (
    <div className="Basket">
      {
        priceList.map((item, index) => {
          const itemName = (item[0]).toUpperCase();
          const itemPrice = `£${item[1]}`;
          const position = index;
          return (
            <button key={itemName} type="button" onClick={() => buyItem(position)}>
              {itemName}
              {' '}
              {itemPrice}
            </button>
          );
        })
      }
    </div>
  );
};

export default Basket;
