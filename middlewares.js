const middleware404 = (req , res, next)=>{
    const error = new Error()
        error.message = `No encuentro endpoint`
        error.status = 404
    next( error )
} // middleware para error 404

const middleware500 = ( error, req , res , next )=>{
    let status = error.status || 500
    let message = error.message || `Error interno en la API`
    let data = null

    res.status(500).json({status , message , data})
} // middleware para error 500

// exportamos los middlewares
module.exports = {
    middleware404,
    middleware500
}