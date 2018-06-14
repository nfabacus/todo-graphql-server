
const graphql = require('graphql')
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql

const TodoType = new GraphQLObjectType({
  name: 'Todo',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    description: { type: GraphQLString }    
  })
})

module.exports = TodoType