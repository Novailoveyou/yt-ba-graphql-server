import Cat from './models/Cat'

const resolvers = {
  Query: {
    hello: () => 'hello',
    cats: async () => await Cat.find()
  },
  Mutation: {
    createCat: async (_, { name }) => {
      const kitty = new Cat({ name })
      await kitty.save()
      return kitty
    }
  }
}

export default resolvers
