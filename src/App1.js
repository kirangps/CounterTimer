import React from 'react';
import tachyons from "tachyons";

 
class App1 extends React.Component{

    constructor(){
        super();
        this.state={
            userInput: "",
            carbo:"",
            EnergyCal :"",
            Fat_Cal:"",
            isClicked: false
        }
    }

searchField(e){
     this.setState({userInput:e.target.value})

}

  Analyze(){
    console.log(this.state.userInput)
    this.setState({isClicked:true})
    fetch(`https://api.edamam.com/api/nutrition-data?app_id=19b5e1e6&app_key=c30061f7466d0646eb2cd5d45cacb185&ingr=${this.state.userInput}`)
    .then(response=> (response.json()))
    .then(json=>{
        console.log(json.totalNutrientsKCal.CHOCDF_KCAL)
        this.setState(
            {carbo:json.totalNutrientsKCal.CHOCDF_KCAL.quantity}
        )
      
    })
  
  }
  render(){
    return (
      <div className="tc ma5">
        <input className="pa3" type="text" placeholder="Enter your item name" onChange={this.searchField.bind(this)} />
        { this.state.isClicked ?  
        <div>
            <h1>Carbo={this.state.carbo}</h1>
            <h1>Energy={this.state.EnergyCal}</h1>
            <h1>Fat={this.state.Fat_Cal}</h1>
        </div> : null}
        <button onClick={this.Analyze.bind(this)}>Click</button>
      </div>
    )
  }
}

export default App1;