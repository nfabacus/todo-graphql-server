const graphql = require('graphql')
const { 
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList
} = graphql
const TodoType = require('./todo_type')

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: ()=>({
      todos: {
        type: new GraphQLList(TodoType),
        resolve() {
          return [
              {
                "id": "1",
                "title": "Shopping",
                "description": "Do shopping",
                // "complete": false
              },
              {
                "id": "2",
                "title": "Cleaning",
                "description": "Clean house",
                // "complete": false
              },
              {
                "id": "3",
                "title": "School run",
                "description": "Take kids to school",
                // "complete": true
              }
            ]
        }
      }
  })
})

module.exports = RootQueryType