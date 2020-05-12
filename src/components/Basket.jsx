import React from 'react';
import { useSelector } from 'react-redux';


const Basket = () => {
  const priceList = useSelector((state) => state.priceList);
  return (
    <div className="Basket">
      {
        priceList.map((item) => {
          const itemName = (item[0]).toUpperCase();
          const itemPrice = `£${item[1]}`;
          return (
            <button key={itemName} type="button">
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
