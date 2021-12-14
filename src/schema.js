import { gql } from 'apollo-server-express'

const typeDefs = gql`
  type Query {
    hello: String!
  }
`

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin'
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster'
  }
]

const resolvers = {
  Query: {
    hello: () => 'hello'
  }
}

export { typeDefs, resolvers }
