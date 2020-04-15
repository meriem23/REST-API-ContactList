import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editContact } from '../actions/Actions'

class EditContact extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        let contact = this.props.contact.filter(el => el._id === this.props.match.params.id)
        this.setState(contact[0])
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
                        name="name"
                        placeholder="Edit the Name"
                        value={this.state.name}
                        onChange={this.handleChange} />
                </div>
                <div>
                    {/* <label>Email:</label> */}
                    <input type="text"
                        name="email"
                        placeholder="Edit the E-mail"
                        value={this.state.email}
                        onChange={this.handleChange} />
                </div>
                <div>
                    {/* <label>Phone:</label> */}
                    <input type="text"
                        name="phone"
                        placeholder="Edit the Phone Number"
                        value={this.state.phone}
                        onChange={this.handleChange} />
                </div>
                <div>
                    <button className ="contactBtn" onClick={() => this.props.editContact(this.state._id, {
                        name: this.state.name,
                        phone: this.state.phone,
                        email: this.state.email
                    })}>Confirm !</button>
                    <button className ="contactBtn" onClick={() => this.props.history.goBack()}>Go Back !</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        contact: state.contact
    }
}

export default connect(mapStateToProps, { editContact })(EditContact)