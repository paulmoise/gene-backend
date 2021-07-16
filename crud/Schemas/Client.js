import mongoose from 'mongoose'
import { Password,Text, File , Email} from '../../ourSchema/schemaType';

const Client = {
	name: Text,
	email: Email,
	createAt : Date,
	isValid: Boolean,
	pwd : Password ,
	weight: Number,
	photo: File
}

export default Client;
