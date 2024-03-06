const express = require('express')
const path = require('path')

const startServer = (options) => {
  const { port, public_path = 'public'} = options
   
 const app = express()
//para poder usar los middlewares se usa la palabra "use" de Express.js
 app.use(express.static(public_path))//contenido estatico que ponemos disponible

 app.get( '*',(req, res) => {
    const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
    res.sendFile(indexPath)
 })
     app.listen(port, () => {
        console.log(`Servidor corriendo en el puerto ${port}`)
     })

}
module.exports = {
    startServer
}
