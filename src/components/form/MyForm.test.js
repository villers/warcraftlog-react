import React from 'react';
import ReactDOM from 'react-dom';
import MyForm from './MyForm';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MyForm />, div);
});
