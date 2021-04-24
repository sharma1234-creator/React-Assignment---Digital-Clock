import React, {Component,createRef, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props){
        super(props)
        this.state ={
            
            time: new Date(),  
        }
        //this.timerid = setInterval(()=>this.foo,1000)
       
       // this.state.tm =  setInterval(()=>{  this.setState({time : new Date(), })},1000)
        this.foo  = this.foo.bind(this);
    }

    foo(){
        this.setState({time: new Date()})
    }

   
    componentDidMount(){
        this.timerid = setInterval(this.foo,1000)
        //console.log("this runs");
    }   
    componentWillUnmount(){
        clearInterval(this.timerid);
    }
  
    
    render() {
       
        return(
            <div className = "Clock">
                <h2 id="time">{this.state.time.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default App;
