import React, { Component } from 'react';
    
class PersonCard extends Component {
    render() {
        return <div className='card'>
            <h2>{this.props.lastName}, {this.props.firstName}</h2>
            <div>Age: {this.props.age}</div>
            <div>Hair Color: {this.props.hairColor}</div>
            </div>;
    }
}
    
export default PersonCard;
