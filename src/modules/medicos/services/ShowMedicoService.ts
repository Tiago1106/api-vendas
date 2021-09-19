import AppError from "../../../shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Medico from "../typeorm/entities/Medico";
import MedicoRepository from "../typeorm/repository/MedicoRepository";

interface IRequest {
    id: string
}

class ShowMedicoService {
    public async execute({id}: IRequest): Promise<Medico> {

        let medicoRepository = getCustomRepository(MedicoRepository);
        let medico = await medicoRepository.findOne(id);
        // produto não existe
        if (!medico){
            throw new AppError('medico não foi encontrado');
        }
        // produto existe
        return medico;
    }
}

export default ShowMedicoService