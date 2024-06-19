import React, { Component } from "react";

class Room1 extends Component{
    constructor(){
        super();
        this.state = {color :"red"};
    }
    
    render(){
        return <div>
            Go to room one 
            <br />
            The props are - {this.props.animal}
            <br />
        <button onClick={()=>this.setState({color :"green"})}>
                    Change Color
                    </button>
                    <br />
                    Changed color is -{this.state.color}
        </div>
       
    }
}

export default Room1;