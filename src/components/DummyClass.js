import React from "react";

class DummyClass extends React.Component{

    
    constructor(props){
        super(props);
        const{name,subject} = props;
        this.state = {
            Name:name,
            Subject:subject
        }
    }
    render(){
        return <div className="dummy">
            <ul>
                <li>{this.state.Name}</li>
                <li>{this.state.Subject}</li>
            </ul>
        </div>
    }

}
export default DummyClass