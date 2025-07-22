console.clear()
console.log(`API rest designers`) // titulo de la API

const cors = require(`cors`) // usamos cors
const express = require(`express`) // usamos express
const mongoose = require(`mongoose`) // usamos mongoose
const {router} = require('./router') // importamos los routers

const PORT = 3000 // puerto de uso
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/designers" // url

const conectar = async ()=>{

 await mongoose.connect(DATABASE_URL)
 .then(()=> console.log(`mongoose | Conectado a ${DATABASE_URL} ✅`))
 .catch(error => console.log(`mongoose | No conectado a ${DATABASE_URL} ❌`))
} // creamos la coneccion a mongoose

conectar() // conectamos a mongoose

const app = express() // definimos la app con express

app.use(cors()) // la app usa cors
app.use(express.json()) // la app usa express para lo json entrantes de las requests
app.use(express.urlencoded({extended : false})) // usamos el encoded para manejar los datos entrantes
app.use(router) // la app usa las rutas

app.listen(PORT , ()=> console.log(`Inicianod API rest en el puerto ${PORT}`)) // iniciamos la API