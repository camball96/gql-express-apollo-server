import { Car } from './models/car'


export const resolvers = {
    Query: {
        hello: () => "Hello there",
        cars: () => Car.find()
    },
    Mutation: {
        newCar: async (_, { model }) => {
            const yourCar = new Car({ model });
            await yourCar.save()
            return yourCar;
        }
    }
}