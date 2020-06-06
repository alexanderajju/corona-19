import React, { Component } from 'react';
import Axios from 'axios';
import './World.css'

export default class World extends Component {
    state={
        info:[]
    };

    componentDidMount() {
        Axios.get("https://corona.lmao.ninja/v2/countries").then(resp => {
this.setState({
    info:resp.data,
})
            // console.log(resp.data);
            



        });




    };
    
    
    render() {
        
      
        
        return (
            
            
            
            <div className="row">
                <div className="col-md-12 table-responsive">
                    <table className="table table-bordered table-striped  table-hover">
                        <thead  >
                            <tr>
                                <td>Country</td>
                                <td>Total Cases</td>
                                <td>Recoverd</td>
                                <td>Death</td>
                            </tr>
                        </thead>
                        <tbody>
                            
                                {
                                    this.state.info.map((item,key)=>{
                                        return(
                                            <tr>
                                                <td>{item.country}
                                                <img src={item.countryInfo.flag} alt=""/>
                                                </td>
                                                <td>{item.cases}</td>
                                                <td>{item.recovered}</td>
                                                <td>{item.deaths}</td>

                                            </tr>
                                            
                                        )})
                                }
                            
                        </tbody>
                    </table>
                </div>
                
            </div>
        )
    }
}
