import React, { Component } from 'react';

export default class FirstComponent extends Component {
  //or add the last line: export default FirstComponent;
    render() {
      return (
        <div className="FirstComponent">
          FirstComponent
          </div>
      )
    }
  }

  //actually for function only need to: import React from 'react';
export function SecondComponent(){
    return (
      <div className="SecondComponent">
        SecondComponent
      </div>
    );
  }
