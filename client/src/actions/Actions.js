import {GET_CONTACTS} from './Types'
import axios from 'axios'

export const getContact = () => dispatch => {
    axios.get('/allcontacts')
    .then(res=> dispatch({
        type: GET_CONTACTS,
        payload: res.data
    }))
    .catch((err) =>console.log(err))
}
export const addContact = newContact => dispatch =>{
    axios.post('/newcontact',newContact)
    .then(()=> dispatch(getContact()))
    .catch((err) => console.log(err))
}
export const deleteContact = id => dispatch => {
    axios.delete(`/deletecontact/${id}`)
    .then(()=> dispatch(getContact()))
    .catch((err) => console.log(err))
}
export const editContact = (id, updatedContact) => dispatch => {
    axios.put(`/editcontact/${id}`,updatedContact)
    .then(()=> dispatch(getContact()))
    .catch((err) => console.log(err))
}