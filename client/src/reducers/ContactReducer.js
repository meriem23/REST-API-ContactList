import { GET_CONTACTS } from '../actions/Types'

const ContactReducer = (state = [], action) => {
    switch (action.type) {
        case GET_CONTACTS:
            return action.payload
        default:
            return state
    }
}
export default ContactReducer