import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core'
import express from 'express'
import http from 'http'
import typeDefs from './typeDefs'
import resolvers from './resolvers'
import mongoose from 'mongoose'

async function startApolloServer(typeDefs, resolvers) {
  const port = 4000
  const app = express()
  const httpServer = http.createServer(app)

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
  })

  await server.start()
  server.applyMiddleware({
    app,
    path: '/'
  })

  await mongoose.connect('mongodb://localhost:27017/test')

  await new Promise(resolve => httpServer.listen({ port }, resolve))
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
}

startApolloServer(typeDefs, resolvers)
