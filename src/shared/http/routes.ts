import {Router} from 'express'

const routes = Router();

import productRouter from '../../modules/products/routes/product.routes'
import medicoRouter from '../../modules/medicos/routes/medico.routes'

routes.use('/products', productRouter)
routes.use('/medicos', medicoRouter)

export default routes