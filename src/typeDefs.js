import { gql } from 'apollo-server-express';

export const typeDefs  = gql`
    type Query {
        hello: String
        cars: [Car!]!
    }
    type Car {
        id: ID!
        model: String!,
    }
    type Mutation {
        newCar(model: String!): Car!
    }
`;