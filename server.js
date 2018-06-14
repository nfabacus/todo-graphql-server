const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
// const models = require('./models')
// const mongoose = require('mongoose')
// const bodyParser = require('body-parser')
// const morgan = require('morgan')

// const cors = require('cors')

const app = express()

//DB Setup
// const MONGO_URI = 'mongodb://localhost/todo-graphql-db'
// mongoose.Promise = global.Promise
// mongoose.connect(MONGO_URI)
// mongoose.connection
//     .once('open', () => console.log('Connected to MongoDB instance.'))
//     .on('error', error => console.log('Error connecting to MongoDB:', error));

// app.use(bodyParser.json());
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true  //graphiql is only used for development server
}))

module.exports = app

