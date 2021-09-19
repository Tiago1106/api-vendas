import AppError from "../../../shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Medico from "../typeorm/entities/Medico";
import MedicoRepository from "../typeorm/repository/MedicoRepository";


// tipo de dados
interface IRequest {
    id: string,
    name: string,
    area: string,
    crm: number,
    idade: number,
}

class UpdateMedicoService {

    public async execute({id, name, area, crm, idade}: IRequest): Promise<Medico>{

        let medicoRepository = getCustomRepository(MedicoRepository);
        let medico = await medicoRepository.findOne(id)
        // verifica se o produto não existe
        if (!medico){
            throw new AppError('Medico não existe')
        }
        // verifica se já tem produto com aquele nome
        let medicoExists = await medicoRepository.findByName(name)
        if (medicoExists){
            throw new AppError('Medico já tem um nome deste')
        }
        // pode atualizar
        medico.name = name
        medico.area = area
        medico.crm = crm
        medico.idade = idade

        await medicoRepository.save(medico) // atualiza pois id já existe
        
        return medico
    }
}

export default UpdateMedicoService