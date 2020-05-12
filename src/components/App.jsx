import React from 'react';
import { connect } from 'react-redux';
import Basket from './Basket';

const App = () => {
  return (
    <div className="App">
      <Basket />
    </div>
  );
};

export const mapStateToProps = (state) => ({
  priceList: state.priceList,
  receipt: state.receipt,
  totals: state.totals,
});

export default connect(mapStateToProps)(App);
