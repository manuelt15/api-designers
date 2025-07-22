const express = require(`express`)
const router = express.Router()
const {middleware404, middleware500} = require(`./middlewares`)
const { getUsers, loginUsers, postUserNuevo, getProfiles, postProfile, putProfiles, patchProfiles, getProfilesById, getProfilesbyNombre, getProfilesByEdad, getProfilesByDisponible, getProfilesByDesign, deleteProfiles } = require("./controllers")

//ruta para users y loging
router.route(`/users`)
.get(getUsers)
.post(loginUsers)

// ruta para registrar nuevo user
router.route(`/register`)
.post(postUserNuevo)

// ruta para profiles
router.route(`/profiles`)
.get(getProfiles)
.post(postProfile)
.put(putProfiles)
.patch(patchProfiles)

// rutas de nombre , id , disponible , edad
router.route(`/profiles/_id/:_id`)
.get(getProfilesById)

router.route(`/profiles/name/:name`)
.get(getProfilesbyNombre)

router.route(`/profiles/edad/:edad`)
.get(getProfilesByEdad)

router.route(`/profiles/disponible/:disponible`)
.get(getProfilesByDisponible)

router.route(`/profiles/design/:design`)
.get(getProfilesByDesign)

// ruta de delete profiles
router.route(`/profiles/:_id`)
.delete(deleteProfiles)

// redireccion para rutas inexsistentes
router.all(`/{*splat}` , middleware404)
router.use(middleware500)

// exportamos el router
module.exports ={
    router
}