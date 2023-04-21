import React, { Component } from 'react'

export default class Vidu extends Component {
  renderInfo = () =>{
    const title = 'a';
    let title2 = `Dung khác`;
    let lan3 =`dung cai ${title} phai3 dung2 ${title2}`
    return(
      <div>
        <div>{title}</div>
        <div>{title2}</div>
        <div>{lan3}</div>
      </div>
    )
  }
  render() {
    
    return (
      <div>
        {this.renderInfo()}
      </div>
    )
  }
}
