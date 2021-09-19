import AppError from "../../../shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Medico from "../typeorm/entities/Medico";
import MedicoRepository from "../typeorm/repository/MedicoRepository";


// criar um tipo de dado
interface IRequest {
    name: string,
    area: string,
    crm: number,
    idade: number,
}

class CreateMedicoService {

    // cria função execute
    public async execute({name, area, crm, idade}: IRequest): Promise <Medico> {
        // recupera o repositório do produto
        let medicoRepository = getCustomRepository(MedicoRepository)
        let medicosExists = await medicoRepository.findByName(name);
        
        // regra de negócio
        if (medicosExists){
            console.log(`Vai entrar`)
            throw new AppError("Já existe medico com este nome");
        }

        // cria um novo produto que não existe
        const medico = medicoRepository.create({
            name, area, crm, idade
        })

        // salva produto no banco de dados
        await medicoRepository.save(medico);

        return medico;
    }
}

export default CreateMedicoService;