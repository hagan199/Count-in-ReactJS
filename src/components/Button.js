    import React, { Component } from 'react';
    import "./Button.css";
class Button extends Component {
   constructor(props) {
       super(props)

       this.state = {count: 0}
       this.clickHandler = this.clickHandler.bind(this)
   }

   clickHandler() {
       this.setState({count: this.state.count+1})
   }

   render() {
       return(
           <button className='button'  onclick={this.clickHandler}>Click count: {this.state.count} </button>
       )
   }
}

    export default Button;