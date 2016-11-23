import React from 'react';
import ReactDOM from 'react-dom';
import MyTable from './MyTable';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MyTable />, div);
});
