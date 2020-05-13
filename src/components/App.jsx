import React from 'react';
import { connect } from 'react-redux';
import Basket from './Basket';
import Receipt from './Receipt';


const App = () => {
  return (
    <div className="App container">
      <div className="row">
        <Basket />
        <Receipt />
      </div>
    </div>
  );
};

export const mapStateToProps = (state) => ({
  priceList: state.priceList,
  receipt: state.receipt,
  totals: state.totals,
});

export default connect(mapStateToProps)(App);
