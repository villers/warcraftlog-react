import React, { Component } from 'react';
import './App.css';
import MyNavbar from '../navbar/MyNavbar';
import MyForm from '../form/MyForm';
import MyTable from '../table/MyTable';


class App extends Component {

    constructor(props) {
        super(props);
        this.onChildChanged = this.onChildChanged.bind(this);
        this.state = {data : []};
    }

    onChildChanged(data) {
        this.setState({ data: data });
    }

    render() {
        return (
            <div className="App">
                <MyNavbar />
                <MyForm callbackParent={this.onChildChanged} />
                <MyTable data={this.state.data} />
            </div>
        );
    }
}

export default App;
