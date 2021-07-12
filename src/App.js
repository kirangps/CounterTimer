import React,{Component} from 'react';
import tachyons from "tachyons";
//import "./index.css"
import Particles from 'react-particles-js';
import "./App.css"

 

class App extends Component{
  date=new Date()
   constructor(){
    super()
    this.state={
      searchFiled:"",
      days: 0,
      hours: 0,
      minutes: 0, 
      seconds: 0,
      message:'',
      }
  }
  

  onChange=(e)=>{
    //console.log(e.target.value)
    this.setState({searchFiled: e.target.value})
  }

 
    
   x= setInterval(()=>{
      var now = new Date().getTime();
      if(this.state.searchFiled!=""){
        var countTime=new Date(this.state.searchFiled).getTime()
        if(countTime<now){
          this.setState({message :"Please enter the valid date of timer!!!! "})
          this.setState({days:0,hours:0,minutes:0,seconds:0});
          return;
       }
       this.setState({message:''})
      
        var distance=countTime-now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        console.log(hours)
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        //document.getElementById("timer").innerHTML=`${hours}Hours ${minutes}Minutes ${seconds}Seconds`
        this.setState({days:days,hours:hours,minutes:minutes,seconds:seconds})
        console.log(`Timer Ends in this time period :- ${days}Days ${hours}Hours ${minutes}Minutes ${seconds}Seconds`)
     }
      } ,1000)

  render(){
    return(
      <div className="tc modify">
       <h1>{`Current Time in INDIA ${this.date}`}</h1>
      <h4>Please Enter the date on which the Timer Ends !!!</h4>
      <input className="pa2 bg-light-green" type="datetime-local" onChange={this.onChange}/>
      {this.state.message==='' ?null : <h2>{this.state.message}</h2>}  
        {this.state.searchFiled===""? <h2>Remaining Time Period :- 0Days 0Hours 0Minutes 0Seconds</h2> : <h2>{`Remaining Time Period :- ${this.state.days}Days ${this.state.hours}Hours ${this.state.minutes}Minutes ${this.state.seconds}Seconds`}</h2>}
          
      </div>
    )
    
  }

  }
export default App;