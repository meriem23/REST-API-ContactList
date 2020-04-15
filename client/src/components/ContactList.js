import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getContact } from '../actions/Actions'
import ContactItem from './ContactItem'

class ContactList extends Component {
    componentDidMount() {
        this.props.getContact()
    }
    render() {
        return (
            <div className="listContacts">
                    <p className="textBook">My Contacts List</p>
                    <div>
                        {this.props.contacts.map(el => <ContactItem info={el}/>)}
                    </div>
                    <button className="contactBtn goBack" onClick={() => this.props.history.goBack()}>Go Back !</button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        contacts: state.contact
    }
}

export default connect(mapStateToProps, { getContact })(ContactList)