import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Rockets from '../components/Rockets';
import * as action from '../redux/Rockets/rockets';

test('renders rockets component', () => {
  render(<Provider store={store}><Rockets /></Provider>);
  screen.debug();
});

describe('test action creators', () => {
  test('RESERVE should return an object of type RESERVE and an ID', () => {
    expect(action.reserveRocket('RocketId')).toEqual({ type: 'space-traveler/rockets/RESERVE', payload: 'RocketId' });
  });
  test('CANCEL_RESERVE should return an object of type CANCEL_RESERVE and an ID', () => {
    expect(action.cancelReservedRocket('RocketId')).toEqual({ type: 'space-traveler/rockets/CANCEL_RESERVE', payload: 'RocketId' });
  });
});
