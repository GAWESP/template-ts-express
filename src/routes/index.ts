import featuresRoutes from './features.routes'

import {Router} from 'express'
const routes = Router()

routes.use('/features',featuresRoutes)

export default routes