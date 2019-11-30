import React, { Component } from 'react';

import './App.css';

class Calculator extends Component 
{
  constructor(props)
  {
    let  tempvalue;
    let operation;
    super(props);
    this.state=
    {
      statevalue : this.props.statevalue
    }
    this.takeValue = this.takeValue.bind(this);
    this.numberPad = this.numberPad.bind(this);
    this.Refresh = this.Refresh.bind(this)
    this.storeValue = this.storeValue.bind(this)
    this.plusOperation = this.plusOperation.bind(this)
    this.operation = 0
    this.tempvalue = 0
    
  }

  takeValue(event)
    {
      let statevalue = parseInt(event.target.statevalue);
      if(statevalue)
      {
          this.setState
          (
            {
              statevalue : statevalue 
            }
          );
        }
      else
      {
        this.setState
        (
          {
            statevalue :0
          }
        );
      }
    }
 
  storeValue(operation){
    this.tempvalue = this.state.statevalue
    this.operation = operation
    
    this.setState(
      {
        statevalue : 0
      }
    )
  }

  plusOperation()
  {
    if (this.operation === '1')
    {
      this.setState(
        {
          statevalue : parseInt(this.state.statevalue) + parseInt(this.tempvalue)
        }
      )
    }
    else if (this.operation === '2')
    {
      this.setState(
        {
          statevalue : parseInt(this.tempvalue) - parseInt(this.state.statevalue)  
        }
      )
    }
    else if (this.operation === '3')
    {
      this.setState(
        {
          statevalue : parseInt(this.state.statevalue) * parseInt(this.tempvalue)
        }
      )
    }
    else if (this.operation === '4')
    {
      this.setState(
        {
          statevalue : parseInt(this.tempvalue) / parseInt(this.state.statevalue)  
        }
      )
    }

    else 
    {
      this.setState(
        {
          statevalue : 0
        }
      )
    }
  }

 

  Refresh()
  {
      this.setState
      (
        {
          statevalue:this.state.statevalue = 0
        }
      );
    }


  numberPad(statevalue)
   {
      if (this.state.statevalue === 0){
        this.setState({
          statevalue: statevalue
        });
      }
      else
      {
        this.setState
          (
            {
              statevalue:this.state.statevalue + statevalue
            }
          );
      }

    }


  render() {
    return (
      <div className='cal'>
        <div className='cal-content'>
        <input onChange={this.takeValue} value={this.state.statevalue}/><br></br>
       <button className="cal-btn" onClick={(event) => this.numberPad('7')}>7</button>
       <button className='cal-btn' onClick={(event) => this.numberPad('8')}>8</button> 
       <button className='cal-btn' onClick={(event) => this.numberPad('9')}>9</button>
       <button className='cal-btn' onClick={(event) => this.storeValue('1')}> + </button><br></br>
       <button className='cal-btn' onClick={(event) => this.numberPad('4')}>4</button>
       <button className='cal-btn' onClick={(event) => this.numberPad('5')}>5</button>
       <button className='cal-btn' onClick={(event) => this.numberPad('6')}>6</button>
       <button className='cal-btn' onClick={(event) => this.storeValue('2')} > - </button><br></br>
       <button className='cal-btn' onClick={(event) => this.numberPad('3')}>3</button>
       <button className='cal-btn' onClick={(event) => this.numberPad('2')}>2</button>
       <button className='cal-btn' onClick={(event) => this.numberPad('1')}>1</button>
       <button className='cal-btn' onClick={(event) => this.storeValue('3')}> * </button><br></br>
       <button className='cal-btn' onClick={this.Refresh}>C</button>
       <button className='cal-btn' onClick={(event) => this.numberPad('0')}>0</button>
       <button className='cal-btn' onClick={(event) => this.numberPad('.')}>.</button>
       <button className='cal-btn' onClick={(event) => this.storeValue('4')}> / </button>
       <button className='cal-btn1' onClick={this.plusOperation}> = </button>
       

        </div>

      </div>              
    );
  }
}


class App extends Component{
  render(){
    return(
      <div>
        <Calculator statevalue={0} />
      </div> 
    );
  }
}

export default App;

