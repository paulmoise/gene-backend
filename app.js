import express from 'express'
import mongoose from 'mongoose'
const {Schema} = mongoose;

const app = express()
import './ourSchema/schemaType'
import { Password, Text, Email } from './ourSchema/schemaType'
import generateMongoSchema from './ourSchema/validation'

const user2 = {
	name: String,
	email: Email,
	createAt : Date,
	isValid: Boolean,
	pwd : String,
	weight: Number,
	photo: Buffer
}


const user = {
	name: {
		type: Text,
		minlength: 3,
		maxlength: 255,
		required: true
	},
	email: Email,
	password: Password,
	confirmPassword: {
		type: Password,
		required: true,
		match: /^[a-z]/
	},
	age: Number,
	avatar: {
		type: File,
		accept: 'pdf',
		maxSize: '1Mo',
		required: true

	},
	createAt: {
		type: Date,
		min: '2021-06-06',
		max: '2025-09-01',
		required: true,
		reaire: true
	},
	categorie: {
		type: mongoose.Types.ObjectId,
		ref: 'categorie'
	},
	role: {
		type: String,
		enum: ['USER', 'ADMIN', 'SUPER-ADMIN']
	},
	something: String, 
	enable: {
		type: Boolean,
		default: true
	},
	secondEmail: Email

}
 
// console.log(mongoose.model('something', generateMongoSchema(user2)))
 
const PORT = process.env.PORT || 4200
app.listen(PORT, () => {
	console.log('App listen on port '+PORT)
})