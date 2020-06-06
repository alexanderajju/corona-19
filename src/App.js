import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import India from './component/India/India';
import Header from './component/Header/Header';
import World from './component/World/World';






class App extends Component{
  render(){
    return(
    <div className="container-fluid ">
        <Router>
          <Header />
          <Route exact path="/">
            <India />

          </Route>
          <Route exact path="/India">
            <India />

          </Route>
          <Route exact path="/World">
            <World />

          </Route>






        </Router>
        
      
       
    </div>
    )
    
     
  }
  
}


export default App;
