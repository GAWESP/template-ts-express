import * as features from '../controllers/features.controller'
import {Router} from 'express'

const events = Router()

events.get('/HelloWorld',features.HelloWorld)

export default events