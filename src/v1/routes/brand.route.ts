import express from 'express'
import {getBrandProducts} from '../controllers/brand.controller'

const brandRouter = express.Router()

brandRouter.get('/:brandName', getBrandProducts)

export {brandRouter}
