
import {EntityRepository, Repository} from 'typeorm'
import Medico from '../entities/Medico'

@EntityRepository(Medico) // decorando a classe 
export default class MedicoRepository extends Repository<Medico> {

    // exemplo de uma implementação particular, pois é resto já temos
    public async findByName(name: string): Promise<Medico | undefined> {
        let user = this.findOne({ // procure o primeiro nome encontrado
            where: {
                name
            }
        })

        return user;
    }

    public async findByCrm(crm: string): Promise<Medico | undefined> {
        let user = this.findOne({ // procure o primeiro nome encontrado
            where: {
                crm
            }
        })

        return user;
    }

    public async findById(id: string): Promise<Medico | undefined> {
        let user = this.findOne({ // procure o primeiro nome encontrado
            where: {
                id
            }
        })

        return user;
    }
}

