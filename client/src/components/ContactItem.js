import React from 'react'
import { connect } from 'react-redux'
import { deleteContact } from '../actions/Actions'
import { Link } from 'react-router-dom'

const ContactItem = props => {
    return (
        <div className="contactItem">
            <p>{props.info.name}</p>
            <p>{props.info.email}</p>
            <p>{props.info.phone}</p>
            <Link to={`/contact/${props.info._id}`}><button className="contactBtn">Edit !</button></Link>
            <button className ="contactBtn" onClick={() => props.deleteContact(props.info._id)}>Delete !</button>
        </div>
    )
}

export default connect(null, { deleteContact })(ContactItem)