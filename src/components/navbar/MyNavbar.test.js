import React from 'react';
import ReactDOM from 'react-dom';
import MyNavbar from './MyNavbar';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MyNavbar />, div);
});
