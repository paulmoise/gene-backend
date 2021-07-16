import mongoose from 'mongoose'
import generateMongoSchema from '../ourSchema/validation';

const { Schema } = mongoose;

export default function createModel(route) {
    //return mongoose.model(route.name, new Schema(route.schema))
    return mongoose.model(route.name, generateMongoSchema(route.schema))
}