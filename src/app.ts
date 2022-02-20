import express from 'express'
import routes from './routes'

// · INICIALIZATIONS ·
const app = express();

// · SETTINGS ·
app.set('port', process.env.PORT || 3001)

// · MIDDLEWARES ·
app.use(express.urlencoded({extended:false}))
app.use(express.json())

// · ROUTES ·
app.use(routes)
app.use(function HandlingErrorRoutes(err:any, req:any, res:any, next:any) {
    res.status(500).send(err)
})

export default app
