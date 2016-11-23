import React, { Component } from 'react';
import MyNavbar from '../navbar/MyNavbar';
import MyForm from '../form/MyForm';
import MyTable from '../table/MyTable';
import './App.css';


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
                {this.displayTable()}
            </div>
        );
    }

    displayTable() {
        if (this.state.data.length !== 0)
            return (<MyTable data={this.state.data} />)
    }
}

export default App;
