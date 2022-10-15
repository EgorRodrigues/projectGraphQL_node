import { randomUUID } from "node:crypto";
import { ApolloServer, gql } from "apollo-server";

/**
 * Under fetching
 * Rota HTTP que retorna dados de menos
 * 
 * Over fectching
 * Rota HTTP retorna mais dados do que precisamos 
 */

/**
 * Schema first approach
 * Code first
 */


const typeDefs = gql`
  type User {
    id: String!
    name: String!
  }

  type Query {
    users: [User!]! # ! significa que é um retorno obrigatório e sera string
  } 
  
  type Mutation {
    createUser(name: String!): User!
  }
`

interface User {
  id: string
  name: string
}

const users: User[] = [];

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      users: () => {
        return users
      }
    },

    Mutation: {
      createUser: (parent, args, ctx) => {
        const user = {
          id: randomUUID(),
          name: args.name,
        }

        users.push(user)

        return user
      }
    }
  }
})

server.listen().then(({ url }) => {
  console.log(`🚀 HTTP server running on ${url}`)
})