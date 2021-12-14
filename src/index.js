import { ApolloServer, gql } from 'apollo-server'
import { typeDefs, resolvers } from './schema'

const port = 4000

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers })

// The `listen` method launches a web server.
server.listen({ port }, () => {
  console.log(`🚀 Server started at port ${port}`)
})
