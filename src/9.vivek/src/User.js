import React from "react"

class User extends React.component {
    
    render() {
        return (
            <div>
                <h1> name : {this.props.name}</h1>
                <h2> age: {this.props.age}</h2>
                <h2>place: {this.props.place}</h2>
            </div>
        )
    }
}


