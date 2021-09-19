
// vamos criar a interface de coleta de dados
import AppError from "../../../shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import MedicoRepository from "../typeorm/repository/MedicoRepository";

interface IRequest {
    id: string
}

// criar classe
class DeleteMedicoService {

    // cria método execute
    public async execute({id}: IRequest): Promise<void>{
        // recupera o repositório do produto
        let medicoRepository = getCustomRepository(MedicoRepository);
        // recupera o produto para remover
        let medico = await medicoRepository.findOne(id)
        if (!medico) { //produto não existe
            throw new AppError('Medico inexistente')
        }
        // produto existe
        await medicoRepository.remove(medico);
    }

}

export default DeleteMedicoService