import React, { Component } from 'react';
import {Card } from 'react-bootstrap'
import Statedata from '../Statedata/Statedata';
import axios from 'axios'

export default class India extends Component {
    state={
        info:[]
    }
    componentDidMount() {
        axios.get("https://corona.lmao.ninja/v2/countries/india").then(resp => {
            this.setState({
                info: resp.data,
            })
            console.log(resp.data);




        });




    };

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <img src="https://www.countryflags.io/IN/shiny/64.png" alt=""/>
                    <h3>India</h3>
                    <div className="col-md-12">
                        <div className="row">
                            
                            <div className="col-md-3 mt-3">
                                <Card className="badge badge-info" style={{ width: '18rem' }}>
                                    
                                    <Card.Body className="text-center">
                                        <Card.Title>Total Cases</Card.Title>
                                        <h3>{this.state.info.cases}</h3>
                                        <Card.Text>
                                            [Today:{this.state.info.todayCases}]
                                        </Card.Text>
                                        
                                    </Card.Body>
                                </Card>

                            </div>
                            <div className="col-md-3 mt-3">
                                <Card className="badge badge-warning" style={{ width: '18rem' }}>

                                    <Card.Body className="text-center">
                                        <Card.Title>Active Cases</Card.Title>
                                        <h3>{this.state.info.active}</h3>
                                        <Card.Text>
                                            [Tests:{this.state.info.tests}]
                                        </Card.Text>

                                    </Card.Body>
                                </Card>

                            </div>
                            <div className="col-md-3 mt-3">
                                <Card className="badge badge-success" style={{ width: '18rem' }}>

                                    <Card.Body className="text-center">
                                        <Card.Title>Recovered</Card.Title>
                                        <h3>{this.state.info.recovered}</h3>
                                        

                                    </Card.Body>
                                </Card>

                            </div>
                            <div className="col-md-3 mt-3">
                                <Card className="badge badge-danger" style={{ width: '18rem' }}>

                                    <Card.Body className="text-center">
                                        <Card.Title>Total Death</Card.Title>
                                        <h3>{this.state.info.deaths}</h3>
                                        <Card.Text>
                                            [Today:{this.state.info.todayDeaths}]
                                        </Card.Text>

                                    </Card.Body>
                                </Card>

                            </div>
                            
                        </div>
                    </div>
                    

                </div>
                <div className="col-md-12"><Statedata /></div>
                
                
            </div>
        )
    }
}


