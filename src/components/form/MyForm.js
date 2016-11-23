import React, { Component } from 'react';
import {FormControl, Jumbotron} from 'react-bootstrap';
import _ from 'lodash';
import WarcraftService from '../../services/WarcraftService';
import './MyForm.css';

class MyForm extends Component {
    constructor(props) {
        super(props);

        this.WarcraftService = new WarcraftService();

        this.state = {characterName: '', serverName: '', serverRegion: 'EU', zone: '12', data: []};
        this.handleChange = this.handleChange.bind(this);
        this.updateData = _.debounce(this.updateData.bind(this), 1000);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value}, () => {
            this.updateData(this.state.characterName, this.state.serverName, this.state.serverRegion, this.state.zone);
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

                    <FormControl componentClass="select" placeholder="Raid name" name="zone" value={this.state.zone} onChange={this.handleChange}>
                        <option value="12">Trial Of Valor</option>
                        <option value="10">The Emerald Nightmare</option>
                    </FormControl>
                </Jumbotron>
            </div>
        );
    }

    updateData(characterName, serverName, serverRegion, zone) {
        this.WarcraftService.getCharacterParse(characterName, serverName, serverRegion, zone).then((data) =>{
            this.setState({data: data});
            this.props.callbackParent(data)
        });
    }
}

export default MyForm;
