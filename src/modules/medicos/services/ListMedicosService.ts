import { getCustomRepository } from "typeorm";
import Medico from "../typeorm/entities/Medico";
import MedicoRepository from "../typeorm/repository/MedicoRepository";


class ListMedicosService {
    
    public async execute(): Promise<Medico[]>{

        // recupera o repositório do produto
        let medicoRepository = getCustomRepository(MedicoRepository)

        let medicos = await medicoRepository.find()

        return medicos;
    }
}

export default ListMedicosService;