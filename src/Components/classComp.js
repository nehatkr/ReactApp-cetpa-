import React, { Component } from "react";

class ClassComp extends Component{
    constructor(){
        super();
        this.state = {pincode:"13245"};
    }
    render(){
        return(
            <div>
                This is class component
                <br/>
                The props are:{this.props.age}{this.props.school}
                <br />
                <button onClick={()=>this.setState({pincode:"56790"})}>
                    Change pin
                    </button>
                The state is -{this.state.pincode}
            </div>
        );
    }
}

export default ClassComp;