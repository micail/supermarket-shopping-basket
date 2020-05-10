import createStore from '../../redux/redux-store';

describe('Redux store tests', () => {
  it('should make an empty store', () => {
    const emptyStore = createStore();
    expect(emptyStore).toBeDefined();
  });
});
