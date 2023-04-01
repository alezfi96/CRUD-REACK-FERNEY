import express  from "express";
import cors from 'cors'

//importamos la conexion ala base de datos 
import db from './database/db.js'
/// importamos el enrutador
import blogRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/blogs',blogRoutes)

try {
    await db.authenticate()
    console.log('conexion exitosa ala base de datos')
} catch (error) {
    console.log(`el error de conexion es : ${error}`)
}

app.get('/',(req,res)=>{
    res.send('HOLA MUNDO FERNEY')
})

app.listen(8000,()=>{
    console.log('servicio corriendo en http://localhost:8000/')
})