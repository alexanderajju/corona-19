import React, { Component } from 'react'
import Axios from 'axios'
import { Accordion, Card, Button,table} from 'react-bootstrap'

export default class Statedata extends Component {
    state={
        stateDate:''
    };
    componentDidMount(){
        Axios.get("https://api.covid19india.org/state_district_wise.json").then(resp => {
            this.setState({
                stateDate: resp.data
        
            })


            
        });
    
            
    
        
    };

 
        
    render() {
        let keys = Object.keys(this.state.stateDate);
        // console.log(keys)
        return (
            <div className="row">
                <div className="col-md-12">
                    
                    <Accordion>
                        {keys.map((item,key)=>{

                            let districts =this.state.stateDate[item].districtData;
                            let districts_keys = Object.keys(districts);
                            let total_active =0;
                            let total_confirmed=0;
                            let total_deaths=0;
                            let total_recovery=0;

                            let districts_list=[];
                                for(let x in districts){
                                    total_active += districts[x].active;
                                    total_confirmed += districts[x].confirmed;
                                    total_deaths += districts[x].deceased;
                                    total_recovery += districts[x].recovered;
                                    let ob =districts[x];
                                    ob["district_name"]=x;
                                        districts_list.push(ob);
                                    
                                }
                                // console.log(districts_list);

                            return(
                                <Card >
                                    <Card.Header style={{ textDecoration: "none" }}>
                                        <Accordion.Toggle as={Button} variant="primary" eventKey={key}>
                                            {item} <span className="btn-dark p-1 mr-2">Total_Cases-{total_confirmed}</span> <span className="btn-dark p-1 mr-2">Active-{total_active}</span> <span className="btn-dark p-1 mr-2">Recovered-{total_recovery}</span>  <span className="btn-dark p-1 mr-2">Deaths -{total_deaths}</span>
                                </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey={key}>
                                        <Card.Body>
                                            <table className="table table-bordered table-striped  table-hover" >
                                                <thead>
                                                    <tr>
                                                    <th>Districts</th>
                                                    <th>Confirmed</th>
                                                    <th>Active</th>
                                                    <th>Recovered </th>
                                                    <th>Deaths</th>
                                                    </tr>

                                                </thead>
                                                <tbody>
                                                    {districts_list.map((item,key)=>{
                                                        return(
                                                            <tr>
                                                                <td>{item.district_name}</td>
                                                                <td>{item.confirmed}</td>
                                                                <td>{item.active}</td>
                                                                <td>{item.recovered}</td>
                                                                <td>{item.deceased}</td>
                                                            </tr>
                                                        )
                                                    })}
                                                </tbody>
                                            </table>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                            )
                        })}
                        
                    </Accordion>
                    
                </div>
                
                
            </div>
        )
    }
}
