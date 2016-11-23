import React, { Component } from 'react';
import {Row, Col, Tab, Nav, NavItem, Panel} from 'react-bootstrap';
import moment from 'moment';
import './MyTable.css';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Row className="box">
                    <Col sm={12}>
                        <Tab.Container id="result" defaultActiveKey="0">
                            <Row>
                                <Col sm={4}>
                                    <Nav stacked>
                                        {this.props.data.map((character, i) =>
                                            <NavItem key={ i } eventKey={ i }>
                                                <h4>{character.name} <small>{this.dificulty(character.difficulty)}</small></h4>
                                            </NavItem>
                                        )}
                                    </Nav>
                                </Col>
                                <Col sm={8}>
                                    <Tab.Content animation>
                                        {this.props.data.map((character, i) =>
                                            <Tab.Pane key={ i } eventKey={ i }>
                                                <Row>
                                                    <Col sm={12}>
                                                        {character.specs.map((spec, j) =>
                                                            <Panel key={ j } header={spec.spec}>
                                                                <ul className="list-unstyled">
                                                                    {spec.data.map((data, j) =>
                                                                        <li key={ j } className="combat-box">
                                                                            <ul>
                                                                                <li><b>Dps</b>: {data.persecondamount}</li>
                                                                                <li><b>Ilvl</b>: {data.ilvl}</li>
                                                                                <li><b>Duration</b>: {moment.utc(data.duration).format('HH:mm:ss')}</li>
                                                                                <li><b>Date</b>: {moment.utc(data.start_time).format('dddd, MMMM Do YYYY, HH:mm:ss')}</li>
                                                                                <li><b>Dps</b>: {data.persecondamount}</li>
                                                                            </ul>
                                                                            <a className="btn btn-link" href={`https://www.warcraftlogs.com/reports/${data.report_code}/#fight=${data.report_fight}`} target="_blank">Report</a>
                                                                        </li>
                                                                    )}
                                                                </ul>
                                                            </Panel>
                                                        )}
                                                    </Col>
                                                </Row>
                                            </Tab.Pane>
                                        )}
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Col>
                </Row>
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
