import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose'
import { typeDefs } from './src/typeDefs'
import { resolvers } from './src/resolvers'
import { MONGODB } from './config'


const startServer = async () => {
    const app = express();
    const server = new ApolloServer({typeDefs, resolvers});
    server.applyMiddleware({ app });
    await mongoose.connect( MONGODB, {useNewUrlParser: true, useUnifiedTopology: true});

    app.listen({ port:4001 }, () =>
        console.log('Server ready'));
}

startServer();