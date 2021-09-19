
import { celebrate, Segments, Joi } from 'celebrate';
import {Router} from 'express';


import MedicoController from '../controllers/MedicoController';

let medicoRouter = Router()

let medicoController = new MedicoController()

// não temos nada para validar
medicoRouter.get('/', medicoController.index)
medicoRouter.get('/:id', 
celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}),
medicoController.show)
// validar que o post precisa de um produto
medicoRouter.post('/', 
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            area: Joi.string().required(),
            idade: Joi.number().required(),
            crm: Joi.number().required()
        }
    }),
    medicoController.create)
medicoRouter.put('/:id', 
celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    },
    [Segments.BODY]: {
        name: Joi.string().required(),
        area: Joi.string().required(),
        idade: Joi.number().required(),
        crm: Joi.number().required()
    }
}),
medicoController.update)
medicoRouter.delete('/:id', 

celebrate({
    [Segments.PARAMS]: {
        id: Joi.string().uuid().required()
    }
}),
medicoController.delete)

export default medicoRouter