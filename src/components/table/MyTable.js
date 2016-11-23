import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import moment from 'moment';
import './MyTable.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {data : props.data};
    }

    render() {
        return (
            <div className="container">
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>Boss Name{this.state.data}</th>
                            <th>dificulty</th>
                            <th>Class / Spe</th>
                            <th>DPS</th>
                            <th>ILVL</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map((character, i) =>
                            <tr key={ i }>
                                <td>{character.name}</td>
                                <td>{this.dificulty(character.difficulty)}</td>
                                <td>{character.specs[0].class} / {character.specs[0].spec}</td>
                                <td>{character.specs[0].data[0].persecondamount}</td>
                                <td>{character.specs[0].data[0].ilvl}</td>
                                <td>{moment.utc(character.specs[0].data[0].duration).format('HH:mm:ss')}</td>
                                <td>{moment.utc(character.specs[0].data[0].start_time).format('dddd, MMMM Do YYYY, HH:mm:ss')}</td>
                                <td><a href="https://www.warcraftlogs.com/reports/{character.specs[0].data[0].report_code}/#fight={character.specs[0].data[0].report_fight}" target="_blank">Report</a></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        );
    }

    dificulty(s) {
        let type = {
            1: 'unknown',
            2: 'LFR',
            3: 'Normal',
            4: 'Heroic',
            5: 'Mythic',
        };
        return type[s];
    }
}

export default App;
