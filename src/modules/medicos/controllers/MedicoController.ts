import { request, Request, Response } from "express";
import CreateMedicoService from "../services/CreateMedicoService";
import DeleteMedicoService from "../services/DeleteMedicoService";
import ListMedicosService from "../services/ListMedicosService";
import ShowMedicoService from "../services/ShowMedicoService";
import UpdateMedicoService from "../services/UpdateMedicoService";

export default class MedicoController {

    // cria o produto
    public async create(request: Request, response: Response): Promise<Response> {
       let {name, area, idade, crm} = request.body;
        let createMedico = new CreateMedicoService()
        let medico = await createMedico.execute({
            name, area, idade, crm
        })
        return response.json(medico);
    }

    // remove o produto
    public async delete(request: Request, response: Response): Promise <Response> {
        // recupera id do produto
        let {id} = request.params
        // cria um objeto
        let deleteMedico = new DeleteMedicoService()
        // efetivamente remove
        await deleteMedico.execute({id}); 

        return response.json([]);
    }
    
    // consulta todos os produtos
    public async index(request: Request, response: Response): Promise<Response>{
        // cria objeto
        let listMedicos = new ListMedicosService()
        // chama o método para consultar todos os produtos
        let medicos= await listMedicos.execute();

        return response.json(medicos)
    } 

    // consulta um produto
    public async show(request: Request, response: Response): Promise<Response>{
        let {id} = request.params
        let showMedico = new ShowMedicoService()
        let medico = await showMedico.execute({id});
        return response.json(medico);
    }

    // atualiza o produto
    public async update(request: Request, response: Response): Promise<Response> {
        let {id} = request.params
        let {name, area, idade, crm} = request.body

        let updateMedico = new UpdateMedicoService();

        let medico = await updateMedico.execute({id, name, area, idade, crm});
        
        return response.json(medico)
    }
}