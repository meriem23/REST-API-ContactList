import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addContact} from '../actions/Actions'

class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: " ",
            email: " ",
            phone: " "
        }
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <div className="newContact">
                <div>
                    {/* <label>Name:</label> */}
                    <input type="text"
                        placeholder="Enter the Name"
                        name="name"
                        onChange={this.handleChange} />
                </div>
                <div>
                    {/* <label>Email:</label> */}
                    <input type="text"
                        placeholder="Enter the E-mail"
                        name="email"
                        onChange={this.handleChange} />
                </div>
                <div>
                    {/* <label>Phone:</label> */}
                    <input type="text"
                        placeholder="Enter the Phone Number"
                        name="phone"
                        onChange={this.handleChange} />
                </div>
                <div>
                    <button className="contactBtn" onClick={()=> this.props.addContact(this.state)}>Add !</button>
                    <button className="contactBtn" onClick={() => this.props.history.goBack()}>Go Back !</button>
                </div>
            </div>
        )
    }
}
export default connect(null,{addContact})(AddContact)