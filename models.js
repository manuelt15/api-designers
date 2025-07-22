const mongoose = require(`mongoose`)

// esquema de datos
const profilesSchema = mongoose.Schema(
    {name: String , email: String, age: Number , design: String , disponible: Boolean , src: String},
    {collection: `profiles`}
)
// esquema de datos
const usersSchema = mongoose.Schema(
    {username: String , password: String },
    {collection: `users`}
)

// modelo de los datos
const profiles = mongoose.model( `profiles` , profilesSchema)
const users = mongoose.model(`users` , usersSchema)

// exportamos los modelos
module.exports = {
    profiles,
    users
}