import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://cam:12345@testing.pz1zl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

const app = express();

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () => "Hello there"
    }
}

const server = new ApolloServer({typeDefs, resolvers});

server.applyMiddleware({ app });

app.listen({ port:4000 }, () =>
    console.log('Server ready'));