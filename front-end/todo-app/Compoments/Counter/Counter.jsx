import React, { Component } from 'react';
import './Counter.css';


class Counter extends Component {

    constructor(){
        super();
        
        this.state = {count: 0};
        
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
    
    render() {
        return (
          <div className="Counter">
            <CounterButton calSym="+" calNum={1} calMethod={this.increment}/>
            <CounterButton calSym="-" calNum={1} calMethod={this.decrement}/>
            <CounterButton calSym="+" calNum={5} calMethod={this.increment}/>
            <CounterButton calSym="-" calNum={5} calMethod={this.decrement}/>
            <span className="Count">{this.state.count}</span>
            <div><button className="Reset" onClick={this.reset}> Reset </button></div>
          </div>
        );
      }

    increment(num){
        //console.log(`increment from parent's increment - ${num}`);
        this.setState({count: this.state.count + num});
    }

    decrement(num){
        //console.log(`decrement from parent's decrement - ${num}`);
        this.setState({count: this.state.count - num});
    }


    reset() {
        this.setState({count: 0});
    }


}

class CounterButton extends Component {

    // define the initial state in a constructor
    // init count:  count = 0
    constructor(){
        super();//call the super(), then start using the constructor
        
        this.state = {count: 0};

        /* Use arrow function to get rid of binding */
        /*
        this.increment = this.increment.bind(this);
        this.reset = this.reset.bind(this);
        */
    }

    render() {
        return (
        <div className="CounterButton">
        <button onClick={() => this.props.calMethod(this.props.calNum)}> {this.props.calSym}{this.props.calNum} </button>
        </div>
        );
    }

}


export default Counter;