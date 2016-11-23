import React, { Component } from 'react';
import './MyForm.css';
import WarcraftService from '../../services/WarcraftService';


import {FormControl, Jumbotron} from 'react-bootstrap';

class MyForm extends Component {
    constructor(props) {
        super(props);

        this.WarcraftService = new WarcraftService();

        this.state = {characterName: '', serverName: '', serverRegion: 'EU', data: []};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value}, () => {
            this.updateData(this.state.characterName, this.state.serverName, this.state.serverRegion);
        });
    }

    render() {
        return (
            <div className="container">
                <Jumbotron>
                    <h1>Search Your Characters!</h1>
                    <FormControl type="text" placeholder="Characters name" name="characterName" value={this.state.characterName} onChange={this.handleChange} />
                    <FormControl type="text" placeholder="Server name" name="serverName" value={this.state.serverName} onChange={this.handleChange} />

                    <FormControl componentClass="select" placeholder="Server name" name="serverRegion" value={this.state.serverRegion} onChange={this.handleChange}>
                        <option value="EU">EU</option>
                        <option value="US">US</option>
                    </FormControl>
                </Jumbotron>
            </div>
        );
    }

    updateData(characterName, serverName, serverRegion) {
        this.WarcraftService.getCharacterParse(characterName, serverName, serverRegion).then((data) =>{
            this.setState({data: data});
            this.props.callbackParent(data)
        });
    }
}

export default MyForm;
