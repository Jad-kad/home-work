import React from 'react';
import './AddNewTask.css'


export class AddNewTask extends React.Component {
  constructor() {
    super()
    this.myFunction = this.myFunction.bind(this)
  }
     
      myFunction(event){
        event.preventDefault()
        let input = prompt('give me your tasks')   
        this.props.updateList(input)
      }

  render() {
    return (
        <button className='button2' onClick={this.myFunction}>
          New Task 
        </button>  
      )
  }
}
  
  