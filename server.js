const express = require('express')
const { MongoClient, ObjectID } = require('mongodb')
const app = express()
app.use(express.json())
const mongo_url = "mongodb://localhost:27017"
const db_name = "contactManager"

MongoClient.connect(mongo_url, { useUnifiedTopology: true }, (err, client) => {
    if (err) throw err
    console.log("Database is connected")
    let db = client.db(db_name)

    app.post('/newcontact', (req, res) => {
        let newContact = req.body
        db.collection('contacts').insertOne(newContact, (err, contact) => {
            if (err) res.send('Cant add the new Contact')
            else res.send(contact)
        })
    })
    app.get('/allcontacts', (req, res) => {
        db.collection('contacts').find().toArray((err, contacts) => {
            if (err) throw err
            res.send(contacts)
        })
    })
    app.get('/contact/:id', (req, res) => {
        let contactId = ObjectID(req.params.id)
        db.collection('contacts').findOne({ _id: contactId }, (err, contact) => {
            if (err) throw err
            res.send(contact)
        })
    })
    app.delete('/deletecontact/:id', (req, res) => {
        let contactId = ObjectID(req.params.id)
        db.collection('contacts').findOneAndDelete({ _id: contactId }, (err, data) => {
            if (err) throw err
            if (data.value) {
                res.send('The contact was deleted')
            } else {
                res.send('Did not find the contact')
            }
        })
    })
    app.put('/editcontact/:id', (req, res) => {
        let contactId = ObjectID(req.params.id)
        db.collection('contacts').findOneAndUpdate({ _id: contactId }, { $set: { ...req.body } }, (err, data) => {
            if (err) throw err
            db.collection('contacts').findOne({ _id: contactId }, (err, contact) => {
                if (err) throw err
                res.send(contact)
            })
        })
    })
})

app.listen(5000, (err) => {
    if (err) throw err
    else console.log('Server is up and running on port 5000')
})
