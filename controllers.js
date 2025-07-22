const {profiles , users} = require(`./models`)

// controllers para users

// buscamos los usuarios
const getUsers = async (req ,res , next)=>{
    try {
        const buscar = await users.find()
        res.status(200).json({message : `Buscando usuarios` , data : buscar})
    } catch (error) {
        next(error)
    }
}

// registramos nuevo usuario
const postUserNuevo = async (req , res , next)=>{
    try {
        const {username , password} = req.body
        const buscar = await users.findOne({username})

        if(buscar){
            res.json({message: `El usuario ya esta creado` , data: null})
        }else{
            const nuevo = new users({
                username : username,
                password : password
            })
            await nuevo.save()
            res.status(200).json({message : `Nuevo usuario agregado` , data: nuevo})
        }
    } catch (error) {
        next(error)
    }
}

// login de usuario
const loginUsers = async (req , res , next)=>{
    const {username , password} = req.body
    try {
        const user = await users.findOne({username})

        if(!user){
            return res.status(401).json({success: false , message: `Usuario no encontrado`})
        }
        if(user.password !== password){
            return res.status(401).json({success : false , message : `Contraseña incorrecta`})
        }

        return res.status(200).json({success : true , user})
    } catch (error) {
        next(error)
    }
}

// controllers para profiles 

// buscamos los profiles
const getProfiles = async (req , res , next)=>{
    try {
        const buscar = await profiles.find()
        res.status(200).json({message: `Buscando todos los perfiles` , data : buscar})
    } catch (error) {
        next(error)
    }
}

// buscamos los perfiles por ID
const getProfilesById = async (req , res , next)=>{
    try {
        const {_id} = req.params
        const buscar = await profiles.findById(_id)
        res.status(200).json({message : `Buscando el perfil con el id ${_id}` , data : buscar})
    } catch (error) {
        next(error)
    }
}

// buscamos por nombre
const getProfilesbyNombre = async (req, res , next)=>{
    try {
        const {name} = req.params
        const buscar = await profiles.find({name : name})
        res.status(200).json({message : `Buscando el perfil con el nombre ${name}` , data: buscar})
    } catch (error) {
        next(error)
    }
}

// buscamos por edad
const getProfilesByEdad = async (req , res , next)=>{
    try {
        const {age} = req.params
        const buscar = await profiles.find({age : age})
        res.status(200).json({message : `Buscando el perfil con la edad ${age}` , data: buscar})
    } catch (error) {
        next(error)
    }
}

// buscamos por disponible
const getProfilesByDisponible = async (req, res , next)=>{
    try {
        const {disponible} = req.params
        const buscar = await profiles.find({disponible : disponible})
        res.status(200).json({message : `Buscando los perfiles cons disponibilidad ${disponible}` , data : buscar})

    } catch (error) {
        next(error)
    }
}

// buscamos por design
const getProfilesByDesign = async (req , res , next)=>{
    try {
        const {design} = req.params
        const buscar = await profiles.find({design : design})
        res.status(200).json({message : `Buscando los perfiles por ${design}` , data : buscar})
    } catch (error) {
        next(error)
    }
}

// post de profiles
const postProfile = async (req , res, next)=>{
    try {
        const {name , email , age , design , disponible , src} = req.body
        const nuevo = new profiles({
            name : name,
            email : email,
            age : age,
            design : design,
            disponible : disponible,
            src : src
        })
        await nuevo.save()
        const buscar = await profiles.find()
        res.status(200).json({message : `Nuevo profile agregado` , data : buscar})
    } catch (error) {
        next(error)
    }
}

// put de profiles
const putProfiles = async (req , res, next)=>{
    try {
        const {_id , ...datos} = req.body
        const actualizar = await profiles.findByIdAndUpdate(_id , datos)
        const buscar = await profiles.find()
        res.status(200).json({message : `Actualizando profile con el ${_id}` , data : buscar})
    } catch (error) {
        next(error)
    }
}

// patch de profiles
const patchProfiles = async (req , res, next)=>{
    try {
        const {_id , ...datos} = req.body
        const actualizar = await profiles.findByIdAndUpdate(_id , datos)
        const buscar = await profiles.find()
        res.status(200).json({message : `Actualizando profile con el ${_id}` , data : buscar})
    } catch (error) {
        next(error)
    }
}

// delete profiles
const deleteProfiles = async (req , res, next)=>{
    try {
        const {_id} = req.params
        const buscar = await profiles.findByIdAndDelete(_id)
        res.status(200).json({message : `Borrando el profile con el id ${_id}` , data: buscar})
    } catch (error) {
        next(error)
    }
}

// exportamos todos controllers
module.exports = {
    getUsers,
    postUserNuevo,
    loginUsers, 
    getProfiles, 
    getProfilesById,
    getProfilesbyNombre, 
    getProfilesByDisponible, 
    getProfilesByDesign,
    getProfilesByEdad,
    postProfile, putProfiles, patchProfiles,
    deleteProfiles
}