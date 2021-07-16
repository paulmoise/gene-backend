import mongoose from 'mongoose';
const { Schema } = mongoose;
var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

// default email schema
let defaultEmailSchema = {
    type: String,
    trim: true,
    //lowercase: true,
    //unique: true,
    //required: true,
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
}

// default password schema
let defaultPasswordSchema = {
    type: String,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
}

// Mongoose default validations
const MONGOOSE_VALIDATIONS = {
    "STRING": ['minlength', 'maxlength', 'match', 'enum', 'uppercase', 'lowercase', 'trim', 'required', 'validate', 'default'],
    "NUMBER": ['min', 'max', 'enum', 'required', 'validate', 'default'],
    "DATE": ['min', 'max', 'required', 'validate', 'default']
}

// get intersection of array
const arrIntersection = (arr1, arr2) => {
    return arr1.filter(x => arr2.includes(x))
}

/**
 * 
 * @param {object} ourSchema  like a mongo schema with 
 * {File : input file, Text: input text, Number for input number }
 * @returns object that is mongoose schema
 */
const generateMongoSchema = (ourSchema) => {
    let builtSchema = {}
    for (const [key, value] of Object.entries(ourSchema)) {

        if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
            builtSchema = { ...builtSchema, [key]: getSchemaFromObjectValue(value) }
        } else if (Array.isArray(value)) {

            builtSchema = { ...builtSchema, [key]: value }

        } else {
            builtSchema = { ...builtSchema, [key]: getDefaultSchema(value) }
        }
    }
    return new Schema(builtSchema)
}


function getSchemaFromObjectValue(value) {
    const type = value['type']
    let fieldSchema = {}
    if (type === 'Email' || type === 'Text' || type === String || type === Boolean)
        fieldSchema = { ...value, ...getDefaultSchema(type) }
    if (type === 'Password' || type === 'File' || type === Date) {
        const typeUpperCase = type === Date ? 'DATE' : 'STRING';
        fieldSchema = getDefaultSchema(type)
        fieldSchema = { ...fieldSchema, ...foundedMongoValidation(value, typeUpperCase) }
    }
    if (type === mongoose.Types.ObjectId)
        fieldSchema = { ...value }

    return fieldSchema
}

function foundedMongoValidation(obj, type) {
    let schema = {}
    let validations = Object.keys(obj)
    let foundedValidations = arrIntersection(validations, MONGOOSE_VALIDATIONS[type])
    foundedValidations.forEach((val) => {
        schema[val] = obj[val]
    })
    return schema
}

function getDefaultSchema(type) {
    let defaultSchema = {}
    switch (type) {
        case 'Text':
            defaultSchema = { type: String };
            break;
        case 'Email':
            defaultSchema = defaultEmailSchema;
            break;
        case 'Password':
            defaultSchema = defaultPasswordSchema
            break;
        case 'File':
            defaultSchema = { type: String }
            break;
        case Number:
            defaultSchema = { type: Number }
            break;
        case Date:
            defaultSchema = { type: Date }
            break;
        case Boolean:
            defaultSchema = { type: Boolean }
            break;
        case String:
            defaultSchema = { type: String }
            break;
    }

    return defaultSchema;
}

export default generateMongoSchema;