// Code ClickityClick Component Here

import React from 'react';

class ClickityClick extends React.Component{
    state={
        toggled: false
        
    }

    handleClick = () => {
        this.setState(previousState =>{
            return{
                toggled: !previousState.toggled
            }
        })
        // console.log(this.state.hasBeenClicked);

    }

    render(){
        return(
            <div>
                {/* <p>I have {this.state.hasBeenClicked? null: 'not'} been clicked!</p>
                <button onClick={this.handleClick}> Click me!</button> */}
            <button onClick={this.handleClick}>{this.state.toggled ? "ON":"OFF"}</button>
            </div>
        )
    }
}



export default ClickityClick